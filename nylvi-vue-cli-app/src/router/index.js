import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article:id', 
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/panier',
    name: 'Panier',
    component: () => import('../views/Panier.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/blogposts',
    name: 'BlogPosts',
    component: () => import('../views/BlogPosts.vue')
  },
  {
    path: '/post:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/echanger',
    name: 'Echanger',
    component: () => import('../views/Echanger.vue')
  },
  {
    path: '/console',
    name: 'Console',
    component: () => import('../views/admin/Console.vue')
  },
  {
    path: '/ajouter',
    name: 'Ajouter',
    component: () => import('../views/admin/Ajouter.vue')
  },
  {
    path: '/tableau-bord',
    name: 'TableauBord',
    component: () => import('../views/admin/TableauBord.vue')
  },
  {
    path: '/redaction',
    name: 'Redaction',
    component: () => import('../views/admin/Redaction.vue')
  },
  {
    path: '/echange',
    name: 'Echange',
    component: () => import('../views/admin/Echange.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
