import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home }, // Adicione sua rota raiz
    { path: '/javascript', component: JavaScript }, // Rota para JavaScript
    { path: '/python', component: Python }, // Rota para Python
    // Adicione rotas para outras linguagens aqui
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
