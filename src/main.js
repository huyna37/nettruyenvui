import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers/router";
import '@/assets/style.css'
import store from "@/store/store";


const app = createApp(App)

app.use(router);
app.use(store);
require("@/Unilities/extentions/stringExtensions");
app.mount('#app');