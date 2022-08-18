import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'material-icons/iconfont/material-icons.css';
import "./assets/main.css";
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            statusMenu: false
        }
    },
})

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
