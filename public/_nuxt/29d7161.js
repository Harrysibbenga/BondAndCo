(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{501:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(23),n(48);var l={props:{size:{type:Number,required:!1,default:8}},data:function(){return{pageNumber:0}},computed:{pageCount:function(){if(this.items){var t=this.items.length,s=this.size;return Math.ceil(t/s)}return 0},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.items?this.items.slice(t,e):[]}},methods:{nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--}}}},765:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(501).a],props:{item:{type:Object,default:function(){return{}}},items:{type:Array,default:function(){return[]}}},data:function(){return{selected:"",selectModel:!1,itemData:{},radios:null}},methods:{select:function(){this.selectModel=!0},saveSelection:function(){this.$emit("update:item",this.selected.itemData),this.selectModel=!1}}},c=n(39),r=n(41),o=n.n(r),d=n(135),v=n(499),m=n(495),f=n(485),_=n(493),h=n(750),C=n(200),y=n(486),k=n(487),x=n(83),V=n(497),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",nativeOn:{click:function(e){return t.select.apply(null,arguments)}}},[t._v("Select")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",scrollable:""},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Select an image")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.selectModel=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n              Save\n            ")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[t._l(t.paginatedData,(function(e,l){return n("v-col",{key:l,staticClass:"p-0",attrs:{cols:"3"}},[n("div",{staticClass:"custom-control custom-radio custom-control text-center"},[n("img",{staticClass:"img-fluid",attrs:{src:e.url,alt:e.alt}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{id:e.id,name:"images",type:"radio"},domProps:{value:{itemData:e},checked:t._q(t.selected,{itemData:e})},on:{change:function(n){t.selected={itemData:e}}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v("\n                  "+t._s(e.alt)+"\n                ")])])])})),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",class:{"d-none":0==t.pageNumber},nativeOn:{click:function(e){return t.prevPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-left")])],1),t._v("\n              "+t._s(t.pageNumber+1)+" of "+t._s(t.pageCount)+"\n              "),n("v-btn",{staticClass:"primary",class:{"d-none":t.pageNumber>=t.pageCount-1},nativeOn:{click:function(e){return t.nextPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-right")])],1)],1)],2)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("Save")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},on:{click:function(e){t.selectModel=!1}}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VContainer:_.a,VDialog:h.a,VIcon:C.a,VRow:y.a,VSpacer:k.a,VToolbar:x.a,VToolbarItems:V.a,VToolbarTitle:V.b})}}]);