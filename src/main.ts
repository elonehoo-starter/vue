import { createApp } from 'vue'
import {
  createRouter,
  createWebHistory,
  setupDataFetchingGuard,
} from 'vue-router/auto'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes
  },
})

setupDataFetchingGuard(router)

const app = createApp(App)

app.use(router)

app.mount('#app')
