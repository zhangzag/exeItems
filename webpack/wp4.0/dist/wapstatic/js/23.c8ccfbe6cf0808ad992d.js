webpackJsonp([23],{Cnir:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("AG0B"),a=s("wSez"),n={name:"info",data:function(){return{flag:!1,img:"./static/images/proimg.jpg",username:"",phone:"",hospital:"",ks:"",zd:"",cfjData:[],pagination:{page:0,count:"",limit:10},noMore:!1}},components:{"mt-cell":a.Cell,"mt-button":a.Button,"mt-header":a.Header,"mt-field":a.Field,"mt-spinner":a.Spinner,comHeaderTitle:i.a},filters:{},created:function(){this.$options.methods.getList(this)},mounted:function(){var t=this,e=this;this.$emit("changeClass",!1),this.$nextTick(function(){t.$refs.viewBox.addEventListener("scroll",function(){if(t.noMore)return!1;var s=document.documentElement.clientHeight||document.body.clientHeight,i=document.getElementById("viewB").offsetHeight;t.$refs.viewBox.scrollTop>=i-s-100&&(t.$refs.loadMore.style.visibility="visible",setTimeout(function(){e.$options.methods.getList(e)},300),console.log("到底部了"))},!1)})},destroyed:function(){this.$emit("changeClass",!0)},methods:{jump:function(){console.log(111)},jump2:function(t){console.log(t)},getList:function(t){return!t.flag&&(t.pagination.page++,t.pagination.count&&t.pagination.page>Math.ceil(t.pagination.count/t.pagination.limit)?(t.noMore=!0,t.pagination.page--,t.$options.methods.showToast("没有更多!"),t.$refs.loadMore.style.visibility="hidden",!1):(t.flag=!0,void t.$ajax({url:t.webRoot+"/prescription/getPrescription",data:{memberId:t.$store.state.memberId,page:t.pagination.page,limit:t.pagination.limit}}).then(function(e){if(console.log(e),e.data.success){if(t.pagination.count=e.data.count,0==e.data.data.length)return t.$options.methods.showToast("没有处方笺!"),!1;for(var s=0;s<e.data.data.length;s++)t.cfjData.push(e.data.data[s]);t.flag=!1}else t.$options.methods.showToast(e.data.msg),t.flag=!1}).catch(function(e){console.log(e),t.flag=!1})))},showToast:function(t,e){e=e||2e3;Object(a.Toast)({message:t,position:"center",duration:e})}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"viewBox",staticClass:"wrap has_header_wrap c_wrap"},[s("com-header",{attrs:{titles:"处方笺记录"}},[s("template",{slot:"style-def"})],2),t._v(" "),s("div",{ref:"viewB",staticClass:"prescript_wrap prescript_detail",attrs:{id:"viewB"}},t._l(t.cfjData,function(e,i){return s("div",{staticClass:"item"},[s("div",{staticClass:"pt_block solt d_flex"},[s("span",[s("i",[t._v(t._s(i+1))])]),t._v(" "),s("span",[t._v("提交处方笺时间：")]),t._v(" "),s("span",[t._v(t._s(e.createTime))])]),t._v(" "),s("div",{staticClass:"pt_block patient"},[s("ul",[s("li",{staticClass:"d_flex"},[s("span",[t._v("姓名：")]),s("span",[t._v(t._s(e.sufferer))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("手机号码：")]),s("span",[t._v(t._s(e.phone))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("年龄：")]),s("span",[t._v(t._s(e.age))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("性别：")]),s("span",[t._v(t._s(1==e.sex?"男":"女"))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("医院：")]),s("span",[t._v(t._s(e.hospitalName))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("科别：")]),s("span",[t._v(t._s(e.offices))])]),t._v(" "),s("li",{staticClass:"d_flex"},[s("span",[t._v("临床诊断：")]),s("span",[t._v(t._s(e.diagnosed))])])])]),t._v(" "),s("div",{staticClass:"pt_block pro"},[s("mt-cell",[s("i",{staticClass:"icons_rx",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("ul",t._l(e.prescriptionDetail,function(e,i){return s("li",{staticClass:"d_flex"},[s("div",{staticClass:"left"},[t._v(t._s(i+1))]),t._v(" "),s("div",{staticClass:"center"},[s("p",[t._v(t._s(e.medicine))]),t._v(" "),s("span",[t._v(t._s(e.spec))])])])}))],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.pictureURL,expression:"cd.pictureURL"}],staticClass:"pt_block pt_upimg"},[s("h3",[t._v("处方笺图片")]),t._v(" "),s("div",{staticClass:"cfj_img"},[s("img",{attrs:{src:e.pictureURL}})])])])})),t._v(" "),s("section",{ref:"loadMore",staticClass:"loadMore",staticStyle:{visibility:"hidden"}},[s("mt-spinner",{attrs:{type:"triple-bounce"}})],1)],1)},staticRenderFns:[]};var l=s("vSla")(n,o,!1,function(t){s("e5iv")},"data-v-5f2c64b4",null);e.default=l.exports},e5iv:function(t,e){}});
//# sourceMappingURL=23.c8ccfbe6cf0808ad992d.js.map