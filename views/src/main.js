//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'; // Styles CSS
import 'bootstrap'; // JS Bootstrap (nécessite Popper pour certains composants comme dropdowns)

const app = createApp(App)

app.use(router)

app.mount('#app')

//createApp(App).use(router).mount('#app')
