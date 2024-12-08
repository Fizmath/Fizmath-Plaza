<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Presentation', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'ADMIN',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Plaza Admin',
                icon: 'pi pi-fw pi-pencil',
                to: '/pages/plazaadmin'
            },
            {
                label: 'Order Admin',
                icon: 'pi pi-spin pi-cog',
                to: '/pages/orderadmin'
            },         
        ]
    },

    {
        label: 'CUSTOMERS',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
           {
                label: 'Shopping',
                icon: 'pi pi-fw pi-shopping-cart',
                to: '/pages/shopping'
            },            {
                label: 'Checkout',
                icon: 'pi pi-fw pi-check-circle',
                to: '/pages/Checkout'
            },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
