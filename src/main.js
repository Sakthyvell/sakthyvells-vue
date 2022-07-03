import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

const app = createApp(App).use(router)
app.config.globalProperties.apiRoute = {
    blogUrl : process.env.VUE_APP_BLOG_API_URL
}
app.mount('#app')