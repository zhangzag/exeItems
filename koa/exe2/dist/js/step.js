!function(t){t.fn.step=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)};var e,i={stepNames:["","",""],initStep:1};e={init:function(e){e?(e.stepNames&&"object"==typeof e.stepNames||(e.stepNames=i.stepNames),(!e.initStep||isNaN(e.initStep)||e.initStep<0)&&(e.initStep=i.initStep),e.initStep>e.stepNames.length&&(e.initStep=e.stepNames.length)):e=i;var s="";s+='<ul class="progressbar">',t.each(e.stepNames,function(i,t){s+="<li",i<e.initStep&&(s+=' class="active" '),s+=">",s+=t,s+="</li>"}),s+="</ul>",this.empty().append(s),t(".progressbar li").css("width",100/e.stepNames.length+"%")},next:function(){var i=this.find("li.active").length;i!=this.find("li").length&&(this.find("li").eq(i).addClass("active"),this.find("li").eq(i).prev().addClass("active fin"),3<=i&&this.find("li").eq(i).addClass("active fin"))},previous:function(){var i=this.find("li.active").length;1!=i&&this.find("li").eq(i-1).removeClass("active")},"goto":function(i){if(!(i<0||i>this.find("li").length)){this.find("li").removeClass("active");var t=this.find("li").eq(i-1);t.addClass("active"),t.prevAll("li").addClass("active")}}}}($);