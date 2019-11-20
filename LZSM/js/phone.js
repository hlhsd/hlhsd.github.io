{
    let navUl = document.getElementById("navUl");
	let search = document.getElementById("search");
	let ssts = document.getElementById("ssts");
	let left = document.getElementById("left");
    let right = document.getElementById("right");
    let sml = document.getElementById("sml");
    let num = document.getElementById("num");
    let numo = document.getElementById("numo");
    let numw = document.getElementById("numw");
    let nums = document.getElementById("nums");
    let li1 = document.getElementById("li1");
	let li2 = document.getElementById("li2");
	let li3 = document.getElementById("li3");
	let xxsml = document.getElementById("xxsml");
	let sj01 = document.getElementById("sj01");
	let sj02 = document.getElementById("sj02");
	let sj03 = document.getElementById("sj03");
	let sj04 = document.getElementById("sj04");
	let sj01img = document.getElementById("sj01img");
	let sj02img = document.getElementById("sj02img");
	let sj03img = document.getElementById("sj03img");
	let sj04img = document.getElementById("sj04img");
	let x=0;
	let y=0;
	let z=0;
	
    let lis = navUl.children ;
    for( let i=0 ; i <= lis.length-1 ; i++){
        lis[i].addEventListener("mouseenter",function(){
             let ul = this.children[1] ;
             // 判断，ul 是否存在。如果不存在，就终止函数运行
             if( !ul ){
                return null;
             }
             // ul.style.display = "block" ;
             ul.className = "submenu  menuShow";
        });

        lis[i].addEventListener("mouseleave",function(){
            let ul = this.children[1] ;
            if( !ul ){
                return null;
            }
            // ul.style.display = "none" ;
            ul.className = "submenu";
        });
    }
	
	search.addEventListener("click",function(){	
	     ssts.className = "sstx";
	});
	navUl.addEventListener("mouseenter",function(){	
	     ssts.className = "ssts";
	});
	ssts.addEventListener("mouseleave",function(){	
	     ssts.className = "ssts";
	});
	
	
numo.style.background="hsla(198,98%,53%,0.62)";
function myFunction0() { // 声明一个函数
    sml.style.marginLeft= "-"+ 0 +"px";
	numo.style.background="hsla(198,98%,53%,0.62)";
	numw.style.background="#FFFFFF";
	nums.style.background="#FFFFFF";
}

function myFunction1() { // 声明一个函数
    sml.style.marginLeft= "-"+ 2400 +"px";
	numw.style.background="hsla(198,98%,53%,0.62)";
	numo.style.background="#FFFFFF";
	nums.style.background="#FFFFFF";
}
function myFunction2() { // 声明一个函数
    sml.style.marginLeft= "-"+ 4800 +"px";
	nums.style.background="hsla(198,98%,53%,0.62)";
	numo.style.background="#FFFFFF";
	numw.style.background="#FFFFFF";
}
function xuanxiangka1() { // 声明一个函数
    xxsml.style.marginLeft= "-"+ 0 +"px";
	li1.className = "li2";
	li2.className = "li1";
	li3.className = "li1";
}
function xuanxiangka2() { // 声明一个函数
    xxsml.style.marginLeft= "-"+ 1200 +"px";
	li2.className = "li2";
	li1.className = "li1";
	li3.className = "li1";
}
function xuanxiangka3() { // 声明一个函数
    xxsml.style.marginLeft= "-"+ 2400 +"px";
	li3.className = "li2";
	li2.className = "li1";
	li1.className = "li1";
}
xuanxiangka2();	
numo.addEventListener("click",function(){
	myFunction0();
	clearInterval(next);
	});

numw.addEventListener("click",function(){	
	myFunction1();
	clearInterval(next);
	});
	
nums.addEventListener("click",function(){	
	myFunction2();
	clearInterval(next);
	});
	
let i=0;

right.addEventListener("click",function(){
	clearInterval(next);
	i++
	if(i>=3){i=-1;i++;}
	
	switch(i)
	{
		case 0:
		myFunction0();
		break;
					
		case 1:
		myFunction1();
		break;
					
		case 2:
		myFunction2();
		break;
	}	
});
		
left.addEventListener("click",function(){
	clearInterval(next);
	i--
	if(i<=-1){
		i=3;
		i--;
	}
	
	switch(i)
	{
		case 0:
		myFunction0();
		break;
					
		case 1:
		myFunction1();
		break;
					
		case 2:
		myFunction2();
		break;
	}
	 if(!setInterval()) return;
});

//计时器 banner自动换	
let next=setInterval(function(){
	

	i++
	if(i>=3){i=-1;i++;}
	
	switch(i)
	{
		case 0:
		myFunction0();
		break;
					
		case 1:
		myFunction1();
		break;
					
		case 2:
		myFunction2();
		break;
	}	
},3000);
	
li1.addEventListener("click",function(){	
	xuanxiangka1();
	});	
li2.addEventListener("click",function(){	
	xuanxiangka2();
	});	
li3.addEventListener("click",function(){	
	xuanxiangka3();
	});		

	
let blocks = [
      
	    {
            id: "sjaction1",
            aniClass: "yundong"
        },
	    {
            id: "sjaction2",
            aniClass: "yundong"
        },
	    {
            id: "sjaction3",
            aniClass: "yundong"
        },
	    {
            id: "sjaction4",
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
        c3Fun: function () {
            let id = blocks[2].id;
            let cName = blocks[2].aniClass;
            if (isInWin(id)) {
               
                getId(id).classList.add(cName);
                delete ScrollFun.c3Fun;
            }
        },
        c4Fun: function () {
            let id = blocks[3].id;
            let cName = blocks[3].aniClass;
            if (isInWin(id)) {
                
                getId(id).classList.add(cName);
                delete ScrollFun.c4Fun;
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
}