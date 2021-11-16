import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/logo.vue'
export { default as Phone } from '../../components/phone.vue'
export { default as HomeAboutInfo } from '../../components/Home/about-info.vue'
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
export { default as HeadNav } from '../../components/Head/nav.vue'
export { default as FootContact } from '../../components/Foot/contact.vue'
export { default as Foot } from '../../components/Foot/index.vue'
export { default as UiCalendarCard } from '../../components/Ui/CalendarCard.vue'
export { default as UiEditor } from '../../components/Ui/Editor.vue'
export { default as UiMessage } from '../../components/Ui/Message.vue'
export { default as UiNavCard } from '../../components/Ui/NavCard.vue'
export { default as UiNewsCard } from '../../components/Ui/NewsCard.vue'
export { default as ServiceBody } from '../../components/Service/body.vue'
export { default as ServiceHead } from '../../components/Service/head.vue'
export { default as Service } from '../../components/Service/index.vue'
export { default as LegalsBody } from '../../components/Legals/body.vue'
export { default as LegalsHead } from '../../components/Legals/head.vue'
export { default as Legals } from '../../components/Legals/index.vue'
export { default as AdminServicesEdit } from '../../components/Admin/Services/edit.vue'
export { default as AdminServicesUpload } from '../../components/Admin/Services/upload.vue'
export { default as AdminCompEditPosts } from '../../components/Admin/Comp/EditPosts.vue'
export { default as AdminCompGallery } from '../../components/Admin/Comp/Gallery.vue'
export { default as AdminCompImageUpload } from '../../components/Admin/Comp/ImageUpload.vue'
export { default as AdminCompQuotes } from '../../components/Admin/Comp/Quotes.vue'
export { default as AdminCompStandardForm } from '../../components/Admin/Comp/StandardForm.vue'
export { default as AdminModalsDelete } from '../../components/Admin/Modals/delete.vue'
export { default as AdminModalsEdit } from '../../components/Admin/Modals/edit.vue'
export { default as AdminModalsExists } from '../../components/Admin/Modals/exists.vue'
export { default as AdminModalsMultiUpload } from '../../components/Admin/Modals/multiUpload.vue'
export { default as AdminModalsSelect } from '../../components/Admin/Modals/select.vue'
export { default as AdminModalsSelectImage } from '../../components/Admin/Modals/selectImage.vue'
export { default as AdminModalsSelectImages } from '../../components/Admin/Modals/selectImages.vue'
export { default as AdminModalsUploadImage } from '../../components/Admin/Modals/uploadImage.vue'

export const LazyLogo = import('../../components/logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPhone = import('../../components/phone.vue' /* webpackChunkName: "components/phone" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAboutInfo = import('../../components/Home/about-info.vue' /* webpackChunkName: "components/home-about-info" */).then(c => wrapFunctional(c.default || c))
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
export const LazyHeadNav = import('../../components/Head/nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyFootContact = import('../../components/Foot/contact.vue' /* webpackChunkName: "components/foot-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyFoot = import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyUiCalendarCard = import('../../components/Ui/CalendarCard.vue' /* webpackChunkName: "components/ui-calendar-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUiEditor = import('../../components/Ui/Editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMessage = import('../../components/Ui/Message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c))
export const LazyUiNavCard = import('../../components/Ui/NavCard.vue' /* webpackChunkName: "components/ui-nav-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUiNewsCard = import('../../components/Ui/NewsCard.vue' /* webpackChunkName: "components/ui-news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceBody = import('../../components/Service/body.vue' /* webpackChunkName: "components/service-body" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceHead = import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c))
export const LazyService = import('../../components/Service/index.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c))
export const LazyLegalsBody = import('../../components/Legals/body.vue' /* webpackChunkName: "components/legals-body" */).then(c => wrapFunctional(c.default || c))
export const LazyLegalsHead = import('../../components/Legals/head.vue' /* webpackChunkName: "components/legals-head" */).then(c => wrapFunctional(c.default || c))
export const LazyLegals = import('../../components/Legals/index.vue' /* webpackChunkName: "components/legals" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminServicesEdit = import('../../components/Admin/Services/edit.vue' /* webpackChunkName: "components/admin-services-edit" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminServicesUpload = import('../../components/Admin/Services/upload.vue' /* webpackChunkName: "components/admin-services-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCompEditPosts = import('../../components/Admin/Comp/EditPosts.vue' /* webpackChunkName: "components/admin-comp-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCompGallery = import('../../components/Admin/Comp/Gallery.vue' /* webpackChunkName: "components/admin-comp-gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCompImageUpload = import('../../components/Admin/Comp/ImageUpload.vue' /* webpackChunkName: "components/admin-comp-image-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCompQuotes = import('../../components/Admin/Comp/Quotes.vue' /* webpackChunkName: "components/admin-comp-quotes" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCompStandardForm = import('../../components/Admin/Comp/StandardForm.vue' /* webpackChunkName: "components/admin-comp-standard-form" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsDelete = import('../../components/Admin/Modals/delete.vue' /* webpackChunkName: "components/admin-modals-delete" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsEdit = import('../../components/Admin/Modals/edit.vue' /* webpackChunkName: "components/admin-modals-edit" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsExists = import('../../components/Admin/Modals/exists.vue' /* webpackChunkName: "components/admin-modals-exists" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsMultiUpload = import('../../components/Admin/Modals/multiUpload.vue' /* webpackChunkName: "components/admin-modals-multi-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsSelect = import('../../components/Admin/Modals/select.vue' /* webpackChunkName: "components/admin-modals-select" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsSelectImage = import('../../components/Admin/Modals/selectImage.vue' /* webpackChunkName: "components/admin-modals-select-image" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsSelectImages = import('../../components/Admin/Modals/selectImages.vue' /* webpackChunkName: "components/admin-modals-select-images" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminModalsUploadImage = import('../../components/Admin/Modals/uploadImage.vue' /* webpackChunkName: "components/admin-modals-upload-image" */).then(c => wrapFunctional(c.default || c))
