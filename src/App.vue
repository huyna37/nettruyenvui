<template>
    <loading v-show="isLoading" v-model:active="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="true" />
  <router-view></router-view>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
        ...mapState({
            isLoading: state => state.app.isLoading
        })
    },
    components: {
        Loading
    },
}
</script>
<style>
.active-link {
    color: red !important
}
.scrollbar::-webkit-scrollbar {
    width: 0.5rem;
    /* Chiều rộng của thanh cuộn */
}

.scrollbar::-webkit-scrollbar-thumb {
    background-color: #e2e8f0;
    /* Màu của thanh cuộn */
    border-radius: 0.25rem;
    /* Đường viền cong của thanh cuộn */
}

.scrollbar::-webkit-scrollbar-track {
    background-color: transparent;
    /* Màu của vùng bên trong thanh cuộn */
}

</style>
