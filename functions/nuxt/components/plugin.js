import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Phone: () => import('../../components/phone.vue' /* webpackChunkName: "components/phone" */).then(c => wrapFunctional(c.default || c)),
  FootContact: () => import('../../components/Foot/contact.vue' /* webpackChunkName: "components/foot-contact" */).then(c => wrapFunctional(c.default || c)),
  Foot: () => import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  HeadNav: () => import('../../components/Head/nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c)),
  HomeAbout: () => import('../../components/Home/about.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c)),
  HomeConsultation: () => import('../../components/Home/consultation.vue' /* webpackChunkName: "components/home-consultation" */).then(c => wrapFunctional(c.default || c)),
  HomeFaq: () => import('../../components/Home/faq.vue' /* webpackChunkName: "components/home-faq" */).then(c => wrapFunctional(c.default || c)),
  HomeHero: () => import('../../components/Home/hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c)),
  HomePromise: () => import('../../components/Home/promise.vue' /* webpackChunkName: "components/home-promise" */).then(c => wrapFunctional(c.default || c)),
  HomeQual: () => import('../../components/Home/qual.vue' /* webpackChunkName: "components/home-qual" */).then(c => wrapFunctional(c.default || c)),
  HomeServices: () => import('../../components/Home/services.vue' /* webpackChunkName: "components/home-services" */).then(c => wrapFunctional(c.default || c)),
  HomeSubscribe: () => import('../../components/Home/subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c)),
  HomeTeam: () => import('../../components/Home/team.vue' /* webpackChunkName: "components/home-team" */).then(c => wrapFunctional(c.default || c)),
  HomeWelcome: () => import('../../components/Home/welcome.vue' /* webpackChunkName: "components/home-welcome" */).then(c => wrapFunctional(c.default || c)),
  ServiceBody: () => import('../../components/Service/body.vue' /* webpackChunkName: "components/service-body" */).then(c => wrapFunctional(c.default || c)),
  ServiceHead: () => import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c)),
  Service: () => import('../../components/Service/index.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c)),
  LegalsBody: () => import('../../components/Legals/body.vue' /* webpackChunkName: "components/legals-body" */).then(c => wrapFunctional(c.default || c)),
  LegalsHead: () => import('../../components/Legals/head.vue' /* webpackChunkName: "components/legals-head" */).then(c => wrapFunctional(c.default || c)),
  Legals: () => import('../../components/Legals/index.vue' /* webpackChunkName: "components/legals" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
