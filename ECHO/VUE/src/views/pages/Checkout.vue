<script setup>

import { useGlobal } from '@/stores/global';
import { FilterMatchMode } from '@primevue/core/api';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { computed, onBeforeMount, reactive, ref } from 'vue';


const toast = useToast();
const dt = ref();
const deleteProductDialog = ref(false);
const selectedProducts = ref(false);
const submitted = ref(false);
const customer = ref({});
const byid = ref({});
const value1 = ref(1000);
const orderItems = reactive([]);
const allowsubmit = ref(false);
const iglobal = useGlobal();
const expandedRows = ref([]);
const allorders  = reactive([])
const newc = reactive([]);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

onBeforeMount(() => {
    getOrders();
});


function formatCurrency(value) {
    if (value) return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    return;
}


function exportCSV() {
    dt.value.exportCSV();
}


const t1 =  computed(() => {
    let t2 = 0;
    for (const ii in iglobal.basket){
        t2 += iglobal.basket[ii].price * iglobal.basket[ii].quant;
    }    
    return t2
});


const deleteProduct = (data) => {
    var index = iglobal.basket.findIndex((aa) => aa.id == data.id);
    iglobal.basket.splice(index, 1);
    deleteProductDialog.value = false;
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted from Basket', life: 3000 });
};



const saveCus = () => {
    submitted.value = true;
    if (customer.value.name && customer.value.phone.trim() && customer.value.phone) {
        axios.post('/api/customers', {
                name: customer.value.name,
                phone: customer.value.phone,
            })
            .then((response) => {
                newc.id = response.data.id;
                newc.name = customer.value.name;
                newc.phone = customer.value.phone;
                toast.add({ severity: 'success', summary: 'Successful', detail: 'NEW ID : Costomer registerd ', life: 3000 });
            })
            .catch((error) => {
                alert(error);
            });

    }
};

const getcus = (id)=> {
    if (byid?.value.id?.trim()) {
    axios.get("/api/customers/"+id+"", {
          }).then(response => {
            newc.id = response.data.customer.id ,
            newc.name = response.data.customer.name ,
            newc.phone = response.data.customer.phone ,
            selectedProducts.value = true,

            toast.add({ severity: 'success', summary: 'Successful', detail: 'Your INFO retreived ', life: 3000 });
          }).catch(error => {
            alert(error)
          })
        byid.value = {};
        }   
};



const paymentID = () => {
    if (newc.id) {
        axios.post('/api/payments', {
            amount: value1.value , 
            })
            .then((response) => {
                newc.paymentid = response.data.id;
                toast.add({ severity: 'success', summary: 'Successful', detail: 'Payment Authorized ', life: 3000 });
                allowsubmit.value = true

            })
            .catch((error) => {
                alert(error);
            }) } else {
            toast.add({ severity: "warn", summary: 'Failed', detail: 'First Register a Costumer ', life: 3000 });
        }
    
};


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const submit = ()=> {
        var aaa = ordItem();
        axios.post('/api/ordering', {
            items: aaa, 
            customerId: newc.id ,
            paymentId: newc.paymentid ,
            })
            .then((response) => {
                newc.orderid = response.data.orderid;
                toast.add({ severity: 'danger', summary: 'Successful', detail: 'ORDER SENT ', life: 3000 });
            })
            .catch((error) => {
                alert(error);
            });
    iglobal.basket.splice(0, iglobal.basket.length);
    sleep(3000).then(() => getOrders());
    return
};

const ordItem = ()=> {
    for (const ii in iglobal.basket){
 
        orderItems.push({
            storeId : iglobal.basket[ii].storeId,
            productId :iglobal.basket[ii].id,
            storeName : iglobal.basket[ii].storN,
            productName : iglobal.basket[ii].name,
            price : iglobal.basket[ii].price,
            quantity : iglobal.basket[ii].quant,
        })
    }
    return orderItems
};



const getOrders =  () =>{
      axios.post("api/ordering/all", {
        eventSourcing: false
            }).then(response => {
            allorders.splice(0)
            allorders.push(...response.data.orders)
        })
        .catch((error) => {
            alert(error);
        });
        return      
};



const val3 =  computed(() => {
    return allorders.filter((obj) => obj.customerId === newc.id)
});

function allowInvoice(stat) {
    let a = false;
    if (stat == 'accepted')  {
        a = false
    } else {
        a = true
    }
    return a
}


const cancel = (id)=> {
    axios.delete("/api/ordering/"+id+"", {
          }).then(response => {
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Orders Cancelled', life: 3000 });
            sleep(1000).then(() => getOrders());
          }).catch(error => {
            alert(error)
          })

}

const payinvoice = (orderid)=> {
    axios.put("/api/payments/invoices/"+orderid+"/pay", {
          }).then(response => {
            toast.add({ severity: 'danger', summary: 'Successful', detail: 'THE  ORDER COMPLETED  ', life: 3000 });
            sleep(1000).then(() => getOrders());

          }).catch(error => {
            alert(error)
          })
}

</script>

<template>
    <div class="flex flex-col ">

        <div class="card mt-2 ">
            <div class="font-semibold text-xl mb-0">Customer's page</div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                    <div class="flex flex-col gap-2">
                        <InputText  v-model.trim="customer.name" type="text"  placeholder="Name" v-tooltip="'Your username'" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <InputText  v-model.trim="customer.phone" type="text" placeholder="Phone" v-tooltip="' for sending SMS'" />
                    </div>
                    <div class="flex">
                        <Button @click="saveCus" label="Register" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
                    </div>
                </div>
                <div class="w-full md:w-2/12">
                    <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
                    <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
                </div>
                <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                    <div class="flex flex-col gap-2">
                        <InputText v-model.trim="byid.id" style="width: 300px;" type="text" placeholder="Your ID" v-tooltip="' Enter Your ID'" />
                    </div>
                    <div class="flex">
                        <Button @click="getcus(byid.id)"  label="Get Your Account" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>

                    </div>
                </div>
            </div>
            <pre> Registerd : {{ newc.id }} </pre>

        </div>

        <div class="card ">
            <div class="font-semibold text-xl mb-2">Mock your payment </div>
            <div class="flex flex-wrap mb-2 gap-2  justify-center">
                <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="EUR"  style="width: 18rem" fluid />
                <Button @click="paymentID" label="Authorize" icon="pi pi-user"></Button>
            </div>
            <pre>Your Payment ID:      {{ newc.paymentid }} </pre>


        </div>

        
        <div class="card">
                    <RouterLink :to= "{ name: 'Shopping' }"  >
                        <Button  label="Shopping" severity="danger" outlined icon="pi pi-backward" class="w-full max-w-[8rem] mx-auto mb-4  "></Button>

                    </RouterLink>
                    <Tabs value="0">
                        <TabList>
                            <Tab value="0">Your Basket</Tab>
                            <Tab value="1">Your Orders</Tab>
                        </TabList>
    
        <TabPanels>
         <TabPanel value="0">
                <Toolbar class="mb-6">
                <template #start  >
                    <div class="flex gap-4">
                    <Button type="button"  @click="submit" :disabled="!allowsubmit" label="Submit" severity="info" icon="pi pi-check-circle"  outlined />
                    </div>
                </template>

                <template #end>
                    <pre>Total: {{ formatCurrency(t1) }}       </pre>
                </template>
               </Toolbar>

           <DataTable
                ref="dt"
                :value="iglobal.basket"
                :filters="filters"
            >

                <Column field="prodName" header="Product"  style="min-width: 12rem"></Column>
                <Column field="storNL" header="Store"  style="min-width: 16rem"></Column>
                <Column field="quant" header="Quantity"  style="min-width: 16rem">
                    <template #body="slotProps">
                        <InputNumber v-model="slotProps.data.quant" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" style="width: 8rem" :min="1" :max="99" fluid >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
                        </template>
            </Column>
                <Column field="priceF" header="Price" sortable style="min-width: 8rem">
                </Column>
            
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" @click="deleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </TabPanel>

        <TabPanel value="1">
        <Toolbar class="mb-6">
                <template #start>
                    <Button label="Refresh" icon="pi pi-database" severity="secondary" class="mr-2" @click="getOrders(false)" />
                </template>
                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
        </Toolbar>
        <DataTable 
                ref="dt"
                v-model:expandedRows="expandedRows" 
                :value="val3" 
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

            <Column expander style="width: 5rem" />
            <Column field="orderid" header="Order ID"></Column>
            <Column field="createdAt" header="UPDATED" sortable></Column>
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
            <Column field="statuss" header="Order Status" >
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="iglobal.OrderSeverity(slotProps.data.status)" />
                    </template>
            </Column>
            <Column  style="min-width: 4rem">
                    <template #body="slotProps">
                        <Button label="PAY" :disabled="allowInvoice(slotProps.data.status)"  icon="pi pi-check" outlined rounded  severity="contrast" @click="payinvoice(slotProps.data.orderid)" />
                        <Button label="Cancel" icon="pi pi-times" :disabled="iglobal.AllowCancel(slotProps.data.status)" outlined rounded severity="danger" @click="cancel(slotProps.data.orderid)" />
                    </template>
            </Column>


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
    </TabPanel>
</TabPanels>
                    </Tabs>
                </div>
        </div>

</template>
