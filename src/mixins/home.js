
	$(document).ready(function(){
		let move= $(".t").click(function(){
			let index=$(this).index();
			let $span=$("span");
			let $span_i=$($span[index]);
			let width=3.7+index*7.8+'rem';
			$(".underline").animate({left:width},300);
			
			switch(index)
			{
				case 0:	$span_i.css("color","red");
						$(".home-header").css('background',"red");
						break;
				case 1:	$span_i.css("color","blue");
						$(".home-header").css('background',"blue");
						break;
				case 2:	$span_i.css("color","purple");
						$(".home-header").css('background',"purple");
						break;
				case 3:	$span_i.css("color","rgba(255,204,0,0.5)");
						$(".home-header").css('background',"rgba(255,204,0,0.5)");
						break;
			}
			$span.not($span_i).css("color","black");
		})
		
	//图片的滚动
	/*	let scrollImage=(function(){
			let count=0;	
			var img=$('.img-wrap').children();
			var width=img.width();
			let blackPoint=$("#blackPoint li");
            for(let i=0;i<img.length;i++){
				let $img_i=$(img[i]);
				var position=i*width;
				$img_i.css("left",position);
				}
             function roll(){
				 for(let i=0;i<img.length;i++){
				 	var $img_i=$(img[i]);
						let index=$img_i.position().left/width; //图片当前位置的索引
						let count=index;
						count--;
						let position=count*width;
						$img_i.animate({left:position});
							if(position<-320){	
								$img_i.animate({left:'640px'},300);
								$img_i.stop().css('z-index','-99');
								img.not($img_i).css('z-index','99')
				}
						}
				 }
				let timer=setInterval(roll,2000)
		 	let count=0;
		  	let fig=$(".img-wrap");//获取图像的父移动框
	   		let pic=$(".img-wrap>img");//图片
		   	let picWidth=pic.width();//获取图片的宽度	  
		   	let blackPoint=$("#blackPoint li");
			 let moveImage=function(){
			let nun = parseInt(fig.position().left)/-picWidth;//获取鼠标事件当前图片的位置
			let count =nun;		
			alert(count);
			count++;
			let wid=-25.2-320/12*count + "rem";
			fig.animate({left:wid},function(){
				$pic_i=$(pic[count+1]);
				$pic_i.css("transform","translateZ(15.67rem)");
				pic.not($pic_i).css("transform","translateZ(0)");
			},0);	//疑点：animate写里面的参数时我总是纠结里面的单位px
		
			if(count>3){
				count=0;
				fig.animate({left:"-25.2rem"},0);
			};
			 let $black_i =$(blackPoint[count]);
		   	 $black_i.css("background-color","rgba(255,255,255,1)");
		     blackPoint.not($black_i).css("background-color","rgba(255,255,255,0.3)");
					
			};    
		    let timer=setInterval(moveImage,3000);
	})()
		*/
		//鼠标移动
		let s=(function(){
				let width=0;
				$(".tagAll").on('touchstart', function(e){//手指 触摸
       				startX = e.originalEvent.changedTouches[0].pageX;	
					}),
				$(".tagAll").on('touchend',function(e){//手指 离开
       				 moveEndX = e.originalEvent.changedTouches[0].pageX;
       				let slideNum =parseInt(moveEndX-startX);//滑动的距离
       				let width=$(this).position().left;//当前位置
       				let x=moveEndX-startX;
       				 if(x>20){//右滑
       				 	let widthLeft=width+slideNum;//最终距离
		       				 	if(widthLeft<=12){
		       				 		$(this).animate({left:widthLeft},0);
		       				 	}else{
		       				 		$(this).animate({left:'0rem'});
		       				 	}
       				 		} else if(x<-20){  //左滑
       				 		let	slideNum=slideNum*10;
       				 	let widthRight=width+slideNum;
       				 		if(widthRight>=-175){
		       				 		$(this).animate({left:widthRight});
		       				 	}else{
		       				 		$(this).animate({left:'-14.58rem'});
		       				 				}
       							 }
							})
				})()
				
				

	})

