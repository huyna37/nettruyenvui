<template>
    <Header></Header>
    <div class='container'>
        <router-view></router-view>
    </div>
    <Footer></Footer>
</template>
  
<script>

import { useCookies } from 'vue3-cookies';
import store from '@/store/store';
import $ from "jquery";
import Header from './components/main-components/header.vue';
import Footer from './components/main-components/footer.vue';


export default {
    name: 'admin-layout',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            cookies: useCookies().cookies
        }
    },
    async created() {
       
    },
    methods: {
        onResize() {
            let windowsize = $(window)?.width();
            if (windowsize <= 769) {
                store.dispatch('app/setIsMobileDevice', true);
            }
            else {
                store.dispatch('app/setIsMobileDevice', false);
            }
        },
    }

}
</script>
  
<style></style>
  