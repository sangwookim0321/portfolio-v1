import "../public/assets/css/main.css"
import "../public/assets/css/reset.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router).mount("#app")
