function tips(t,a){layui.use("layer",function(){layer.msg(t,{icon:a,time:1e3})})}function getQueryString(t){var a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(a);return null!=r?decodeURI(r[2]):null}function getUser(){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var r=t[a].split("=");if("memberId"==r[0]&&"null"!=r[1])return unescape(r[1])}}function requireGtag(t){t.title,t.content}$(function(){$.getGlobalVal().webRoot,getQueryString("ser_con");lazyLoad({imgSrc:"/images/ak_300x300.jpg"});var c=getQueryString("productTypeOne"),s=getQueryString("productTypeTwo"),o=getQueryString("productName"),r=window.location.host;r=-1==r.indexOf(".ak1ak1.com")?"":".ak1ak1.com";$(".list-shou").click(function(){"收起"==$(this).children("span").html()?($(this).children("span").html("展开").next().addClass("layui-icon-down").removeClass("layui-icon-up"),$(this).parent().css({height:"42px",overflow:"hidden"})):($(this).children("span").html("收起").next().addClass("layui-icon-up").removeClass("layui-icon-down"),$(this).parent().css({height:"200px",overflow:"hidden"}),$(this).prev().css({height:"200px",overflow:"auto"}))}),$(".tab-card .sortType").click(function(){$(this).addClass("active").siblings().removeClass("active")});var p=null;function d(i,n){layui.use("layer",function(){var t=layui.layer;p=t.load(2)});var t=$(".tab-card .input-w input").eq(0).val(),a=$(".tab-card .input-w input").eq(1).val(),r=$(".pro-type .productDrugType").find(".productDrugActive").html(),e=$(".pro-type .brandList").find(".brandActive").attr("brandId"),u=$.trim($("#productName").val()),l={page:i,limit:20,productName:null==(u=u||null)?o:u,isImport:null,productDrugType:r=r||null,brandId:e=e||null,lowestPrice:t=t||null,highest:a=a||null,productType_one:c,productType_two:s,sysNo:"wap"};$.ajax({url:$.getGlobalVal().webRoot+"/product/getProductList",type:"POST",dataType:"json",data:l,success:function(t){if($(".crumbs-bar .cru-s p span").html(t.count),$(".tab-card .page .tabCount").html(Math.ceil(t.count/20)),$(".pro-wrap").html(""),t.data,t.data.length<=0)layui.use("layer",function(){layui.layer.close(p)}),$(".pro-wrap").html("<h5>没有更多数据了！</h5>");else{for(var a="",r=0;r<t.data.length;r++){var e=null;e=1==t.data[r].prescriptionType?'<button class="demandBtn">需求登记</button>':'<button class="buyBtn">立即购买</button>',a+='<div class="item" productIndex="'+r+'" productId="'+t.data[r].productID+'"><a target="_blank" class="product-info" href="/products/'+t.data[r].productNumber+'.html"><img class="lazy" data-original="'+(t.data[r].defaultPhoto?t.data[r].defaultPhoto:"")+'" alt="'+t.data[r].productName+'" title="'+t.data[r].productName+'"><p><i class="'+$.imgType(t.data[r].prescriptionType)+'"></i>'+t.data[r].productName+'</p></a><div class="buy"><div class="pri"><span class="buy-pri">'+$.priceFilter(t.data[r].ourPrice)+'</span><span class="old-pri">'+$.priceFilter(t.data[r].price)+'</span></div><div class="num-wrap"><span class="reduce"></span><input class="num" value="1" maxStore="'+t.data[r].reserves+'"/><span class="add"></span></div></div>'+e+"</div>"}$(".pro-wrap").html(a)}layui.use("layer",function(){layui.layer.close(p)}),lazyLoad({imgSrc:"/static/images/ak_300x300.jpg"}),(i<=1||n)&&layui.use("laypage",function(){layui.laypage.render({elem:"page",count:t.count,limit:20,curr:i,layout:["page","prev","next"],theme:"#a7a7a7",jump:function(t,a){$(".tab-card .page .tabCurr").html(t.curr),a||d(t.curr)}})})}})}if(0<$(".pro-wrap .item").length){$(".pro-wrap .item");layui.use("laypage",function(){layui.laypage.render({elem:"page",count:$("#prosCount").attr("data-count")||0,limit:20,curr:1,layout:["page","prev","next"],theme:"#a7a7a7",jump:function(t,a){$(".tab-card .page .tabCurr").html(t.curr),a||d(t.curr)}})})}$(".pro-wrap").on("click",".reduce",function(){var t=Number($(this).next().val());if(!/^[0-9]*$/.test(t))return tips("请输入数字",2),$(this).next().val(1),!1;t=--t<=1?1:t,$(this).next().val(t)}),$(".pro-wrap").on("click",".add",function(){var t=Number($(this).prev().val());if(!/^[0-9]*$/.test(t))return tips("请输入数字",2),$(this).prev().val(1),!1;t++,$(this).prev().val(t)}),$(".pro-type .brandList").on("click","a",function(){$(".crumbs").find(".crumbBrand").remove(),$(".crumbs").append('<span class="crumbBrand" brandId="'+$(this).attr("brandId")+'">'+$(this).html()+"</span>"),$(this).addClass("brandActive").parent().siblings().find("a").removeClass("brandActive"),d(1)}),$(".pro-type .productDrugType").on("click","a",function(){$(this).addClass("productDrugActive").parent().siblings().find("a").removeClass("productDrugActive");$(this).html(),$(".pro-type .brandList").find(".brandActive").attr("brandId");d(1)}),$(".priAlert input").click(function(){$(this).parent().parent().addClass("pri").children(".pri-btn").css({display:"block"})}),$(".priAlert .pri-ok").click(function(){var t=$(".tab-card .input-w input").eq(0).val(),a=$(".tab-card .input-w input").eq(1).val();if(Number(t)>Number(a))layui.use("layer",function(){layer.msg("请填写正确的价格区间",{icon:2})});else{$(this).parent().css({display:"none"}).parent().removeClass("pri");var r=$(".pro-type .productDrugType").find(".productDrugActive").html(),e=$(".pro-type .brandList").find(".brandActive").attr("brandId");r=r||null,e=e||null,d(1)}}),$(".priAlert .pri-cle").click(function(){$(this).parent().css({display:"none"}).siblings(".input-w").children("input").val("").parent().parent().removeClass("pri"),d(1)}),$("#searchBtn").click(function(){$.trim($("#productName").val()),$(".crumbs .crumbBrand").attr("brandId")&&$(".crumbs .crumbBrand").attr("brandId");d(1)});$("#tabPageNext").click(function(){var t=Number($(".tab-card .page .tabCurr").html()),a=Number($(".tab-card .page .tabCount").html());t=a<++t?a:t,$(".tab-card .page .tabCurr").html(t),d(t,"tabPage")}),$("#tabPagePrev").click(function(){var t=Number($(".tab-card .page .tabCurr").html());Number($(".tab-card .page .tabCount").html());t=--t<1?1:t,$(".tab-card .page .tabCurr").html(t),d(t,"tabPage")}),$(".demandBtn").click(function(){var t=$(this).attr("data-proNum")||"";if(t||0==t){var r=$.trim($(this).siblings(".buy").find(".num-wrap .num").val());/^[0-9]*$/.test(r)||(r=1),$(this).siblings(".buy").find(".num-wrap .num").val(r),$.ajax({url:$.getGlobalVal().webRoot+"/product/findProductByProductNumber",data:{productNumber:t}}).done(function(t){if(null==t.data)return tips(t.msg,2),!1;var a=t.data;$.require({path:1,product:a,qty:r,requireGtag:requireGtag})})}else tips("获取商品信息失败",2)});$(".pro-wrap").on("click",".buyBtn",function(){var t=$.trim($(this).prev().find(".num-wrap .num").val()),a=$(this).parent().attr("productId");return/^[0-9]*$/.test(t)?getUser()?(gtag("event","点击立即购买",{event_category:"商品id："+a}),window.location.href="/submitOrder.html",void $.cookie("order",JSON.stringify({orderType:1,productId:a,qty:Number(t)}),{path:"/",domain:r})):($.loginAlert(),!1):(tips("请输入数字",2),$(this).prev().find(".num-wrap .num").val(1),!1)});$("#loginShow").click(function(){if($.getGlobalVal().memberId)return!1;var t={};t.getdefault=getdefault,$.loginAlert(t)})}),Date.prototype.Format=function(t){var a={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return t};