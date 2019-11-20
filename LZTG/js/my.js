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

// let erwmimgn = document.getElementById("erwmimgn");
// let erwmimgy = document.getElementById("erwmimgy");
// let boxewm = document.getElementById("boxewm");
// let erwm = document.getElementById("erwm");

// boxewm.addEventListener("click",function(){	
//     erwm.className = "erwmimgy";
// });
// boxewm.addEventListener("mouseenter",function(){	
//     erwm.className = "erwmimgy";
// });
// boxewm.addEventListener("mouseleave",function(){	
//     erwm.className = "erwmimgn";
// });

let box1= document.getElementById("box1");
	let box2= document.getElementById("box2");
	let box3= document.getElementById("box3");
    let bgtitle= document.getElementById("bgtitle");
	let thetxt= document.getElementById("thetxt");
	let baikeimg= document.getElementById("baikeimg");

    box1.addEventListener("click",function(){
		baikeimg.style.backgroundImage = "url('images/zu31.jpg')";
		bgtitle.innerHTML="重庆举办安全开放日15个市民家庭走进乐致糖果工业园";
	    thetxt.innerHTML="6月21日，重庆市食药监督局举办食品安全开放日活动，15位家长带着15位小朋友走进重庆市乐致糖果食品有限公司";
	});
	
	box2.addEventListener("click",function(){
		baikeimg.style.backgroundImage = "url('images/zu32.jpg')";
		bgtitle.innerHTML="重庆举办安全开放日市民走进乐致糖果工业园";
	    thetxt.innerHTML="开放日活动，15位家长带着15位小朋友走进重庆市乐致糖果食品有限公司,小朋友参观操作间，DIY糖果，玩的不亦乐乎";
	});
	
	box3.addEventListener("click",function(){
		baikeimg.style.backgroundImage = "url('images/zu33.jpg')";
		bgtitle.innerHTML="重庆举办视频安全开放日15个市民家庭走进乐致糖果工业园";
	    thetxt.innerHTML="6月21日，重庆市食药监督局举办食品安全开放日活动，15位家长带着15位小朋友走进重庆市乐致糖果食品有限公司";
	});
