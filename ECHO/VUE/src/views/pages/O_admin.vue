<script setup>

import { useGlobal } from '@/stores/global';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onBeforeMount, reactive, ref } from 'vue';

import axios from 'axios';

const dt = ref();
const iglobal = useGlobal();
const toast = useToast();
const allorders = reactive([]);
const showcancel = ref(true);
const expandedRows = ref([]);
const deleteProductsDialog = ref(false);
const selectedProducts = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS  },
});

onBeforeMount(() => {
    getOrders();
});

function confirmDeleteSelected() {
    deleteProductsDialog.value = true;
}



function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
}


const getOrders =  (event) =>{
      axios.post("api/ordering/all", {
        eventSourcing: event,
            }).then(response => {
            allorders.splice(0)
            allorders.push(...response.data.orders)
        })
        .catch((error) => {
            alert(error);
        });
        showcancel.value = !event
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Orders Retrieved', life: 3000 });
        

};

function exportCSV() {
    dt.value.exportCSV();
}


const cancel = (id)=> {
    axios.delete("/api/ordering/"+id+"", {
          }).then(response => {
          }).catch(error => {
            alert(error)
          })
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Orders Cancelled', life: 3000 });

}


function deleteSelectedProducts() {
        const fields = ['orderid']
        const newRecords = selectedProducts.value.map(i=>Object.fromEntries(fields.map(f=>[f, i[f]])))
        axios.post('/api/ordering/removebyd', {
                    Ids: newRecords,
                })
                .then((response) => {
                    toast.add({ severity: 'success', summary: 'Successful', detail: 'Selected Orders Deleted', life: 3000 });
                    getOrders()
                    toast.add({ severity: 'info', summary: 'Successful', detail: 'DataBase Refreshed ', life: 4000 });
                })
                .catch((error) => {
                    alert(error);
                });

        deleteProductsDialog.value = false;
        selectedProducts.value = null;
}


</script>
<template>

    <div class="card">
        <div class="font-semibold text-xl mb-4">Plaza ORDERS Admin </div>

        <Toolbar class="mb-6">
                <template #start>
                    <Button label="Refresh" icon="pi pi-database" severity="secondary" class="mr-2" @click="getOrders(false)" />
                    <Button label="Event Sourcing" icon="pi pi-database" severity="secondary" class="mr-2" @click="getOrders(true)" />

                    <Button label="Delete" icon="pi pi-trash" severity="secondary" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />

                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
        </Toolbar>
        <DataTable 
                ref="dt"
                v-model:selection="selectedProducts"
                v-model:expandedRows="expandedRows" 
                :value="allorders" 
                dataKey="createdAt" 
                v-model:filters="filters"
                tableStyle="min-width: 60rem">

            <template #header>
                <div class="flex flex-wrap justify-start gap-4">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..."  style="width: 400px;" />
                        </IconField>
                </div>
                
            </template>
            <Column selectionMode="multiple" style="width: 2rem" :exportable="false"></Column>

            <Column expander style="width: 5rem" />
            <Column field="orderid" header="Order ID"></Column>
            <Column field="createdAt" header="Date Created" sortable></Column>
            <Column field="statusP" header="Payment Status" >
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.statusP" :severity="iglobal.OrderSeverity(slotProps.data.statusP)" />
                    </template>
            </Column>            
            <Column field="statusS" header="Delivery Status" >
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.statusS" :severity="iglobal.OrderSeverity(slotProps.data.statusS)" />
                    </template>
            </Column>
            <Column field="statuss" header="Order Status"  >
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="iglobal.OrderSeverity(slotProps.data.status)" />
                    </template>
            </Column>
            <Column  style="min-width: 4rem">
                    <template #body="slotProps">
                        <Button label="Cancel" v-if=showcancel icon="pi pi-times" :disabled="iglobal.AllowCancel(slotProps.data.status)" outlined rounded severity="danger" @click="cancel(slotProps.data.orderid)" />
                    </template>
            </Column>
            <Column field="customerId" header="Customer ID"></Column>

            <template #expansion="slotProps">
                <div class="p-4">
                    <DataTable :value="slotProps.data.items">
                        <Column field="storeName" header="storename" ></Column>
                        <Column field="productName" header="Product" ></Column>
                        <Column field="quantity" header="Quantity" ></Column>

                        <Column field="price" header="Price" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.price) }}
                            </template>
                        </Column> 
                    </DataTable>
                </div>
            </template>
        </DataTable>
    </div>

    <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span>Are you sure you want to delete the <b>selected Orders</b> <br /> 
                   from the  DataBase ?</span >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>

</template>

