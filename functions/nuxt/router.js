import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f83dda0 = () => interopDefault(import('../pages/accounts_preperation.vue' /* webpackChunkName: "pages/accounts_preperation" */))
const _92d44b5e = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _198212d5 = () => interopDefault(import('../pages/book_keeping.vue' /* webpackChunkName: "pages/book_keeping" */))
const _70098e4e = () => interopDefault(import('../pages/business_advice.vue' /* webpackChunkName: "pages/business_advice" */))
const _368c7b93 = () => interopDefault(import('../pages/company_secretarial.vue' /* webpackChunkName: "pages/company_secretarial" */))
const _61fc6109 = () => interopDefault(import('../pages/disclaimer.vue' /* webpackChunkName: "pages/disclaimer" */))
const _4ece296b = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0501f738 = () => interopDefault(import('../pages/management_accounts.vue' /* webpackChunkName: "pages/management_accounts" */))
const _7d3846a7 = () => interopDefault(import('../pages/payroll.vue' /* webpackChunkName: "pages/payroll" */))
const _3eea0192 = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _e1b3f79e = () => interopDefault(import('../pages/tax_returns.vue' /* webpackChunkName: "pages/tax_returns" */))
const _7917d8aa = () => interopDefault(import('../pages/vat.vue' /* webpackChunkName: "pages/vat" */))
const _f5b2f358 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accounts_preperation",
    component: _2f83dda0,
    name: "accounts_preperation"
  }, {
    path: "/admin",
    component: _92d44b5e,
    name: "admin"
  }, {
    path: "/book_keeping",
    component: _198212d5,
    name: "book_keeping"
  }, {
    path: "/business_advice",
    component: _70098e4e,
    name: "business_advice"
  }, {
    path: "/company_secretarial",
    component: _368c7b93,
    name: "company_secretarial"
  }, {
    path: "/disclaimer",
    component: _61fc6109,
    name: "disclaimer"
  }, {
    path: "/login",
    component: _4ece296b,
    name: "login"
  }, {
    path: "/management_accounts",
    component: _0501f738,
    name: "management_accounts"
  }, {
    path: "/payroll",
    component: _7d3846a7,
    name: "payroll"
  }, {
    path: "/privacy_policy",
    component: _3eea0192,
    name: "privacy_policy"
  }, {
    path: "/tax_returns",
    component: _e1b3f79e,
    name: "tax_returns"
  }, {
    path: "/vat",
    component: _7917d8aa,
    name: "vat"
  }, {
    path: "/",
    component: _f5b2f358,
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
