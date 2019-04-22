$(function(){
    //图片懒加载
    lazyLoad({
        imgSrc: '/images/ak_300x300.jpg',
    });
    //轮换广告 start
    $('#roteAdv').after("<div class='slider' id='roteAdv_nav' style=''>").cycle({
        prev: '#turnL',
        next: '#turnR',
        fx:     'fade',
        speed:  '300',
        timeout: 5000,
        pager:  '#roteAdv_nav',
        before: function() { 
            // if (window.console) {
            //     console.log(32323233)
            // }
        //console.log(this.src); 
        },
        pagerAnchorBuilder: function(index,slide){
            var count=index+1;
            if(index==0){
                return '<span id="c'+count+'"  class="cur"></span>'
            }else{
                return '<span  id="c'+count+'"></span>'
            }
        },
        after: function(currSlideElement, nextSlideElement, options, forwardFlag){
            var a= $("#roteAdv_nav").find("span").attr("class","");
            $("#c" + nextSlideElement.id).attr("class","cur");
        }
    });
    /*轮换广告 end*/
})

function floorNameInit(floorName){
    // if(floorName.indexOf('pc女性频道-') != -1){
    //     floorName = floorName.replace('pc女性频道-','')
    // }
    return floorName;
}

function imgUrl(imgUrl){
// "http://113.108.163.210:9999/upLoadProduct/15317125707382018-07-16-11-42-50.png"

    // if(imgUrl.indexOf('http://113.108.163.210:9999') != -1){
    //     imgUrl = imgUrl.replace('http://113.108.163.210:9999','http://192.168.2.250:8081')
    // }else if(imgUrl.indexOf('http://localhost:8081') != -1){
    //     imgUrl = imgUrl.replace('http://localhost:8081','')       
    // }else if(imgUrl.indexOf('http://localhost:80') != -1){
    //     imgUrl = imgUrl.replace('http://localhost:80','http://113.108.163.210:9999')
    // }
    return imgUrl;
}