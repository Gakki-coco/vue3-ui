import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Gakki from './components/Gakki.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/gakki', component: Gakki}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
