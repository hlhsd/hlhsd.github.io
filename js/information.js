{
    let navUl = document.getElementById("navUl");
	let search = document.getElementById("search");
    let ssts = document.getElementById("ssts");
	let smbtn1 = document.getElementById("smbtn1");
	let smbtn2 = document.getElementById("smbtn2");
	let smbtn3 = document.getElementById("smbtn3");
	let smbtn4 = document.getElementById("smbtn4");
    let sjbgimg = document.getElementById("sjbgimg");
	let rom_btn1 = document.getElementById("rom_btn1");
	let rom_btn2 = document.getElementById("rom_btn2");
	let rom_btnblack = document.getElementById("rom_btnblack");
	let rom_btnblue = document.getElementById("rom_btnblue");
	let rom_btnorg = document.getElementById("rom_btnorg");
	let rom_btnwhite = document.getElementById("rom_btnwhite");
	let sjprice = document.getElementById("sjprice");
	
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
	
	function myFunblackbg() { // 声明一个函数
      smbtn1.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgh1.jpg')";
	});
	
	smbtn2.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgh2.jpg')";
	});
	smbtn3.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgh3.jpg')";
	});
	smbtn4.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgh4.jpg')";
	});  
}
	function myFunbluebg() { // 声明一个函数
      smbtn1.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbg1.jpg')";
	});
	
	smbtn2.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbg2.jpg')";
	});
	smbtn3.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbg3.jpg')";
	});
	smbtn4.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbg4.jpg')";
	});  
}
	function myFunorgbg() { // 声明一个函数
      smbtn1.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgo1.jpg')";
	});
	
	smbtn2.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgo2.jpg')";
	});
	smbtn3.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgo3.jpg')";
	});
	smbtn4.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgo4.jpg')";
	});  
}
	function myFunwhitebg() { // 声明一个函数
      smbtn1.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgw1.jpg')";
	});
	
	smbtn2.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgw2.jpg')";
	});
	smbtn3.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgw3.jpg')";
	});
	smbtn4.addEventListener("click",function(){
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgw4.jpg')";
	});  
}
	
	function myFunblack() { // 声明一个函数
        smbtn1.style.backgroundImage = "url('images/smh1.jpg')";
		smbtn2.style.backgroundImage = "url('images/smh2.jpg')";
		smbtn3.style.backgroundImage = "url('images/smh3.jpg')";
		smbtn4.style.backgroundImage = "url('images/smh4.jpg')";
}
	function myFunblue() { // 声明一个函数
        smbtn1.style.backgroundImage = "url('images/sm1.jpg')";
		smbtn2.style.backgroundImage = "url('images/sm2.jpg')";
		smbtn3.style.backgroundImage = "url('images/sm3.jpg')";
		smbtn4.style.backgroundImage = "url('images/sm4.jpg')";
}
	function myFunorg() { // 声明一个函数
        smbtn1.style.backgroundImage = "url('images/smo1.jpg')";
		smbtn2.style.backgroundImage = "url('images/smo2.jpg')";
		smbtn3.style.backgroundImage = "url('images/smo3.jpg')";
		smbtn4.style.backgroundImage = "url('images/smo4.jpg')";
}
	function myFunwhitex() { // 声明一个函数
        smbtn1.style.backgroundImage = "url('images/smw1.jpg')";
		smbtn2.style.backgroundImage = "url('images/smw2.jpg')";
		smbtn3.style.backgroundImage = "url('images/smw3.jpg')";
		smbtn4.style.backgroundImage = "url('images/smw4.jpg')";
}
	
	rom_btn1.style.border = "2px solid #7ecef4";
	rom_btnblue.className = "rom-btn1";
	myFunblue();
	myFunbluebg();
	rom_btn1.addEventListener("click",function(){
		rom_btn1.style.border = "2px solid #7ecef4";
		rom_btn2.style.border = "1px solid #bfbfbf";
		sjprice.innerHTML="￥1598";
	});
	rom_btn2.addEventListener("click",function(){
		rom_btn2.style.border = "2px solid #7ecef4";
		rom_btn1.style.border = "1px solid #bfbfbf";
		sjprice.innerHTML="￥1798";
	});
	
	rom_btnblack.addEventListener("click",function(){
		myFunblack();
		myFunblackbg();
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgh1.jpg')";
		smbtn1.style.backgroundImage = "url('images/smh1.jpg')";
		rom_btnblack.className = "rom-btn1";
		rom_btnblue.className = "rom-btn";
		rom_btnorg.className = "rom-btn";
		rom_btnwhite.className = "rom-btnc";
	});
	rom_btnblue.addEventListener("click",function(){
		myFunblue();
		myFunbluebg();
		sjbgimg.style.backgroundImage = "url('images/if-16xsbg1.jpg')";
        rom_btnblack.className = "rom-btn";
		rom_btnblue.className = "rom-btn1";
		rom_btnorg.className = "rom-btn";
		rom_btnwhite.className = "rom-btnc";
	});
	rom_btnorg.addEventListener("click",function(){
		myFunorg();
		myFunorgbg();
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgo1.jpg')";
		rom_btnblack.className = "rom-btn";
		rom_btnblue.className = "rom-btn";
		rom_btnorg.className = "rom-btn1";
		rom_btnwhite.className = "rom-btnc";
	});
	rom_btnwhite.addEventListener("click",function(){
		myFunwhitex();
		myFunwhitebg();
		sjbgimg.style.backgroundImage = "url('images/if-16xsbgw1.jpg')";
		rom_btnblack.className = "rom-btn";
		rom_btnblue.className = "rom-btn";
		rom_btnorg.className = "rom-btn";
		rom_btnwhite.className = "rom-btnc1";
	});
	
	
	
	
	
	
	
	
	
	
	
	
}