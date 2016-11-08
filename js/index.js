
window.onload=function()
{
	var items=$(".item");
    var lists=$(".list");
          for(var i=0;i<items.length;i++)
          {
          	items[i].index=i;
          	items[i].onmouseover=function()
          	{
                lists[this.index].style.display="block";
				items[this.index].style.backgroundColor="#f6f6f6";
          	}
			items[i].onmouseout=function()
          	{
                lists[this.index].style.display="none";
				this.style.cssText="backgroundColor:#e4e4e4;";
				
          	}
          }
		 /* for (var i=0; i<items.length; i++) {
			  (function(n){
				  items[n].onmouseover=function()
					  {lists[n].style.display="block";
				  }
				  items[n].onmouseout=function()
					  {lists[n].style.display="none";
				  }
			  })(i)
		  }*/
	 var login=$("#login")
     var login1=$("#login1")
	     login.onmouseover=function(){
		 login1.style.display="block";
	 }
	     login.onmouseout=function(){
		 login1.style.display="none";
	 }
	 var yingye=$("#yingye")
     var yingye1=$("#yingye1")
	     yingye.onmouseover=function(){
		 yingye1.style.display="block";
	 }
	     yingye.onmouseout=function(){
		 yingye1.style.display="none";
	 }
	 /* 轮播图 */
	  var flag=true;
	 var imgs=$("a",$(".banmiddle")[0]);
		 //console.log(imgs);
    var btns=$("div",$(".but")[0]);
         //console.log(btns);
		 var now=0;
		 var next=0;
		 var ww=parseInt(getStyle(imgs[0],"width"))
			 //console.log(ww);
		 btns[0].className="yuan1";
		 for(i=0;i<imgs.length;i++)
	       {  if(i==0)
		      {continue;}
			 imgs[i].style.left=ww+"px";
		
		 }
		 function move() {
			 next++
				 if(next==imgs.length)
			 {
				 next=0;
			 }   
			     imgs[next].style.left=ww+"px";
				 animate(imgs[now],{left:-ww})
				 animate(imgs[next],{left:0},function(){flag=true})
				 btns[now].className="yuan";
				 btns[next].className="yuan1";
			     now=next;
		 }
		  function move1(){
			 next--
				 if(next<0)
			 {
				 next=imgs.length-1;
			 }   
			     imgs[next].style.left=-ww+"px";
				 animate(imgs[now],{left:ww},function(){flag=true})
				 animate(imgs[next],{left:0})
				 btns[now].className="yuan";
				 btns[next].className="yuan1";
			     now=next;
		 }
		// imgs[0].style.zIndex="10";
		 
/* stop*/
	 var middle=$(".banner_2")[0]
		 //console.log(middle);
	     var t=setInterval(move,2000)
      middle.onmouseover=function()
		 {
		 clearInterval(t)
	 }
		  middle.onmouseout=function()
		 {
		 t=setInterval(move,2000)
	 }
/* 选项卡*/

	for(var i=0;i<btns.length;i++)
	   {      
			  btns[i].index=i;
			  
		    btns[i].onclick=function()
			{   
				if(parseInt(getStyle(imgs[next],"left"))==0)
			   
				{if(now==this.index)
                    {
					imgs[now].style.left=0+"px";

					now=this.index;
					next=now;
				  }
                   else if(this.index>now)               
                  {
				 
				 imgs[this.index].style.left=ww+"px";
				  
                  animate(imgs[now],{left:-ww})
				
			     animate(imgs[this.index],{left:0});
				  imgs[now].style.left=ww+"px";
                  btns[now].className="yuan";
				  btns[this.index].className="yuan1";
				  now=this.index;
				  next=now;
				  }				  
				   else if(this.index<now)               
                  {
				 
					  imgs[this.index].style.left=-ww+"px"; 
				  
                  animate(imgs[now],{left:ww})
				  
				  animate(imgs[this.index],{left:0});
				  imgs[now].style.left=ww+"px";
                  btns[now].className="yuan";
				  btns[this.index].className="yuan1";
				  now=this.index;
				  next=now;}
				  
			} 
				
				}
			
		  
	}

			 /*function move () {
			 
			 now++
				 if(now==imgs.length)
			 {
				 now=0;
			 }
			 // 先让所有图片降低，当前图层提高
			 for(i=0;i<imgs.length;i++)
			 {
				 imgs[i].style.zIndex=5;
				 btns[i].className="yuan"
				 
			 }
			   imgs[now].style.zIndex=10;
			   btns[now].className="yuan1"
			  
			 }*/
		

			 /* 左右选项卡 */
			 var left=$("#left");
			 //console.log(left)
			 var right=$("#right");
			
			 left.onclick=function(){
				/* now--;
				 if(now<0)
				 {
					 now=imgs.length-1;
				 }
				  for(i=0;i<imgs.length;i++)
			 {
				 imgs[i].style.zIndex=5;
				 btns[i].className="yuan"
				 
			 }
			   imgs[now].style.zIndex=10;
			   btns[now].className="yuan1"
			 }
			 right.onclick=function(){
				 now++;
				 if(now>imgs.length-1)
				 {
					 now=0;
				 }
				  for(i=0;i<imgs.length;i++)
			 {
				 imgs[i].style.zIndex=5;
				 btns[i].className="yuan"
				 
			 }
			   imgs[now].style.zIndex=10;
			   btns[now].className="yuan1"*/
			  //if(parseInt(getStyle(imgs[next],"left"))==0)
			  if(flag)
				 {
				  move1();
				  flag=false;
					  }
				 
			 }	
			 right.onclick=function(){
            //if(parseInt(getStyle(imgs[next],"left"))==0)
			if(flag)
				 {move();
			       flag=false;}
			 
			 }
			 //节点轮播
			 var funs=$(".function")[0];
			 var box=$(".Box",$(".function")[0])
			 var aw=box[0].offsetWidth;
			 var btnl=$(".zuo")[0]
			 var btnr=$(".you")[0]
			 var flag2=true;
			 funs.style.width=aw*box.length+"px"
			 var r=setInterval(remove,2000);
			 var f=$(".fun")[0];
			 f.onmouseover=function(){
                clearInterval(r)
			 }
			f.onmouseout=function(){
                r=setInterval(remove,2000);
			 }
			 function remove(){
				 animate(funs,{left:-aw},function(){
				 var first=getFirst(funs);
				 funs.appendChild(first)
				 funs.style.left=0;
				 flag2=true;
				 })}
				 function removel(){
				 var first=getFirst(funs);
				 var last=getLast(funs);
				 funs.insertBefore(last,first);
				 funs.style.left=-aw+"px";
				 animate(funs,{left:0},function(){flag2=true})}
				 btnl.onclick=function(){
			    if(flag2)
				 { removel();
			          }
				flag2=false;
			 }
			    btnr.onclick=function(){
			    if(flag2)
				 { remove();
			       }
				 flag2=false;
			       }
		//公告
		var zuojt=$("#yd16");
		var youjt=$("#yd18");
		var blus=$(".bulletin");
		blus[0].style.display="block";
		var bnow=0;
		var bnext=0;
		function zy(){
			bnext++;
			if(bnext==blus.length)
			{
			bnext=0
				}
			blus[bnow].style.display="none";
			blus[bnext].style.display="block";
			bnow=bnext;
		}
		function yy(){
			bnext--;
			if(bnext<0)
			{
			bnext=blus.length-1
				}
			blus[bnow].style.display="none";
			blus[bnext].style.display="block";
			bnow=bnext;
		}
		zuojt.onclick=function(){
			zy();
		}
		youjt.onclick=function(){
			yy();
		}
		var pb3=$("#pb3");
		var pb4=$("#pb4");
		var pb5=$("#pb5");
		pb3.onmouseover=function(){
			animate(pb3,{right:36})
		}
		pb3.onmouseout=function(){
			animate(pb3,{right:-24})
		}
		pb4.onmouseover=function(){
			animate(pb4,{right:36})
		}
		pb4.onmouseout=function(){
			animate(pb4,{right:-24})
		}
		pb5.onmouseover=function(){
			animate(pb5,{right:36})
		}
		pb5.onmouseout=function(){
			animate(pb5,{right:-24})
		}
}
