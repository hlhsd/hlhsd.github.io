// JavaScript Document
{
	var ptyh = document.getElementById("ptyh");
	var cayh = document.getElementById("cayh");
	var left = document.getElementById("left");
    var right = document.getElementById("right");
    var sml = document.getElementById("sml");
	
	
	ptyh.addEventListener("click",function(){
            
             ptyh.className = "current";
		     cayh.className = "";
        });
	
	cayh.addEventListener("click",function(){
            
             cayh.className = "currents";
		     ptyh.className = "";
        });
	
	
	
	function myFunction0() { // 声明一个函数
    sml.style.marginLeft= "+"+ 32 +"px";
}

     function myFunction1() { // 声明一个函数
    sml.style.marginLeft= "-"+ 198 +"px";
}
     function myFunction2() { // 声明一个函数
    sml.style.marginLeft= "-"+ 428 +"px";
}
	
	let i=0;

right.addEventListener("click",function(){
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
});
}