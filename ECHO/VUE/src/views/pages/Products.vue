<script setup>
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, reactive, ref } from 'vue';


import { useGlobal } from '@/stores/global';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

onMounted(() => {
    getProds();
});

const router = useRouter()
const iglobal = useGlobal();
const products = reactive([]);
const route = useRoute()
const toast = useToast();
const dt = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const submitted = ref(false);


function formatCurrency(value) {
    if (value) return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    return;
}

function openNew() {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
}

function hideDialog() {
    productDialog.value = false;
    submitted.value = false;
}


function editProduct(prod) {
    product.value = { ...prod };
    productDialog.value = true;
}



function exportCSV() {
    dt.value.exportCSV();
}

function confirmDeleteSelected() {
    deleteProductsDialog.value = true;
}



const getProds = ()=> {
    axios.get("/api/stores/"+route.params.dynamic+"/products", {
          }).then(response => {
            products.splice(0)
            products.push(...response.data.products)
          }).catch(error => {
            alert(error)
          })
}


const saveProd = () => {
    submitted.value = true;
    if (product.value.id) {
        rebrand(product.value)
        productDialog.value = false;

    }else

    if (product?.value.name?.trim() && product?.value.description?.trim()) {
        axios.post("/api/stores/"+route.params.dynamic+"/products", {
                name: product.value.name,
                description: product.value.description,
                sku: product.value.sku,
                price: product.value.price
            })
            .then((response) => {
                product.value.id = response.data.id;
                products.push(product.value);
                toast.add({ severity: 'success', summary: 'Successful', detail: 'Product added', life: 3000 });
            })
            .catch((error) => {
                alert(error);
            });
            productDialog.value = false;
    }
};


function deleteSelectedProducts() {

        const fields = ['id']
        const newRecords = selectedProducts.value.map(i=>Object.fromEntries(fields.map(f=>[f, i[f]])))

        axios.post('/api/stores/delprods', {
                    Ids: newRecords,

                })
                .then((response) => {

                    toast.add({ severity: 'success', summary: 'Successful', detail: 'SelectedProducts Deleted', life: 3000 });
                    getProds()
                    toast.add({ severity: 'info', summary: 'Successful', detail: 'DataBase Refreshed ', life: 4000 });

                })
                .catch((error) => {
                    alert(error);
                });
        deleteProductsDialog.value = false;
        selectedProducts.value = null;
}


const rebrand = async (data) =>{
    await  axios.put('/api/stores/' + data.id + '/editproduct', {
            storeId: data.storeId,
            name: data.name,
            description: data.description,
            sku: data.sku,
            price: data.price,

            }).then(response => {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Edited ', life: 3000 });

        })
        .catch((error) => {
            alert(error);
        });
        sleep(1000).then(() => getProds());
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

</script>

<template>
    <div>
        <div>

        </div>
        <div class="card">
            <h5 class="m-0">Products page for the Store :</h5>
            <pre>
                
                Name:     {{ iglobal.name }} 
                Location: {{ iglobal.location }} 
                ID:       {{ $route.params.dynamic }}  
            </pre>
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="Stores" icon="pi pi-backward" severity="secondary" class="mr-2"  @click="router.back()" />
                    <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="secondary" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar>

            <DataTable
                ref="dt"
                v-model:selection="selectedProducts"
                :value="products"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column selectionMode="multiple" style="width: 2rem" :exportable="false"></Column>
                <Column field="id" header="Product ID"  style="min-width: 16rem"></Column>
                <Column field="name" header="Name" sortable style="min-width: 6rem"></Column>
                <Column field="description" header="Description" sortable style="min-width: 6rem"></Column>
                <Column field="sku" header="SKU" sortable style="min-width: 6rem"></Column>
                <Column field="price" header="Price" sortable style="min-width: 6rem">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true">
            <div class="flex flex-col gap-6">
                <div>
                    <label for="name" class="block font-bold mb-3">Name</label>
                    <InputText id="name" v-model.trim="product.name" required="true" autofocus :invalid="submitted && !product.name" fluid />
                    <small v-if="submitted && !product.name" class="text-red-500">Name is required.</small>
                </div>
                <div>
                    <label for="description" class="block font-bold mb-3">Description</label>
                    <InputText id="description" v-model.trim="product.description" required="true" autofocus :invalid="submitted && !product.name" fluid />
                    <small v-if="submitted && !product.description" class="text-red-500">Description is required.</small>
                </div>
                <div>
                    <label for="sku" class="block font-bold mb-3">SKU</label>
                    <InputNumber id="sku" v-model.trim="product.sku"  required="true" autofocus :invalid="submitted && !product.sku" :min="0"   fluid />
                    <small v-if="submitted && !product.sku" class="text-red-500">SKU is required.</small>
                </div>

                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="price" class="block font-bold mb-3">Price</label>
                        <InputNumber id="price" v-model="product.price" mode="currency" currency="EUR" locale="en-US" :min="0" fluid />
                    </div>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveProd" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="product"
                    >Are you sure you want to delete <b>{{ product.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
                <Button label="Yes" icon="pi pi-check" @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
    </div>
</template>
