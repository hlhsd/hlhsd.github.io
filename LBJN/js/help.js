$(function(){
    
function resize(){
 //获取当前屏幕宽度
 var windowwidth=$(window).width();

 //
 var isSmallScreen=windowwidth<768
 //遍历（each）
 $('#main_ad>.carousel-inner>.item').each(function(i,item){
     //dom对象转化为jq对象
     var $item = $(item);
     var imgSrc=isSmallScreen?$item.data('image-xs'):$item.data('image-lg')
  
     $item.css('backgroundImage','url('+imgSrc+')')

// if(isSmallScreen){
//     item.html('<img src="'+imgSrc+'" alt=""/>')

// }else{

// }


    //  console.info(imgSrc);
 })
 


} 

   $(window).on('resize',resize).trigger('resize')
 
   





   var $carousel =  $('.carousel');
   var offset = 50;

   $carousel.on('touchstart',function(e){
       //获取开始屏幕值
       startX = e.originalEvent.touches[0].clientX
    //    console.info(startX)
    } )

$carousel.on('touchmove',function(e){
    endX = e.originalEvent.touches[0].clientX
    // console.info(endX)
})

$carousel.on('touchend',function(e){
  var distance = Math.abs(startX-endX)
console.info(distance)

if(distance>offset){
    $(this).carousel(startX>endX?'next':'prev')
}



})

  
}) 


let bannerblock = document.getElementById("bannerblock");
let headerblock = document.getElementById("headerblock");
bannerblock.addEventListener("mouseenter",function(){
    headerblock.className="header-block1";
});
bannerblock.addEventListener("mouseleave",function(){
    headerblock.className="header-block";
});

$('.carousel').carousel({
    interval:null
  })


  //窗口检测
  let blocks = [
	{
		id: "content1",
		aniClass: "yundong"
	},
	{
		id: "content2",
		aniClass: "yundong"
	},
	
	
	
];

let getId = function (id) {
	return document.getElementById(id);
};

//判断标签是否进入到窗口：
let isInWin = function (id) {
	let doc = document.documentElement;
	let tag = getId(id);
	if (tag.offsetTop - doc.scrollTop <= doc.clientHeight - doc.clientHeight/2 && tag.offsetTop - doc.scrollTop >= 0) {
		console.info(id + " is in win");
		return true;
	}
	return false;
};

//创建板块添加动画效果函数。
let ScrollFun = {
	c1Fun: function () {
		let id = blocks[0].id;
		let cName = blocks[0].aniClass;
		if (isInWin(id)) {
			// 动画          
			getId(id).classList.add(cName);
			console.info(getId(id).className);
			// 动画执行完毕，删除该方法，防止重复执行。
			delete ScrollFun.c1Fun;
		}
	},
	c2Fun: function () {
		let id = blocks[1].id;
		let cName = blocks[1].aniClass;
		if (isInWin(id)) {            
			getId(id).classList.add(cName);
			delete ScrollFun.c2Fun;
		}
	},

};

 //滚动事件
let ScrollMain = function () {
	for (let funName  in ScrollFun) {
		ScrollFun[funName]();
	}
};
// 初始执行一次。
ScrollMain();
window.addEventListener("scroll", ScrollMain);
