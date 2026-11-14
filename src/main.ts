import 'uno.css'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import App from './App.vue'

const layoutRoutes = setupLayouts(routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_URL),
  routes: layoutRoutes,
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
})

createApp(App).use(router).mount('#app')

if (import.meta.hot) {
  handleHotUpdate(router)
}
