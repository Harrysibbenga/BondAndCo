(window.webpackJsonp=window.webpackJsonp||[]).push([[10,40],{513:function(e,t,l){"use strict";l.r(t);var o;l(665),o=l(666);var n={components:{ckeditor:l(667).component},props:{content:{type:String,required:!0,default:"Enter text here"}},data:function(){return{editor:o,editorConfig:{fontFamily:{options:["default","Ubuntu, Arial, sans-serif","Ubuntu Mono, Courier New, Courier, monospace"],supportAllValues:!0},fontSize:{options:[9,11,13,"default",17,19,21]},fontColor:{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"}]},link:{addTargetToExternalLinks:!0,decorators:[{mode:"manual",label:"Downloadable",attributes:{download:"download"}}]},toolbar:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","imageUpload","insertTable","|","alignment","outdent","indent","|","link","undo","redo"],language:"en",image:{toolbar:["imageTextAlternative","|","imageStyle:full","imageStyle:side","|","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter"],styles:["full","alignLeft","alignRight","side","alignCenter"]},alignment:{options:["left","right"]},tableProperties:{borderColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}],backgroundColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}}}}},r=l(39),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("ckeditor",{attrs:{editor:e.editor,config:e.editorConfig,value:e.content},on:{input:function(content){return e.$emit("update:content",content)}}})],1)}),[],!1,null,null,null);t.default=component.exports},660:function(e,t,l){"use strict";l.r(t);var o={props:{content:{type:Object,default:function(){return{}}}},computed:{postContent:{get:function(){return this.content},set:function(e){this.$emit("update:content",e)}}}},n=l(39),r=l(41),c=l.n(r),d=l(485),h=l(486),f=l(118),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-row",[l("v-col",{attrs:{cols:"12"}},[l("v-text-field",{attrs:{label:"Title"},model:{value:e.postContent.title,callback:function(t){e.$set(e.postContent,"title","string"==typeof t?t.trim():t)},expression:"postContent.title"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12"}},[l("h3",{staticClass:"pb-1"},[e._v("Main content")]),e._v(" "),l("ui-editor",{staticClass:"black--text",attrs:{content:e.postContent.content},on:{"update:content":function(t){return e.$set(e.postContent,"content",t)}}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{UiEditor:l(513).default}),c()(component,{VCol:d.a,VRow:h.a,VTextField:f.a})}}]);