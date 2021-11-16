import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Phone: () => import('../../components/phone.vue' /* webpackChunkName: "components/phone" */).then(c => wrapFunctional(c.default || c)),
  HomeAboutInfo: () => import('../../components/Home/about-info.vue' /* webpackChunkName: "components/home-about-info" */).then(c => wrapFunctional(c.default || c)),
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
  HeadNav: () => import('../../components/Head/nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c)),
  FootContact: () => import('../../components/Foot/contact.vue' /* webpackChunkName: "components/foot-contact" */).then(c => wrapFunctional(c.default || c)),
  Foot: () => import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  UiCalendarCard: () => import('../../components/Ui/CalendarCard.vue' /* webpackChunkName: "components/ui-calendar-card" */).then(c => wrapFunctional(c.default || c)),
  UiEditor: () => import('../../components/Ui/Editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c)),
  UiMessage: () => import('../../components/Ui/Message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c)),
  UiNavCard: () => import('../../components/Ui/NavCard.vue' /* webpackChunkName: "components/ui-nav-card" */).then(c => wrapFunctional(c.default || c)),
  UiNewsCard: () => import('../../components/Ui/NewsCard.vue' /* webpackChunkName: "components/ui-news-card" */).then(c => wrapFunctional(c.default || c)),
  ServiceBody: () => import('../../components/Service/body.vue' /* webpackChunkName: "components/service-body" */).then(c => wrapFunctional(c.default || c)),
  ServiceHead: () => import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c)),
  Service: () => import('../../components/Service/index.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c)),
  LegalsBody: () => import('../../components/Legals/body.vue' /* webpackChunkName: "components/legals-body" */).then(c => wrapFunctional(c.default || c)),
  LegalsHead: () => import('../../components/Legals/head.vue' /* webpackChunkName: "components/legals-head" */).then(c => wrapFunctional(c.default || c)),
  Legals: () => import('../../components/Legals/index.vue' /* webpackChunkName: "components/legals" */).then(c => wrapFunctional(c.default || c)),
  AdminServicesEdit: () => import('../../components/Admin/Services/edit.vue' /* webpackChunkName: "components/admin-services-edit" */).then(c => wrapFunctional(c.default || c)),
  AdminServicesUpload: () => import('../../components/Admin/Services/upload.vue' /* webpackChunkName: "components/admin-services-upload" */).then(c => wrapFunctional(c.default || c)),
  AdminCompEditPosts: () => import('../../components/Admin/Comp/EditPosts.vue' /* webpackChunkName: "components/admin-comp-edit-posts" */).then(c => wrapFunctional(c.default || c)),
  AdminCompGallery: () => import('../../components/Admin/Comp/Gallery.vue' /* webpackChunkName: "components/admin-comp-gallery" */).then(c => wrapFunctional(c.default || c)),
  AdminCompImageUpload: () => import('../../components/Admin/Comp/ImageUpload.vue' /* webpackChunkName: "components/admin-comp-image-upload" */).then(c => wrapFunctional(c.default || c)),
  AdminCompQuotes: () => import('../../components/Admin/Comp/Quotes.vue' /* webpackChunkName: "components/admin-comp-quotes" */).then(c => wrapFunctional(c.default || c)),
  AdminCompStandardForm: () => import('../../components/Admin/Comp/StandardForm.vue' /* webpackChunkName: "components/admin-comp-standard-form" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsDelete: () => import('../../components/Admin/Modals/delete.vue' /* webpackChunkName: "components/admin-modals-delete" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsEdit: () => import('../../components/Admin/Modals/edit.vue' /* webpackChunkName: "components/admin-modals-edit" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsExists: () => import('../../components/Admin/Modals/exists.vue' /* webpackChunkName: "components/admin-modals-exists" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsMultiUpload: () => import('../../components/Admin/Modals/multiUpload.vue' /* webpackChunkName: "components/admin-modals-multi-upload" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsSelect: () => import('../../components/Admin/Modals/select.vue' /* webpackChunkName: "components/admin-modals-select" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsSelectImage: () => import('../../components/Admin/Modals/selectImage.vue' /* webpackChunkName: "components/admin-modals-select-image" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsSelectImages: () => import('../../components/Admin/Modals/selectImages.vue' /* webpackChunkName: "components/admin-modals-select-images" */).then(c => wrapFunctional(c.default || c)),
  AdminModalsUploadImage: () => import('../../components/Admin/Modals/uploadImage.vue' /* webpackChunkName: "components/admin-modals-upload-image" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
