// JavaScript Document
{
	let up = document.getElementById("up");
	let down = document.getElementById("down");
	let a1 = document.getElementById("a1");
	let a2 = document.getElementById("a2");
	let a3 = document.getElementById("a3");
	let a4 = document.getElementById("a4");
	let a5 = document.getElementById("a5");
	let home = document.getElementById("home");
	let profile = document.getElementById("profile");
	let messages = document.getElementById("messages");
	let settings = document.getElementById("settings");
	let settingsb = document.getElementById("settingsb");
	
	let x=3;
	up.addEventListener("click",function(){	
		x--
		if(x<1){
			x=5
		}
		y="a"+x;
		console.log(y);
		switch(x)
	{
		case 1:
		a1.className ="active";
		
		a2.className="active1";
		a3.className="active1";
		a4.className="active1";
		a5.className="active1";
		home.className ="tab-pane active";
		profile.className="tab-pane";
		messages.className="tab-pane";
		settings.className="tab-pane";
		settingsb.className="tab-pane";
		break;
					
		case 2:
			a1.className ="active1";
			a2.className="active";
			a3.className="active1";
			a4.className="active1";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane  active";
		    messages.className="tab-pane";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane";

		break;
					
		case 3:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active";
			a4.className="active1";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane  active";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane";
		break;

		case 4:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active1";
			a4.className="active";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane";
		    settings.className="tab-pane  active";
		    settingsb.className="tab-pane";
		break;

		case 5:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active1";
			a4.className="active1";
			a5.className="active";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane  active";
		break;
	}	
		
   });

   down.addEventListener("click",function(){	
	x++
	if(x>5){
		x=1
	}
	y="a"+x;
	console.log(y);
	switch(x)
	{
		case 1:
		a1.className ="active";
		
		a2.className="active1";
		a3.className="active1";
		a4.className="active1";
		a5.className="active1";
		home.className ="tab-pane active";
		profile.className="tab-pane";
		messages.className="tab-pane";
		settings.className="tab-pane";
		settingsb.className="tab-pane";
		break;
					
		case 2:
			a1.className ="active1";
			a2.className="active";
			a3.className="active1";
			a4.className="active1";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane  active";
		    messages.className="tab-pane";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane";

		break;
					
		case 3:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active";
			a4.className="active1";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane  active";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane";
		break;

		case 4:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active1";
			a4.className="active";
			a5.className="active1";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane";
		    settings.className="tab-pane  active";
		    settingsb.className="tab-pane";
		break;

		case 5:
			a1.className ="active1";
			a2.className="active1";
			a3.className="active1";
			a4.className="active1";
			a5.className="active";
			home.className ="tab-pane";
		    profile.className="tab-pane";
		    messages.className="tab-pane";
		    settings.className="tab-pane";
		    settingsb.className="tab-pane  active";
		break;
	}	
});


let blocks = [
	{
		id: "content1",
		aniClass: "yundong"
	},
	{
		id: "content2",
		aniClass: "yundong"
	}
	
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
	}
	
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

var r = $('.return');
if (r)
  $(window).scroll(function () { if ($(window).scrollTop() >= 500) r.fadeIn('slow'); else r.fadeOut('slow'); });

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}