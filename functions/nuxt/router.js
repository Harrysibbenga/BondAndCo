import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6190d3c2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _9a8ffaf8 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _709a6f39 = () => interopDefault(import('../pages/admin/services.vue' /* webpackChunkName: "pages/admin/services" */))
const _43fa60b6 = () => interopDefault(import('../pages/disclaimer.vue' /* webpackChunkName: "pages/disclaimer" */))
const _4af0519e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e2113f38 = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _11c0bd34 = () => interopDefault(import('../pages/services/_slug.vue' /* webpackChunkName: "pages/services/_slug" */))
const _fd6ea2f2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6190d3c2,
    name: "about"
  }, {
    path: "/admin",
    component: _9a8ffaf8,
    name: "admin",
    children: [{
      path: "services",
      component: _709a6f39,
      name: "admin-services"
    }]
  }, {
    path: "/disclaimer",
    component: _43fa60b6,
    name: "disclaimer"
  }, {
    path: "/login",
    component: _4af0519e,
    name: "login"
  }, {
    path: "/privacy_policy",
    component: _e2113f38,
    name: "privacy_policy"
  }, {
    path: "/services/:slug?",
    component: _11c0bd34,
    name: "services-slug"
  }, {
    path: "/",
    component: _fd6ea2f2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
