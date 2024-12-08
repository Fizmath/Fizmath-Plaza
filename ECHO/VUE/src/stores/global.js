
import { defineStore } from 'pinia'
import { reactive } from 'vue'


export const useGlobal = 
defineStore({
    id: 'PiniaStoreId',
    state: () => {
        return {
            storeid: '' ,
            name: '',
            location: '',
            sstores: reactive([]),
            basket: reactive([])
        }
    } ,
    actions:{

        AllowCancel(stat) {
            this.stat = stat
            let a = false;
            if (stat == 'delivered' || stat == 'cancelled' || stat == 'pending' ){
                a = true
            } else {
                a = false
            }
            return a
        },

        StoreINFO(a,b,c){
            this.storeid = a,
            this.name = b,
            this.location = c
        },

        OrderSeverity(order) {
            this.order = order
            switch (order) {
                case 'cancelled':
                    return 'danger';
                case 'pending':
                    return 'info';
                case 'accepted':
                    return 'success';    
                case 'rejected':
                    return 'warn';
                case 'delivered':
                    return 'contrast';   
                case 'Stores_CONFIRMED':
                    return 'success';
                case 'Payment_CONFIRMED':
                    return 'success';
                case 'NOT_ENOUGH_MONEY':
                    return 'danger'; 
                case 'OUT_OF_STOCK':
                    return 'danger';       
                default:
                    return null;
            }
        },
    }

})




