$(document).ready(function(){
	var imgs=$(".banmiddle a");
	var btns=$("div",".but");
	var right=$("#right");
	var left=$("#left");
	var banmiddle=$(".banner_2");
	var now=0;
  var flag2=true;
    var next=0;
    var ww=imgs.width();
    console.log(ww);
    btns.eq(0).css("background","#cc1a83");
	imgs.slice(1).css("left",ww);
    var t=setInterval(move,2000)
    function move(){
    	next=now+1
    	if(next==imgs.length){
    		next=0
    	}
     imgs.eq(next).css("left",ww).end().eq(now).animate({left:-ww}).end().eq(next).
     animate({left:0},function(){flag2=true})
     btns.eq(next).css("background","#cc1a83").end().eq(now).css("background","#ccc")
     now=next;
 }
    function movel(){
    	next=now-1
    	if(next<0){
    		next=imgs.length-1
    	}
     imgs.eq(next).css("left",-ww).end().eq(now).animate({left:ww}).end().eq(next).
     animate({left:0},function(){flag2=true})
     btns.eq(next).css("background","#cc1a83").end().eq(now).css("background","#ccc")
     now=next;
    }
   banmiddle.hover(function(){
   	clearInterval(t)
   },function(){
   	t=setInterval(move,2000)
   })

   right.click(function(){
    if(flag2)
       {move();}
     flag2=false
   })
   left.click(function(){
   	   if(flag2)
       {movel();}
     flag2=false
   })
    btns.click(function(){
    	var index=$(this).index(".yuan")
    	if(index==now){
    		return;
    	}
    	if(index<now){
    		imgs.eq(index).css("left",-ww).end().eq(now).animate({left:ww}).end().eq(index).animate({left:0})
    		btns.eq(now).css("background","#ccc").end().eq(index).css("background","#cc1a83")
    	}
    	if(index>now){
        imgs.eq(index).css("left",ww).end().eq(now).animate({left:-ww}).end().eq(index).animate({left:0})
        btns.eq(now).css("background","#ccc").end().eq(index).css("background","#cc1a83")
    	}
    	now=index;
    })

    // 节点轮播
      var fun=$(".fun")
      var funs=$(".function")
      var boxs=$(".function .Box")
      var zuo=$(".zuo")
      var you=$(".you")
      var flag=true
      function nmove(){
    	funs.animate({left:-295},"linear",function(){
    		$(this).children().first().appendTo(this)
    		$(this).css("left",0);
        flag=true;
    	})
    }
      function nmovel(){
      	var first=funs.children().first();
      	var last=funs.children().last()
      	last.insertBefore(first)
      	funs.css({left:-295})
      	funs.animate({left:0},"linear",function(){flag=true})

      }
     var nt=setInterval(nmove,2000)
     fun.hover(function(){clearInterval(nt)},function(){nt=setInterval(nmove,2000)})
     

     zuo.click(function(){
      if(flag){
          nmovel()
      }
       flag=false;
     })
     you.click(function(){
       if(flag){
          nmove()
      }
       flag=false;
     })

     var pflag=true;

     $("#pb3").hover(function(){
      if(pflag){$(this).animate({right:36})}
       pflag=false}
      ,(function(){
        $(this).animate({right:-24},60,function(){pflag=true})}))
     $("#pb4").hover(function(){
      if(pflag){$(this).animate({right:36})} pflag=false}
      ,(function(){
        $(this).animate({right:-24},60,function(){pflag=true})}))
     $("#pb5").hover(function(){
      if(pflag){$(this).animate({right:36})} pflag=false}
      ,(function(){
        $(this).animate({right:-24},60,function(){pflag=true})}))
     



   var bulletin=$(".bulletin")
   bulletin.eq(0).css("display","block");
   var zuojt=$("#yd16");
   var youjt=$("#yd18");
   var bnext=0;
   var bnow=0;
   function zy(){
			bnext++;
			if(bnext==bulletin.length)
			{
			bnext=0
				}
			bulletin.eq(bnext).css("display","block").end().eq(bnow).css("display","none")
			bnow=bnext;
		}
	function yy(){
			bnext--;
			if(bnext<0)
			{
			bnext=bulletin.length-1
				}
			bulletin.eq(bnext).css("display","block").end().eq(bnow).css("display","none")
			bnow=bnext;
		}
	zuojt.click(function(){
		zy()
	})	
	youjt.click(function(){yy()})
})