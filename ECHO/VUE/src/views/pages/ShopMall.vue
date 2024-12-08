<script setup>

import { useGlobal } from '@/stores/global';
import { FilterMatchMode } from '@primevue/core/api';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { computed, onBeforeMount, onMounted, reactive, ref } from 'vue';

onBeforeMount(() => {
    getStores();

});

onMounted(() => {
    getAllProds();

});

const iglobal = useGlobal();
const products = reactive([]);
const sstores = reactive([]);
const toast = useToast();
const dt = ref();
const productDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const submitted = ref(false);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});


function openNew() {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
}


function formatCurrency(value) {
    if (value) return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    return;
}


const deleteProduct = (data) => {
    var index = iglobal.basket.findIndex((aa) => aa.id == data.id);
    iglobal.basket.splice(index, 1);
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted from Basket', life: 3000 });
};


function exportCSV() {
    dt.value.exportCSV();
}



const getAllProds = ()=> {
    axios.get("/api/stores/products", {
          }).then(response => {
            products.splice(0)

            for(var i=0; i< sstores.length; i++ ){
                products.push( ...response.data.products.filter((data) => data.storeId === sstores[i].id) )
                    }
          }).catch(error => {
            alert(error)
          })
}


const getStores = async ()=> {
    await axios.get("/api/stores", {
          }).then(response => {
            sstores.splice(0)
            for(var i=0; i< response.data.stores.length; i++ ){
                if (response.data.stores[i].participating === true){
                    sstores.push(response.data.stores[i])
                }
                    }
          }).catch(error => {
            alert(error)
          })
}

const mapStores = (idd)=> {
    if (idd) {
        var dataObj = sstores.filter((data) => data.id === idd);
        return dataObj[0].name+" from "+dataObj[0].location;
    };

    return

}

const mapSto = (idd)=> {
    if (idd) {
        var dataObj = sstores.filter((data) => data.id === idd);
        return dataObj[0].name
    };

    return
}


const val3 =  computed(() => {
    let altrue = sstores.map(a => a.id);
    console.log(altrue)

    return products.filter((obj) => obj.storeId === newc.id)
});


const addtoCart = (data) => {
    for(var i=0; i<  iglobal.basket.length; i++ ){
        if(  iglobal.basket[i].id == data.id){
            return false
        }
    }
    data.prodName = data.name
    data.priceF = formatCurrency(data.price)
    data.storNL = mapStores(data.storeId)
    data.storN  = mapSto(data.storeId)
    data.quant = 1
    iglobal.basket.push(data);
};



</script>

<template>
    <div>
        <div class="card">
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="Basket"  severity="danger" class="mr-2" @click="openNew" icon="pi pi-cart-plus"  outlined :badge=String(iglobal.basket.length) badgeSeverity="danger" />
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
                        <div class="font-semibold text-xl mb-4">Purchase Products </div>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column field="description" header="Description" sortable style="min-width: 16rem"></Column>
                <Column  field="storeId" header="Store" sortable style="min-width: 16rem">
                    <template #body="slotProps">
                            {{ mapStores(slotProps.data.storeId) }}
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.price) }}
                    </template>
                </Column>
            
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-cart-plus" text raised rounded aria-label="Filter" @click="addtoCart(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" header="Your Basket" :style="{ width: '40vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <DataTable
             :value="iglobal.basket" 
             scrollable scrollHeight="flex" 
             tableStyle="min-width: 50rem">

                <Column field="prodName" header="Name" style="width: 5%"></Column>
                <Column field="storNL" header="Store" style="width: 10%"></Column>
                <Column field="priceF" header="Price" style="width: 5%"></Column>
                <Column :exportable="false" style="width: 5%">
                    <template #body="slotProps">
                            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" @click="deleteProduct(slotProps.data)" />
                    </template>
                </Column>

            </DataTable>
        </Dialog>



    </div>
</template>
