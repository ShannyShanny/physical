			function need1(){
//				var needthing = document.getElementById("needthing");
//				needthing.style.display = "none";
				$("#title").fadeOut(0);
//				var canvas1 = document.getElementById("canvas1");
//				canvas1.style.display = "block";
				$("#canvas1").fadeIn(1000);
				$("#list1").fadeIn(1000);
			}
			function need2(){
//				var canvas1 = document.getElementById("canvas1");
//				canvas1.style.display = "none";
				$("#canvas1").fadeOut(0);
				$("#list1").fadeOut(0);
//				var canvas2 = document.getElementById("canvas2");
//				canvas2.style.display = "block";
				$("#canvas2").fadeIn(1000);
				$("#list2").fadeIn(1000);
			}
			function title2(){
				$("#canvas2").fadeOut(0);
				$("#list2").fadeOut(0);
				$("#title2").fadeIn(1000);
			}
			function title3(){
				$("#title3").fadeIn(1000);
			}
			function title4(){
				$("#title3").fadeOut(0);
				$("#title4").fadeIn(1000);
			}
			function title5(){
				$("#title4").fadeOut(0);
				$("#title5").fadeIn(1000);
			}
			function title6(){
				$("#title5").fadeOut(0);
				$("#title6").fadeIn(1000);
			}
			function title7(){
				$("#title7").fadeIn(1000);
			}
			function title8(){
				$("#canvas3").fadeOut(0);
				$("#title6").fadeOut(0);
				$("#title22").fadeIn(1000);
			}
			function title9(){
				$("#canvas4").fadeOut(0);
				$("#title7").fadeOut(0);
				$("#title33").fadeIn(1000);
			}
			
			var x = 35;
			var	y = 5; 
			var z = 20;
			var r = 8;
			var r_egg = 23;
			var state = 0; //向下的状态
			var color = "white";
			var color_niezi = "black";
			var color_egg = "lightpink";
			function draw1(){
				var canvas_3 = document.getElementById("canvas3");
				var context_3 = canvas_3.getContext("2d");
				context_3.clearRect(0,0,canvas_3.width,canvas_3.height);
//				context_3.save();
				/**********************第三张画布********************************************************************/	   
				//将酒精灯点亮
	            context_3.beginPath();
				context_3.moveTo(130,60);
				context_3.lineTo(130,80);
				context_3.lineTo(110,80);
				context_3.lineTo(110,100);
				context_3.lineTo(170,100);
				context_3.lineTo(170,80);
				context_3.lineTo(150,80);
				context_3.lineTo(150,60);
				context_3.lineTo(130,60);
	            context_3.strokeStyle = "black";
				context_3.stroke();
				context_3.closePath();
				context_3.beginPath();
	            context_3.arc(135,45,10,0.65*Math.PI,0.3*Math.PI);
	            context_3.strokeStyle = "lightpink";
	            context_3.fillStyle = "lightgoldenrodyellow";
	            context_3.fill();
	            context_3.stroke();
	            context_3.closePath();
				context_3.beginPath();
	            context_3.arc(100,65,40,1.85*Math.PI,0.27*Math.PI);
	            context_3.strokeStyle = "black";
	            context_3.stroke();
	            context_3.closePath();   
	            
	            
	            
	            //锥形瓶
	            context_3.beginPath();
				context_3.arc(245,80,30,1.35*Math.PI,1.65*Math.PI);
				context_3.arc(245,30,30,0.35*Math.PI,0.65*Math.PI);
//				context_3.moveTo(32,40);
//	            context_3.lineTo(20,80);
				context_3.arc(245,145,40,1.25*Math.PI,1.75*Math.PI);
				context_3.arc(245,90,40,0.25*Math.PI,0.75*Math.PI);
				context_3.moveTo(259,55);
				context_3.lineTo(274,119);
				context_3.strokeStyle = "black";
	            context_3.stroke();
	            context_3.closePath();
	            
	            //用镊子夹棉花去蘸酒精
	            context_3.beginPath();
	            context_3.moveTo(20,70);
	            context_3.lineTo(27,75);
	            context_3.lineTo(27,120);
	            context_3.lineTo(67,120);
	            context_3.lineTo(67,75);
	            context_3.lineTo(74,70);
	            context_3.lineTo(20,70);
	            context_3.stroke();
	            context_3.closePath();
	            context_3.beginPath();
	            context_3.moveTo(27,105);
	            context_3.lineTo(67,105);
	            context_3.lineTo(67,120);
	            context_3.lineTo(27,120);
	            context_3.lineTo(27,105);
	            canvas_3.strokeStyle = "black";
	            context_3.fillStyle = "lightblue";
	            context_3.fill();
	            context_3.stroke();
	            context_3.closePath();
	            context_3.beginPath();
	            context_3.moveTo(40,50);
	            context_3.lineTo(60,5);
	            context_3.closePath();
	            
				
				
				//镊子夹着棉花
	            context_3.beginPath();
	            context_3.moveTo(x,y+45);
	            context_3.lineTo(x+20,y);
	            context_3.strokeStyle = color_niezi;
	            context_3.stroke();
	            context_3.closePath();
	            
	            context_3.beginPath();
	            context_3.arc(x+10,y+35,r,0.75*Math.PI,0.25*Math.PI);
				context_3.arc(x+20,y+48,r,1.25*Math.PI,0.75*Math.PI);
				context_3.arc(x+5,y+50,r,0.25*Math.PI,1.75*Math.PI);
				context_3.strokeStyle = color;
	            context_3.fillStyle = color;
	            context_3.fill();
	            context_3.stroke();
	            context_3.closePath();
	            
	            context_3.beginPath();
	            context_3.moveTo(x+20,y);
	            context_3.lineTo(x+20,y+50);
				context_3.strokeStyle = color_niezi;
	            context_3.stroke();
	            context_3.closePath();
	            
	            
	             //鸡蛋
	            context_3.beginPath();
	            context_3.arc(250,z,r_egg,0.5*Math.PI,1.35*Math.PI);
	            context_3.arc(240,z+1,r_egg,1.55*Math.PI,0.37*Math.PI);
	            context_3.strokeStyle = color_egg;
	            context_3.fillStyle = color_egg;
	            context_3.fill();
				context_3.stroke();
				context_3.closePath();
	            
	           
				
	            if(state == 0){
					y += 2.5;
				}
				if(y==60){
					state  = 1;		//开始向上运动了 1
					color = "lightblue";
				}
				if(state == 1){
					y -= 2.5;
				}
	            if(y == 0){
					state = 2;		//准备向右移动    2
//					alert(x);  x=35
				}
	            if(state == 2){
	            	x += 5;
	            	y -= 0.5;
	            }
	            if(x == 120){
	            	state = 2.5; //点火这个动作
	            }
	            if(state == 2.5){
	            	x += 1;
	            	y -= 0.1;
	            }
	            if(x == 125){
	            	
	            	state = 3;		//点火，继续向右 3
	            	color = "yellow";
	            }
	            if(state == 3){
	            	x += 15;
	            	y += 0.5;
	            }
	            if(x == 230){
	            	state = 4;		//开始向下扔       4
	            	x += 0.1;
			        color_niezi = "lightpink";
	            }
	            if(state == 4){
	            	y += 5;
	            	r -= 0.5;
	            }
	            if(y == 64.5){
	            	state = 5;		//棉花烧成黑丝   5
	            	x += 0;
	            	y += 0.5;
	            	color = "grey";
	            }
	            if(z == 35){
	            	state = 6;     //鸡蛋放在瓶口,鸡蛋开始变小
//	            	alert(state+" "+z);
	            }
	            if(state == 5){
	            	color_egg = "antiquewhite";
	            	z += 5;
	            }
	            if(r_egg == 17){
	            	state = 7;  //鸡蛋刚好可以通过
	            	z += 5;
	            	r_egg += 0.5;
//	            	alert("egg2 "+r_egg);
	            }
	            if(state == 6){
	            	z += 3;
	            	r_egg -= 1;
//	            	alert("egg "+r_egg);
	            }
	            if(z == 58.2){
	            	state = 8;   //鸡蛋开始掉落了
	            }
	            if(state == 7){
//	            	r_egg += 0.5;
	            	z += 0.2;
//	            	alert(z);
	            }
	            if(state == 8){
	            	r_egg += 0.5;
//	            	alert(r_egg);
	            	z+=6;
	            }
	            if(r_egg == 21.5){
	            	state = 9;		//鸡蛋到了瓶子底部
	            	r_egg += 0;
	            }
	            
			}
			
			var x_egg = 100;
			var y_egg = 37;
			var rr_egg = 30;
			var state_egg = 0;
			var color_line = "cornflowerblue";
			function draw2(){
				var canvas_4 = document.getElementById("canvas4");
				var context_4 = canvas_4.getContext("2d");
				context_4.clearRect(0,0,canvas_4.width,canvas_4.height);
				
				//将酒精灯点亮
	            context_4.beginPath();
				context_4.moveTo(220,60);
				context_4.lineTo(220,80);
				context_4.lineTo(200,80);
				context_4.lineTo(200,100);
				context_4.lineTo(260,100);
				context_4.lineTo(260,80);
				context_4.lineTo(240,80);
				context_4.lineTo(240,60);
				context_4.lineTo(220,60);
	            context_4.strokeStyle = "black";
				context_4.stroke();
				context_4.closePath();
				context_4.beginPath();
	            context_4.arc(219,33,20,0.65*Math.PI,0.3*Math.PI);
	            context_4.strokeStyle = "lightpink";
	            context_4.fillStyle = "lightgoldenrodyellow";
	            context_4.fill();
	            context_4.stroke();
	            context_4.closePath();
				context_4.beginPath();
	            context_4.arc(190,65,40,1.75*Math.PI,0.27*Math.PI);
	            context_4.strokeStyle = "black";
	            context_4.stroke();
	            context_4.closePath();   
	            
	            //画倾斜的锥形瓶
	            context_4.beginPath();
	            context_4.arc(110,58,20,0.6*Math.PI,1.4*Math.PI);
	            context_4.moveTo(103,77);
	            context_4.lineTo(190,63);
	            context_4.arc(200,35,30,0.6*Math.PI,1.4*Math.PI);
	            context_4.arc(180,35,30,1.6*Math.PI,0.4*Math.PI);
	            context_4.moveTo(190,6);
	            context_4.lineTo(100,40);
	            context_4.strokeStyle = "black";
				context_4.stroke();
				context_4.closePath();
				
				//锥形瓶里面的鸡蛋
				context_4.beginPath();
				context_4.arc(x_egg+19,y_egg+3,rr_egg,0*Math.PI,0.7*Math.PI);
				context_4.arc(x_egg+28,y_egg+23,rr_egg,1*Math.PI,1.76*Math.PI);
				context_4.fillStyle = "antiquewhite";
				context_4.strokeStyle = "antiquewhite";
				context_4.fill();
	            context_4.stroke();
	            context_4.closePath();
	            
	            context_4.beginPath();
	            context_4.arc(96,58,20,1.6*Math.PI,0.4*Math.PI);
	            context_4.strokeStyle = "black";
	            context_4.stroke();
	            context_4.closePath();
	            
	            //旋转方向
	            context_4.beginPath();
	            context_4.arc(116,63,45,1.5*Math.PI,0.3*Math.PI);
	            context_4.lineTo(140,85);
	            context_4.moveTo(143,100);
	            context_4.lineTo(163,89);
	            context_4.strokeStyle = color_line;
	            context_4.stroke();
	            context_4.closePath();
	            
	            if(state_egg == 0){
		            x_egg -= 1;
		            rr_egg -= 1;
	           }
//	            alert(rr_egg);
				if(rr_egg == 27){
					state_egg = 1;	//鸡蛋刚好可以出来
				}
				if(state_egg == 1){
					rr_egg += 0;
					x_egg -= 1;
					y_egg += 0.5;
				}
				if(x_egg == 74){
					state_egg = 2;  //鸡蛋出来，开始变大了
					x_egg += 0.5;
				}
				if(state_egg == 2){
					x_egg -= 4;
					y_egg += 0.5;
					rr_egg += 0.5;
				}
				if(rr_egg == 30){
					state_egg = 3;  //鸡蛋完全出来了
					color_line = "lightpink";					
				}
				if(y_egg == 116.5){
					state_egg = 4;  //鸡蛋落地了
				}
				if(state_egg == 3){
					rr_egg += 0;
					y_egg += 5;
//					alert(y_egg);
				}
				if(state_egg == 4){
					y_egg += 0;
				}
			}
			
			function test1(){
				$("#title2").fadeOut(0);
				$("#canvas3").fadeIn(1000);
			}
			
			function drawtest1(){
	            	setInterval(draw1,100);
	        }
			function drawtest2(){
	            	setInterval(draw2,50);
	        }
			
			function test2(){
				$("#title22").fadeOut(0);
				$("#canvas4").fadeIn(1000);
			}
			
			window.onload = function(){
				var canvas_1 = document.getElementById("canvas1");
				var context_1 = canvas_1.getContext("2d");
				var canvas_2 = document.getElementById("canvas2");
				var context_2 = canvas_2.getContext("2d");
				
				//锥形瓶
				context_1.beginPath();
				context_1.arc(45,65,30,1.35*Math.PI,1.65*Math.PI);
				context_1.arc(45,15,30,0.35*Math.PI,0.65*Math.PI);
//				context_1.moveTo(32,40);
//	            context_1.lineTo(20,80);
				context_1.arc(45,130,40,1.25*Math.PI,1.75*Math.PI);
				context_1.arc(45,75,40,0.25*Math.PI,0.75*Math.PI);
				context_1.moveTo(59,40);
				context_1.lineTo(74,104);
	            context_1.stroke();
	            context_1.closePath();
	            
	            //鸡蛋
	            context_1.beginPath();
	            context_1.arc(140,80,25,0.5*Math.PI,1.35*Math.PI);
	            context_1.arc(130,81,25,1.55*Math.PI,0.37*Math.PI);
	            context_1.fillStyle = "antiquewhite";
	            context_1.fill();
				context_1.stroke();
				context_1.closePath();
				
				//酒精灯
				context_1.beginPath();
				context_1.moveTo(210,60);
				context_1.lineTo(210,80);
				context_1.lineTo(190,80);
				context_1.lineTo(190,100);
				context_1.lineTo(250,100);
				context_1.lineTo(250,80);
				context_1.lineTo(230,80);
				context_1.lineTo(230,60);
				context_1.lineTo(210,60);
				context_1.stroke();
				context_1.closePath();
				context_1.beginPath();
	            context_1.arc(180,65,40,1.85*Math.PI,0.27*Math.PI);
	            context_1.stroke();
	            context_1.closePath();
	            
	            //镊子
	            context_2.beginPath();
	            context_2.moveTo(30,60);
	            context_2.lineTo(70,100);
	            context_2.lineTo(50,50);
	            context_2.stroke();
	            context_2.closePath();
	            
	            //棉花
	            context_2.beginPath();
				context_2.arc(120,65,10,0.75*Math.PI,0.25*Math.PI);
				context_2.arc(135,78,10,1.25*Math.PI,0.75*Math.PI);
				context_2.arc(110,80,10,0.25*Math.PI,1.75*Math.PI);
	            context_2.fillStyle = "white";
	            context_2.fill();
	            context_2.stroke();
	            context_2.closePath();
	            
	            //打火机
	            context_2.beginPath();
	            context_2.moveTo(170,50);
	            context_2.lineTo(170,100);
	            context_2.lineTo(190,100);
	            context_2.lineTo(190,60);
	            context_2.lineTo(182,60);
	            context_2.lineTo(182,50);
	            context_2.lineTo(170,50);
	            context_2.stroke();
	            context_2.closePath();
	            context_2.beginPath();
	            context_2.moveTo(182,50);
	            context_2.lineTo(190,50);
	            context_2.lineTo(190,60);
	            context_2.lineTo(182,60)
	            context_2.fillStyle = "gray";
	            context_2.fill();
	            context_2.stroke();
	            context_2.closePath();
	            
	            //酒精
	            context_2.beginPath();
	            context_2.moveTo(220,50);
	            context_2.lineTo(227,55);
	            context_2.lineTo(227,100);
	            context_2.lineTo(267,100);
	            context_2.lineTo(267,55);
	            context_2.lineTo(274,50);
	            context_2.lineTo(220,50);
	            context_2.stroke();
	            context_2.closePath();
	            context_2.beginPath();
	            context_2.moveTo(227,85);
	            context_2.lineTo(267,85);
	            context_2.lineTo(267,100);
	            context_2.lineTo(227,100);
	            context_2.lineTo(227,85);
	            context_2.fillStyle = "lightblue";
	            context_2.fill();
	            context_2.stroke();
	            context_2.closePath();
	            
	            
	            //界面切换 
	            setTimeout("need1()",1000); 
	            setTimeout("need2()",4000);
	            setTimeout("title2()",7000);
	            
	            setTimeout("test1()",8000);
	            setTimeout("drawtest1()",8000);
	            setTimeout("title3()",8000);
	            setTimeout("title4()",13000);
	            setTimeout("title5()",15000);
	            setTimeout("title6()",17500);
	            setTimeout("title8()",18500);
	            
	            setTimeout("test2()",20500);
	            setTimeout("drawtest2()",21000);
	            setTimeout("title7()",21000);
	            
	            setTimeout("title9()",24000);
			}