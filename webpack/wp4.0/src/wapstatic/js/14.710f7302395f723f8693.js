webpackJsonp([14],{V8MN:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("AG0B"),i=s("wSez"),n={name:"info",data:function(){return{flag:!1,isUnscRollable:!1,backParentPage:!1,username:"",phone:"",age:"",hospital:"",ks:"",zd:"",rpList:[{index:1,medicine:"",spec:""}],cfjBgSrc:"./static/images/upload_img.jpg",files:"",progress:"",isUploadProgress:!1,options:[{label:"男",value:"male"},{label:"女",value:"female"}],sexVal:"male"}},components:{"mt-cell":i.Cell,"mt-button":i.Button,"mt-header":i.Header,"mt-field":i.Field,comHeaderTitle:a.a,"mt-spinner":i.Spinner,"mt-radio":i.Radio},filters:{},created:function(){},mounted:function(){this.$emit("changeClass",!1)},updated:function(){this.$nextTick(function(){})},destroyed:function(){this.$emit("changeClass",!0)},methods:{onFileChange:function(e){var t=this,s=e.target.files[0]||e.dataTransfer.files,a=new FileReader;a.readAsDataURL(s),a.onload=function(){i.src=this.result};var i=new Image,n=document.createElement("canvas"),l=n.getContext("2d");i.onload=function(){n.width=640,n.height=i.height/i.width*640,l.drawImage(i,0,0,n.width,n.height);var a=n.toDataURL(s.type,.7);t.cfjBgSrc=a,t.files=a.split(",")[1],e.target.value=null}},addRpList:function(){this.rpList.push({index:this.rpList.length+1,medicine:"",spec:""})},reduce:function(e,t){this.rpList.splice(t,1)},confirmCfj:function(){var e=this,t=new FormData;if(t.append("memberID",this.$store.state.memberId),t.append("sufferer",this.username),t.append("phone",this.phone),t.append("hospitalName",this.hospital),t.append("offices",this.ks),t.append("diagnosed",this.zd),t.append("file",this.files),t.append("age",this.age),t.append("sysNo","WAP端"),!this.username)return this.$options.methods.showToast("请填写患者姓名!"),!1;if("male"==this.sexVal)var s=1;else s=0;t.append("sex",s);for(var a=0;a<this.rpList.length;a++)t.append("prescriptionDetails["+a+"].medicine",this.rpList[a].medicine),t.append("prescriptionDetails["+a+"].spec",this.rpList[a].spec);if(this.flag)return!1;if(!document.getElementById("agreeLabel").checked)return this.$options.methods.showToast("请阅读并同意同意处方购买协议!"),!1;this.flag=!0,this.isUploadProgress=!0;this.$ajax.post(e.webRoot+"/prescription/addPrescription",t,{headers:{"Content-Type":"multipart/form-data"},transformRequest:[function(e){return e}]}).then(function(t){e.isUploadProgress=!1,t.data.success?(e.$options.methods.showToast(t.data.msg,1500),setTimeout(function(){e.flag=!1,location.reload()},1500)):(e.$options.methods.showToast(t.data.msg,1500),e.flag=!1)})},prescriptHistory:function(){this.$router.push({path:"prescript/Prescript_detail",query:{id:"001"}})},showToast:function(e,t){t=t||2e3;Object(i.Toast)({message:e,position:"center",duration:t})},changeClassOne:function(e){e?(this.backParentPage=!0,this.isUnscRollable=!1):(this.backParentPage=!1,this.isUnscRollable=!0)}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"wrap has_header_wrap",class:{unscrollable:e.isUnscRollable}},[s("com-header",{attrs:{titles:"处方笺"}},[s("template",{slot:"style-def"})],2),e._v(" "),s("div",{staticClass:"prescript_wrap"},[s("div",{staticClass:"pt_block"},[s("mt-field",{attrs:{label:"姓名",placeholder:"请输入患者姓名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),s("mt-field",{attrs:{label:"手机号码",placeholder:"请输入手机号码",type:"tel"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),s("mt-radio",{staticClass:"sexs d_flex",attrs:{title:"性别",options:e.options},model:{value:e.sexVal,callback:function(t){e.sexVal=t},expression:"sexVal"}}),e._v(" "),s("mt-field",{attrs:{label:"年龄",placeholder:"请输入年龄",type:"number"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),e._v(" "),s("div",{staticClass:"pt_block"},[s("mt-field",{attrs:{label:"医院",placeholder:"请输入开据医院"},model:{value:e.hospital,callback:function(t){e.hospital=t},expression:"hospital"}}),e._v(" "),s("mt-field",{attrs:{label:"科别",placeholder:"请输入科别",type:"text"},model:{value:e.ks,callback:function(t){e.ks=t},expression:"ks"}})],1),e._v(" "),s("div",{staticClass:"pt_block"},[s("mt-field",{attrs:{label:"临床诊断",placeholder:"请输入诊断结果",type:"textarea",rows:"4"},model:{value:e.zd,callback:function(t){e.zd=t},expression:"zd"}})],1),e._v(" "),s("div",{staticClass:"pt_block pro"},[s("mt-cell",[s("i",{staticClass:"icons_rx",attrs:{slot:"icon"},slot:"icon"}),e._v(" "),s("mt-button",{staticClass:"warm",attrs:{type:"default",size:"small",plain:""},on:{click:e.addRpList}},[e._v("添加药品")])],1),e._v(" "),s("ul",{attrs:{id:"add_rp_pro"}},e._l(e.rpList,function(t,a){return s("li",{staticClass:"rp_pro"},[s("div",{staticClass:"d_flex"},[s("span",[e._v(e._s(a+1))]),s("span",{on:{click:function(s){e.reduce(t,a)}}},[s("i")])]),e._v(" "),s("div",{staticClass:"d_flex"},[s("span",[e._v("药品名")]),e._v(" "),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.medicine,expression:"n.medicine"}],attrs:{autocomplete:"off",name:"prescriptionDetails["+a+"].medicine",placeholder:"请输入药品名称",type:"text"},domProps:{value:t.medicine},on:{input:function(s){s.target.composing||e.$set(t,"medicine",s.target.value)}}})])]),e._v(" "),s("div",{staticClass:"d_flex"},[s("span",[e._v("规格")]),e._v(" "),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.spec,expression:"n.spec"}],attrs:{autocomplete:"off",name:"prescriptionDetails["+a+"].spec",placeholder:"请输入药品规格",type:"text"},domProps:{value:t.spec},on:{input:function(s){s.target.composing||e.$set(t,"spec",s.target.value)}}})])])])}))],1),e._v(" "),s("div",{staticClass:"pt_block pt_upimg"},[s("h3",[e._v("处方笺图片")]),e._v(" "),s("div",{staticClass:"up"},[s("div",{staticClass:"up_in"},[s("img",{attrs:{src:e.cfjBgSrc}}),e._v(" "),s("input",{attrs:{accept:"image/*",type:"file",name:"file"},on:{change:e.onFileChange}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isUploadProgress,expression:"isUploadProgress"}],staticClass:"uploadProgress"},[s("p",[e._v("图片上传中")]),e._v(" "),s("mt-spinner",{attrs:{type:"fading-circle"}})],1)])])]),e._v(" "),s("div",{staticClass:"pt_block to_agreem"},[s("div",{staticClass:"d_flex"},[e._m(0),e._v(" "),s("router-link",{staticClass:"mint-cell-allow-right",attrs:{to:"prescript/agreement"}},[e._v("同意处方购买协议")])],1)])]),e._v(" "),s("div",{staticClass:"prescript_btns"},[s("mt-button",{attrs:{size:"small",plain:""},on:{click:e.prescriptHistory}},[e._v("查看记录"+e._s(e.progress))]),e._v(" "),s("mt-button",{staticClass:"green",attrs:{size:"small"},on:{click:e.confirmCfj}},[e._v("提交处方笺")])],1),e._v(" "),s("transition",{attrs:{name:"fade"}},[s("router-view",{on:{changeClass:e.changeClassOne}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{ischeckboxtwo:""}},[t("input",{attrs:{checked:"",id:"agreeLabel",type:"checkbox"}}),t("i")])}]};var o=s("vSla")(n,l,!1,function(e){s("e0i4"),s("p5n4")},"data-v-00840374",null);t.default=o.exports},e0i4:function(e,t){},p5n4:function(e,t){}});
//# sourceMappingURL=14.710f7302395f723f8693.js.map