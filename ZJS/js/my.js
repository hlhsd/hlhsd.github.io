$(function(){
 function resize(){
    //获取屏幕
    var windowwidth=$(window).width();
    //console.log(windowwidth)
    var isSmallScreen=windowwidth<768

    $('#main_ad>.carousel-inner>.item').each(function(i,item){
        var $item=$(item);
        var imgSrc=isSmallScreen?$item.data('image-xs'):$item.data('image-lg')
        $item.css('backgroundImage','url('+imgSrc+')')
        // if(isSmallScreen){
        //     $item.html('<img src="'+imgSrc+'"alt=""/>')

        // }else{

        
        // }
        
    })
 }
   $(window).on("resize",resize).trigger('resize')
   
//定义触摸区域
   var $carousel=$('.carousel');
   var offset=50;

   $carousel.on('touchstart',function(e){
        //console.log(e);
        startX=e.originalEvent.touches[0].clientX
   })

   $carousel.on('touchmove',function(e){
        //console.log(e.originalEvent.touches[0].clientX)
        endX=e.originalEvent.touches[0].clientX
   })

   $carousel.on('touchend',function(){
    //console.log(endX)
    //控制滑动的距离  距离要大于一定的值才能滑动
    var distance=Math.abs(startX-endX)
    //距离的绝对值
    //console.log(distance)
    if(distance>offset){
        console.log(startX>endX?'左':'右')
        $(this).carousel(startX>endX?'next':'prev')
    }
})
})

let erwmimgn = document.getElementById("erwmimgn");
let erwmimgy = document.getElementById("erwmimgy");
let boxewm = document.getElementById("boxewm");
let erwm = document.getElementById("erwm");

boxewm.addEventListener("click",function(){	
    erwm.className = "erwmimgy";
});
boxewm.addEventListener("mouseenter",function(){	
    erwm.className = "erwmimgy";
});
boxewm.addEventListener("mouseleave",function(){	
    erwm.className = "erwmimgn";
});

