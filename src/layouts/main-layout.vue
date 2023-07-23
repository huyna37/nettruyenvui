<template>
    <Header></Header>
    <div class='container'>
        <router-view></router-view>
        <a href="#scroll" class="tw-fixed tw-right-[2%] tw-bottom-[10%] tw-text-[23px] tw-text-[rebeccapurple]">
            <i class="fa-solid" :class="{ 'fa-circle-arrow-up': isScrolledToBottom,  'fa-circle-arrow-down': !isScrolledToBottom}"></i>
        </a>
    </div>
    <Footer></Footer>
</template>
  
<script>

import store from '@/store/store';
import $ from "jquery";
import Header from './components/main-components/header.vue';
import Footer from './components/main-components/footer.vue';


export default {
    name: 'main-layout',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            isScrolledToBottom: false
        }
    },
    mounted() {
        // Thêm trình lắng nghe sự kiện scroll
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Gỡ bỏ trình lắng nghe khi component bị hủy
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            if(scrollPosition == 0) {
                this.isScrolledToBottom = false;
                return;
            }
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Kiểm tra nếu cuộn tới cuối trang hoặc gần cuối trang thì thay đổi class
            this.isScrolledToBottom = scrollPosition + windowHeight >= documentHeight;
        },
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
  