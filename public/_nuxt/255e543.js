(window.webpackJsonp=window.webpackJsonp||[]).push([[51,35,36,37,38],{500:function(t,e,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("18ca64ce",content,!0,{sourceMap:!1})},504:function(t,e,r){"use strict";r.r(e);r(505);var n=r(39),o=r(41),c=r.n(o),l=r(135),d=r(200),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"white--text text-decoration-none",attrs:{href:"tel:01174037799"}},[r("v-btn",{staticClass:"text-h5 disable-events",attrs:{color:"primary",rounded:"","x-large":""}},[r("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-phone-classic")]),t._v("\n      0117 403 7799\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:l.a,VIcon:d.a})},505:function(t,e,r){"use strict";r(500)},506:function(t,e,r){var n=r(16)(!1);n.push([t.i,".disable-events{pointer-events:none}",""]),t.exports=n},662:function(t,e,r){"use strict";var n=r(5),o=r(141);n({target:"String",proto:!0,forced:r(142)("sub")},{sub:function(){return o(this,"sub","","")}})},663:function(t,e,r){var content=r(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("02b849bb",content,!0,{sourceMap:!1})},664:function(t,e,r){var content=r(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("fb616b0a",content,!0,{sourceMap:!1})},685:function(t,e,r){"use strict";r(663)},686:function(t,e,r){var n=r(16)(!1);n.push([t.i,".title-container{width:300px}.row-height{height:700px}hr{border:none;border-top:10px solid #364799;height:5px;margin:0 5px;width:20%}@media (min-width:960px){.title-container{width:600px}}",""]),t.exports=n},687:function(t,e,r){"use strict";r(664)},688:function(t,e,r){var n=r(16)(!1);n.push([t.i,".thickness{height:65px}",""]),t.exports=n},696:function(t,e,r){"use strict";r.r(e);var n={props:{head:{type:Object,default:function(){return{}}}}},o=(r(685),r(39)),c=r(41),l=r.n(c),d=r(293),v=r(486),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-img",{attrs:{src:t.head.url,alt:t.head.alt,height:"800"}},[r("v-row",{staticClass:"row-height",attrs:{align:"end",justify:"end"}},[r("div",{staticClass:"black title-container pa-5 mr-md-5"},[r("h1",{staticClass:"text-h3 text-md-h2 white--text text-right mr-md-2"},[t._v("\n          "+t._s(t.head.title)+"\n        ")]),t._v(" "),r("v-row",{staticClass:"py-5 pt-10 pr-3",attrs:{align:"end",justify:"end"}},[r("hr"),t._v(" "),r("hr"),t._v(" "),r("hr")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:d.a,VRow:v.a})},697:function(t,e,r){"use strict";r.r(e);var n={components:{phone:r(504).default},props:{body:{type:Object,default:function(){return{}}}}},o=(r(687),r(39)),c=r(41),l=r.n(c),d=r(485),v=r(493),h=r(293),f=r(486),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"white",attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"secondary thickness gradient-serv",attrs:{cols:"10"}}),t._v(" "),r("v-col",{staticClass:"white",attrs:{cols:"2"}})],1),t._v(" "),r("v-container",{staticClass:"py-16 px-lg-10 my-16",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"black--text",attrs:{cols:"12",md:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{domProps:{innerHTML:t._s(t.body.content)}})]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("phone")],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-none d-md-block",attrs:{cols:"6"}},[r("v-img",{attrs:{src:t.body.url,alt:t.body.alt}})],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"white thickness",attrs:{cols:"2"}}),t._v(" "),r("v-col",{staticClass:"secondary gradient-serv",attrs:{cols:"10"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Phone:r(504).default}),l()(component,{VCol:d.a,VContainer:v.a,VImg:h.a,VRow:f.a})},714:function(t,e,r){"use strict";r.r(e);var n={scrollToTop:!0,props:{service:{type:Object,default:function(){return{}}}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("service-head",{attrs:{head:t.service.head}}),t._v(" "),r("service-body",{attrs:{body:t.service.body}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceHead:r(696).default,ServiceBody:r(697).default})},759:function(t,e,r){"use strict";r.r(e);r(662);var n={scrollToTop:!0,data:function(){return{service:{}}},created:function(){this.getData()},destroyed:function(){this.$store.commit("services/clearService")},methods:{getData:function(){var t=this,e=this.$route.params.slug;this.$store.dispatch("services/setService",e).then((function(e){t.service={head:{title:e.title,url:e.headline.url,alt:e.headline.alt},body:{url:e.sub.url,content:e.content,alt:e.sub.alt}}})).catch((function(t){console.log(t)}))}}},o=r(39),c=r(41),l=r.n(c),d=r(485),v=r(486),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("service",{attrs:{service:t.service}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Service:r(714).default}),l()(component,{VCol:d.a,VRow:v.a})}}]);