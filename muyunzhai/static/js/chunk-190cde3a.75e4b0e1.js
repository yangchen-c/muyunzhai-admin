(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190cde3a"],{"03d6":function(t,e,a){},"13db":function(t,e,a){"use strict";var n=a("03d6"),r=a.n(n);r.a},"2d13":function(t,e,a){"use strict";var n=a("cf7e"),r=a.n(n);r.a},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=u(),r=t-n,l=20,c=0;e="undefined"===typeof e?500:e;var s=function t(){c+=l;var u=Math.easeInOutQuad(c,n,r,e);i(u),c<e?o(t):a&&"function"===typeof a&&a()};s()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},s=c,d=(a("2d13"),a("2877")),m=Object(d["a"])(s,n,r,!1,null,"2fc659d3",null);e["a"]=m.exports},"4ec3":function(t,e,a){"use strict";a.d(e,"W",(function(){return r})),a.d(e,"x",(function(){return o})),a.d(e,"v",(function(){return i})),a.d(e,"y",(function(){return u})),a.d(e,"w",(function(){return l})),a.d(e,"Y",(function(){return c})),a.d(e,"X",(function(){return s})),a.d(e,"Z",(function(){return d})),a.d(e,"l",(function(){return m})),a.d(e,"a",(function(){return f})),a.d(e,"U",(function(){return p})),a.d(e,"V",(function(){return g})),a.d(e,"k",(function(){return b})),a.d(e,"i",(function(){return h})),a.d(e,"m",(function(){return v})),a.d(e,"j",(function(){return y})),a.d(e,"P",(function(){return O})),a.d(e,"Q",(function(){return j})),a.d(e,"N",(function(){return _})),a.d(e,"R",(function(){return w})),a.d(e,"O",(function(){return S})),a.d(e,"G",(function(){return k})),a.d(e,"H",(function(){return C})),a.d(e,"E",(function(){return z})),a.d(e,"I",(function(){return x})),a.d(e,"F",(function(){return L})),a.d(e,"q",(function(){return T})),a.d(e,"o",(function(){return P})),a.d(e,"r",(function(){return N})),a.d(e,"p",(function(){return Q})),a.d(e,"L",(function(){return $})),a.d(e,"J",(function(){return I})),a.d(e,"M",(function(){return F})),a.d(e,"K",(function(){return R})),a.d(e,"n",(function(){return W})),a.d(e,"s",(function(){return M})),a.d(e,"u",(function(){return V})),a.d(e,"z",(function(){return A})),a.d(e,"t",(function(){return D})),a.d(e,"S",(function(){return E})),a.d(e,"g",(function(){return q})),a.d(e,"f",(function(){return B})),a.d(e,"h",(function(){return J})),a.d(e,"C",(function(){return U})),a.d(e,"A",(function(){return G})),a.d(e,"D",(function(){return H})),a.d(e,"B",(function(){return K})),a.d(e,"d",(function(){return X})),a.d(e,"b",(function(){return Y})),a.d(e,"e",(function(){return Z})),a.d(e,"c",(function(){return tt})),a.d(e,"T",(function(){return et}));var n=a("b775"),r="http://api.muyunzhaig.com/upload";function o(t){return Object(n["a"])({url:"user/loginManager",method:"get",params:t})}function i(t){return Object(n["a"])({url:"user/loginManager",method:"post",data:t})}function u(t){return Object(n["a"])({url:"user/loginManager",method:"put",data:t})}function l(t){return Object(n["a"])({url:"user/loginManager",method:"delete",params:t})}function c(t,e){return Object(n["a"])({url:"user/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function s(t){return Object(n["a"])({url:"user",method:"post",data:t})}function d(t){return Object(n["a"])({url:"user/update",method:"put",data:t})}function m(t){return Object(n["a"])({url:"detail",method:"post",data:t})}function f(t){return Object(n["a"])({url:"address/getAddressList",method:"get",params:t})}function p(t,e){return Object(n["a"])({url:"examine/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function g(t){return Object(n["a"])({url:"examine",method:"put",data:t})}function b(t,e){return Object(n["a"])({url:"detail/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function h(t){return Object(n["a"])({url:"detail",method:"post",data:t})}function v(t){return Object(n["a"])({url:"detail",method:"put",data:t})}function y(t){return Object(n["a"])({url:"detail",method:"delete",params:t})}function O(t,e){return Object(n["a"])({url:"shop/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function j(t){return Object(n["a"])({url:"shop",method:"get",params:t})}function _(t){return Object(n["a"])({url:"shop",method:"post",data:t})}function w(t){return Object(n["a"])({url:"shop",method:"put",data:t})}function S(t){return Object(n["a"])({url:"shop",method:"delete",params:t})}function k(t,e){return Object(n["a"])({url:"session/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function C(t){return Object(n["a"])({url:"session",method:"get",params:t})}function z(t){return Object(n["a"])({url:"session",method:"post",data:t})}function x(t){return Object(n["a"])({url:"session",method:"put",data:t})}function L(t){return Object(n["a"])({url:"session",method:"delete",params:t})}function T(t,e){return Object(n["a"])({url:"good/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function P(t){return Object(n["a"])({url:"good",method:"post",data:t})}function N(t){return Object(n["a"])({url:"good",method:"put",data:t})}function Q(t){return Object(n["a"])({url:"good",method:"delete",params:t})}function $(t,e){return Object(n["a"])({url:"sg/getPaging/".concat(t.page,"/").concat(t.size,"/").concat(t.num),method:"get",params:e})}function I(t){return Object(n["a"])({url:"sg",method:"post",data:t})}function F(t){return Object(n["a"])({url:"sg",method:"put",data:t})}function R(t){return Object(n["a"])({url:"sg",method:"delete",params:t})}function W(t,e){return Object(n["a"])({url:"order/getPaging/".concat(t.page,"/").concat(t.size,"/").concat(t.num),method:"get",params:e})}function M(t){return Object(n["a"])({url:"order",method:"post",data:t})}function V(t){return Object(n["a"])({url:"order/commitMaterial",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/sg/createSg",method:"post",data:t})}function D(t){return Object(n["a"])({url:"order/cancelBack",method:"post",data:t})}function E(t,e){return Object(n["a"])({url:"order/cancelMaterial/".concat(t.orderId),method:"get",params:e})}function q(t,e){return Object(n["a"])({url:"coupon/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function B(t){return Object(n["a"])({url:"coupon",method:"post",data:t})}function J(t){return Object(n["a"])({url:"coupon",method:"put",data:t})}function U(t,e){return Object(n["a"])({url:"rotation/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function G(t){return Object(n["a"])({url:"rotation",method:"post",data:t})}function H(t){return Object(n["a"])({url:"rotation",method:"put",data:t})}function K(t){return Object(n["a"])({url:"rotation",method:"delete",params:t})}function X(t,e){return Object(n["a"])({url:"article/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function Y(t){return Object(n["a"])({url:"article",method:"post",data:t})}function Z(t){return Object(n["a"])({url:"article",method:"put",data:t})}function tt(t){return Object(n["a"])({url:"article",method:"delete",params:t})}function et(t,e){return Object(n["a"])({url:"user/groupOrder/".concat(t.id),method:"get",params:e})}},"96ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"btn"},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入用户身份证",clearable:""},model:{value:t.listQuery.idCard,callback:function(e){t.$set(t.listQuery,"idCard",e)},expression:"listQuery.idCard"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1),t._v(" "),a("div",{staticClass:"tablee"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.pictLoading,expression:"pictLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"userId.realName",label:"真实姓名"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"idCard",label:"身份证"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"front",label:"身份证正面"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.front,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"back",label:"身份证反面"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.back,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"state",label:"审核状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==e.row.state?a("el-tag",{attrs:{type:"success"}},[t._v("未审核")]):t._e(),t._v(" "),"1"==e.row.state?a("el-tag",{attrs:{type:"danger"}},[t._v("通过")]):t._e(),t._v(" "),"2"==e.row.state?a("el-tag",{attrs:{type:"danger"}},[t._v("不通过")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"shopId",label:"所属会馆"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row.userId.shopId.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"提交时间"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"approvedTime",label:"审核时间"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(a){return t.getEditData(e.row)}}},[t._v("审核资料\n          ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.title1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"真实姓名","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{disabled:!0,placeholder:""},model:{value:t.form.userId.realName,callback:function(e){t.$set(t.form.userId,"realName",e)},expression:"form.userId.realName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证号","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{disabled:!0,placeholder:""},model:{value:t.form.idCard,callback:function(e){t.$set(t.form,"idCard",e)},expression:"form.idCard"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"提交时间","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{disabled:!0,placeholder:""},model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"审核时间","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{disabled:!0,placeholder:""},model:{value:t.form.approvedTime,callback:function(e){t.$set(t.form,"approvedTime",e)},expression:"form.approvedTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证正面","label-width":t.formLabelWidth}},[t.form.front?a("img",{staticClass:"avatar",attrs:{src:t.form.front}}):a("i",{staticClass:"el-icon-s-custom avatar-uploader-icon"})]),t._v(" "),a("el-form-item",{attrs:{label:"身份证反面","label-width":t.formLabelWidth}},[t.form.back?a("img",{staticClass:"avatar",attrs:{src:t.form.back}}):a("i",{staticClass:"el-icon-s-custom avatar-uploader-icon"})]),t._v(" "),a("el-form-item",{attrs:{label:"审核状态","label-width":t.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:t.selectChanged},model:{value:t.valueState,callback:function(e){t.valueState=e},expression:"valueState"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"不通过理由","label-width":t.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:t.selectChanged1},model:{value:t.valueReason,callback:function(e){t.valueReason=e},expression:"valueReason"}},t._l(t.options1,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},r=[],o=a("ade3"),i=a("4ec3"),u=a("333d"),l={name:"Stafff",components:{Pagination:u["a"]},data:function(){var t;return t={valueState:"",options:[{value:"0",label:"未审核"},{value:"1",label:"通过"},{value:"2",label:"不通过"}],valueReason:"",options1:[{value:"姓名与证件照不符",label:"姓名与证件照不符"},{value:"性别与证件照不符",label:"性别与证件照不符"},{value:"身份证号与证件照不符",label:"身份证号与证件照不符"},{value:"身份证地址与证件照不符",label:"身份证地址与证件照不符"},{value:"身份证照不清晰或有遮挡",label:"身份证照不清晰或有遮挡"},{value:"视屏不清晰或语音内容有误",label:"视屏不清晰或语音内容有误"},{value:"身份证已过有效期",label:"身份证已过有效期"}],total:0,listQuery:{page:1,limit:10,idCard:"",realName:"",phone:""},tel:"",name:"",btnLoading:!1,pictLoading:!0},Object(o["a"])(t,"name",""),Object(o["a"])(t,"title1",""),Object(o["a"])(t,"tableData",[]),Object(o["a"])(t,"dialogFormVisible",!1),Object(o["a"])(t,"form",{id:"",state:"",createTime:"",approvedTime:"",front:"",back:"",userId:{realName:"",shopId:{id:""}}}),Object(o["a"])(t,"formLabelWidth","100px"),t},created:function(){this.getList()},methods:{selectChanged:function(t){this.valueState=t,console.log(this.valueState)},selectChanged1:function(t){this.valueReason=t,console.log(this.valueReason)},getList:function(){var t=this,e={page:this.listQuery.page,size:this.listQuery.limit},a={realName:""!==this.listQuery.realName?this.listQuery.realName:void 0,phone:""!==this.listQuery.phone?this.listQuery.phone:void 0,idCard:""!==this.listQuery.idCard?this.listQuery.idCard:void 0,star:""!==this.time1?this.time1:void 0,end:""!==this.time2?this.time2:void 0};Object(i["U"])(e,a).then((function(e){t.pictLoading=!1,t.tableData=e.data.data.currentList,t.total=e.data.data.totalRecords}))},getEditData:function(t){this.dialogFormVisible=!0,this.form.id=t.id,this.form.idCard=t.idCard,this.form.createTime=t.createTime,this.form.approvedTime=t.approvedTime,this.form.front=t.front,this.form.back=t.back,this.form.userId.realName=t.userId.realName,this.title1="审核资料"},addSubmit:function(){var t=this,e={id:this.form.id,state:this.valueState,reason:this.valueReason};this.form.id?Object(i["V"])(e).then((function(){t.$notify.success({title:"成功",message:"审核完成"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})):userAdd(this.form).then((function(){t.$notify.success({title:"成功",message:"审核完成"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))}}},c=l,s=(a("13db"),a("2877")),d=Object(s["a"])(c,n,r,!1,null,"917549fa",null);e["default"]=d.exports},cf7e:function(t,e,a){}}]);