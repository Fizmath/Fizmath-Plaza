<script setup>
import { useGlobal } from '@/stores/global';
import { FilterMatchMode } from '@primevue/core/api';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';


const iglobal = useGlobal()
const toast = useToast();
const dt = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const product = ref({});
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    participating: { value: null, matchMode: FilterMatchMode.EQUALS }

});
const submitted = ref(false);

onMounted(() => {
    getstores();
});

function openNew() {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
}

function hideDialog() {
    productDialog.value = false;
    submitted.value = false;
}



function exportCSV() {
    dt.value.exportCSV();
}



const saveStore = () => {
    submitted.value = true;
    if (product.value.id) {
        rebrand(product.value)
        productDialog.value = false;

    }else
    if (product?.value.name?.trim() && product?.value.location?.trim()) {
        axios.post('/api/stores', {
                name: product.value.name,
                location: product.value.location
            })
            .then((response) => {
                product.value.id = response.data.id;
                product.value.participating = false;
                iglobal.sstores.push(product.value);
                toast.add({ severity: 'success', summary: 'Successful', detail: 'Store Created', life: 3000 });
            })
            .catch((error) => {
                alert(error);
            });
            productDialog.value = false;
    }

};

const participation = (id , onof)=> {
    if (onof === true) {
        axios.delete('/api/stores/' + id + '/participating', {
                params: {}
            })
            .then((response) => {
                console.log(response.data);
                toast.add({ severity: 'success', summary: 'Successful', detail: 'OFF Particapation', life: 3000 });
            })
            .catch((error) => {
                alert(error);
            });
    } else {
        axios
            .put('/api/stores/' + id + '/participating', {
                params: {}
            })
            .then((response) => {
                console.log(response.data);
                toast.add({ severity: 'success', summary: 'Successful', detail: 'ON Particapation', life: 3000 });

            })
            .catch((error) => {
                alert(error);
            });
    }
};

const getstores = async () =>{
    await  axios.get("/api/stores", {
            }).then(response => {
            iglobal.sstores.splice(0)
            iglobal.sstores.push(...response.data.stores)
        })
        .catch((error) => {
            alert(error);
        });
};

function editStore(prod) {
    product.value = { ...prod };
    productDialog.value = true;
}

function delstore(prod) {
    product.value = { ...prod };
    deleteProductDialog.value = true;
}

const rebrand = async (data) =>{
    await  axios.put('/api/stores/' + data.id + '/edit', {
            name: data.name,
            location: data.location

            }).then(response => {
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Store Renamed', life: 3000 });

        })
        .catch((error) => {
            alert(error);
        });
        sleep(1000).then(() => getstores());


};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const delAstore = (id)=> {
    deleteProductDialog.value = true

    axios.delete("/api/stores/delst/"+id+"", {
          }).then(response => {
            toast.add({ severity: 'warn', summary: 'Successful', detail: 'Store and all its product deleted from Data Base', life: 4000 });
            getstores()

          }).catch(error => {
            alert(error)
          })
    deleteProductDialog.value = false;
}

</script>

<template>
    <div>
        <div class="card">
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar>

            <DataTable
                ref="dt"
                :value="iglobal.sstores"
                dataKey="id"
                :paginator="true"
                :rows="10"
                filterDisplay="menu"
                v-model:filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <div class="font-semibold text-xl mb-4">Plaza Stores ADMIN </div>

                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column field="id" header="Store ID" sortable style="min-width: 8rem"></Column>
                <Column field="name" header="Name" sortable style="min-width: 8rem"></Column>
                <Column field="location" header="Location" sortable style="min-width: 8rem"></Column>
                <Column field="participating"  header="Participating"  dataType="boolean" style="min-width: 4rem">
                    <template #body="slotProps">
                        <ToggleSwitch class="mr-2" @click="participation(slotProps.data.id, slotProps.data.participating)" v-model="slotProps.data.participating" />
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary @change="filterCallback()" />
                    </template>
                </Column>
                <Column header="Add Products" style="min-width: 8rem">
                    <template #body="slotProps">
                        <RouterLink :to= "{ name: 'StoreProducts' ,params:{ dynamic:slotProps.data.id } }"  >
                           <Button label="Products"  outlined rounded class="mr-2" @click="iglobal.StoreINFO(slotProps.data.id, slotProps.data.name , slotProps.data.location)" />
                        </RouterLink>
                    </template>
                 </Column>

                
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editStore(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="delstore(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Add Store or Edit Store " :modal="true">
            <div class="flex flex-col gap-6">
                <div>
                    <label for="name" class="block font-bold mb-3">Name</label>
                    <InputText id="name" v-model.trim="product.name" required="true" :invalid="submitted && !product.name" fluid />
                    <small v-if="submitted && !product.name" class="text-red-500">Name is required.</small>
                </div>
                <div>
                    <label for="location" class="block font-bold mb-3">Location</label>
                    <InputText id="location" v-model.trim="product.location" required="true"  :invalid="submitted && !product.location" fluid />
                    <small v-if="submitted && !product.location" class="text-red-500">Name is required.</small>
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveStore" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="product">Hey ya' sure  delete yo' ? <b>{{ product.name }}</b>? <br /> 
                    All it's products will be deleted from the DataBase</span
                >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
                <Button label="Yes" icon="pi pi-check" @click="delAstore(product.id)" />
            </template>
        </Dialog>

    </div>
</template>
