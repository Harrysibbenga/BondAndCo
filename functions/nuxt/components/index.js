import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/logo.vue'
export { default as Phone } from '../../components/phone.vue'
export { default as FootContact } from '../../components/Foot/contact.vue'
export { default as Foot } from '../../components/Foot/index.vue'
export { default as HeadNav } from '../../components/Head/nav.vue'
export { default as HomeAbout } from '../../components/Home/about.vue'
export { default as HomeConsultation } from '../../components/Home/consultation.vue'
export { default as HomeFaq } from '../../components/Home/faq.vue'
export { default as HomeHero } from '../../components/Home/hero.vue'
export { default as HomePromise } from '../../components/Home/promise.vue'
export { default as HomeQual } from '../../components/Home/qual.vue'
export { default as HomeServices } from '../../components/Home/services.vue'
export { default as HomeSubscribe } from '../../components/Home/subscribe.vue'
export { default as HomeTeam } from '../../components/Home/team.vue'
export { default as HomeWelcome } from '../../components/Home/welcome.vue'
export { default as ServiceBody } from '../../components/Service/body.vue'
export { default as ServiceHead } from '../../components/Service/head.vue'
export { default as Service } from '../../components/Service/index.vue'
export { default as LegalsBody } from '../../components/Legals/body.vue'
export { default as LegalsHead } from '../../components/Legals/head.vue'
export { default as Legals } from '../../components/Legals/index.vue'

export const LazyLogo = import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPhone = import('../../components/phone.vue' /* webpackChunkName: "components/phone" */).then(c => wrapFunctional(c.default || c))
export const LazyFootContact = import('../../components/Foot/contact.vue' /* webpackChunkName: "components/foot-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFoot = import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyHeadNav = import('../../components/Head/nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAbout = import('../../components/Home/about.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeConsultation = import('../../components/Home/consultation.vue' /* webpackChunkName: "components/home-consultation" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeFaq = import('../../components/Home/faq.vue' /* webpackChunkName: "components/home-faq" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeHero = import('../../components/Home/hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHomePromise = import('../../components/Home/promise.vue' /* webpackChunkName: "components/home-promise" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeQual = import('../../components/Home/qual.vue' /* webpackChunkName: "components/home-qual" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeServices = import('../../components/Home/services.vue' /* webpackChunkName: "components/home-services" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSubscribe = import('../../components/Home/subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTeam = import('../../components/Home/team.vue' /* webpackChunkName: "components/home-team" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeWelcome = import('../../components/Home/welcome.vue' /* webpackChunkName: "components/home-welcome" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceBody = import('../../components/Service/body.vue' /* webpackChunkName: "components/service-body" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceHead = import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c))
export const LazyService = import('../../components/Service/index.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c))
export const LazyLegalsBody = import('../../components/Legals/body.vue' /* webpackChunkName: "components/legals-body" */).then(c => wrapFunctional(c.default || c))
export const LazyLegalsHead = import('../../components/Legals/head.vue' /* webpackChunkName: "components/legals-head" */).then(c => wrapFunctional(c.default || c))
export const LazyLegals = import('../../components/Legals/index.vue' /* webpackChunkName: "components/legals" */).then(c => wrapFunctional(c.default || c))
