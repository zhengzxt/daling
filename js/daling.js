$(function(){
	$(".ban_nav ul li img").css("width",$(window).width()+40);
	 
	var timer = null;
	var  iNow = 0;
	var oBtn = $("ol").find("li");
	timer = setInterval(tab,3000);
	function tab(){
		iNow++;
		if(iNow == oBtn.size()){
			oBtn.attr("class","");
			oBtn.eq(0).attr("class","active");
		}else{
			oBtn.attr("class","");
			oBtn.eq(iNow).attr("class","active");
		}

		$(".ban_nav").find("ul").stop().animate({left:-iNow*($(window).width()+40)},function(){
			if(iNow == oBtn.size()){
				iNow = 0;
				$(".ban_nav").find("ul").css("left",  0);
			}
		})
		
	}
	oBtn.click(function(){
		iNow = $(this).index() -1;
		tab();
	})

	$(".ban_nav").hover(function(){
		clearInterval(timer);
		},function(){
		timer = setInterval(tab,3000);
	});

	$(".ser_1").find("a").hover(function(){
		$(this).css("box-shadow","-3px 3px 3px 3px #e5e5e5, 3px 3px 3px 3px #e5e5e5")
		},function(){
			$(this).css("box-shadow","")
	})




	//ser2
	$.ajax({
		type:"GET",
		url:"daling.json",
		success:function(data){
			var arr = data;
			var html = "";
			for(var i = 0; i < 4; i++){
				html = html + '<div class="ser2_1top"><a href="#"><div style = "background: url(image/service2_'+(i+1)+'.jpg) center center no-repeat; background-size: cover;"></div></a><p><span class="span1">￥'+arr[i].cost1+'</span><span class="span2">￥'+arr[i].cost2+'</span><span class="span3">64人收藏</span></p><p class="p_last">'+arr[i].title+'</p></div>';
			}
			$(".ser2_1").html(html);
		}
	})
	$(".ser2_1").delegate(".ser2_1top","mouseenter",function(){
		$("<div>").appendTo($(this)).attr("class", "shopCar shopCar1").css("top","236px").html("加入购物车<span>").attr("name", $(this).index());
			
	})
	$(".ser2_1").delegate(".ser2_1top","mouseleave",function(){
			$(".shopCar1").remove();
		})

	$(".ser2_2").find(".div").hover(function(){
		$("<div>").appendTo($(this)).attr("class", "shopCar shopCar1").css("top","210px").css("width","267px").html("加入购物车<span>").attr("name",$(this).index()+4);
	},function(){
		$(".shopCar1").remove();
	})


	//ser3
	for(var i = 0; i < 5; i++){
		$("<a>").appendTo($(".ser3_1")).css("background","url(image/service3_"+(i+1)+".jpg) no-repeat center center").css("background-size","cover");
	}
	$(".ser3_1").delegate("a","mouseover",function(){
		$(this).css("box-shadow","5px 0px 1px 0px #e5e5e5,-5px 0px 1px 0px #e5e5e5");
	})
	$(".ser3_1").delegate("a","mouseout",function(){
		$(this).css("box-shadow","");
	})






	//ser4
	$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser4;
			var html = "";
			for(var i = 0; i < 6; i++){
				html = html + '<div class="ser4_1top"><a href="#"><div class="ser4_a" style = "background: url('+arr[i].image+') center center no-repeat; background-size: cover;"></div></a><p><span class="span1">￥'+arr[i].cost1+'</span><span class="span2">￥'+arr[i].cost2+'</span></p><p class="p_last"><a href="#">'+arr[i].title+'</a></p><a href="#" class="a_bot"><div class="speck" style="background:url('+arr[i].image2+') no-repeat center center;background-size:cover"></div><div class="speck2"><p>'+arr[i].speck1+'</p><p>'+arr[i].speck2+'</p><p>>></p></div></a></div>';
			}
			$(".ser4_1").find(".content").html(html);
		}

	})

	$(".content").delegate(".ser4_1top","mouseover",function(){
			$(this).css("box-shadow","-3px -3px 3px 3px #e5e5e5, 3px 3px 3px 3px #e5e5e5, -3px 3px 3px 3px #e5e5e5,3px -3px 3px 3px #e5e5e5");
		})
	$(".content").delegate(".ser4_1top","mouseout",function(){
			$(this).css("box-shadow","");
		})

	$(".buttonP").find("span").click(function(){
		$(this).siblings().attr("class","");
		$(this).attr("class","active");
		
		var num = $(this).index();
		num = num % 2;
		$.ajax({
			type:"GET",
			url:"ser4.json",
			success:function(data){
				var arr = data.ser4;
				var html = "";
				for(var i = 0; i < 6; i++){
					html = html + '<div class="ser4_1top"><a href="#"><div class="ser4_a" style = "background: url('+arr[(i+num*6)].image+') center center no-repeat; background-size: cover;"></div></a><p><span class="span1">￥'+arr[i].cost1+'</span><span class="span2">￥'+arr[i].cost2+'</span></p><p class="p_last"><a href="#">'+arr[i].title+'</a></p><a href="#" class="a_bot"><div class="speck" style="background:url('+arr[i].image2+') no-repeat center center;background-size:cover"></div><div class="speck2"><p>'+arr[i].speck1+'</p><p>'+arr[i].speck2+'</p><p>>></p></div></a></div>';
				}
				$(".ser4_1").find(".content").html(html);
			}

		})
	})


	
	$(".ser5").find("ul").delegate("li:eq(0)","mouseover",function(){
		$(this).next().attr("class","overli");
	});
	$(".ser5").delegate(".overli","mouseout",function(){
		$(this).attr("class","outli");
	});
	$(".ser5").delegate(".outli","mouseover",function(){
		$(this).siblings(".overli").attr("class","outli")
		$(this).attr("class","overli");

	});
	$(".ser5").delegate("ul","mouseleave",function(){
		$(this).find("li").eq(1).attr("class","overli");
	});

	$(window).load(function(){
		for(var i = 0; i<3;i++){
			$(".ser5").find("ul").eq(i).find(".redtop").eq(3).attr("class","graytop")
			$(".ser5").find("ul").eq(i).find(".redtop").eq(3).attr("class","graytop")
			$(".ser5").find("ul").eq(i).find(".redtop").eq(3).attr("class","graytop")
		}

		var num = 21600;
		setInterval(function(){
			num--;
			var hour = parseInt(num / 3600);
			var minute = parseInt(num /60 % 60);
			var second = parseInt(num % 60);
			if(second < 10){
				second = "0" + second;
			}
			$(".clock").html("距闪购结束:" + hour + ":"+ minute +":"+ second);
		},1000)

		

	})
	

	//ser5
	$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser5;
			for(var j = 0; j<3;j++){
				var html = '<li class="headLI">极致美护</li><li class="overli"><p ><span class="redtop">TOP1</span></p><div class="bot"><a href="#" class="overA" style="background:url('+arr[j*6].image+') no-repeat center center;background-size:cover"></a><p class="outp"><a href="#">'+arr[0].title+'</a></p><p><span class="span1">'+arr[0].cost1+'</span><span class="span2">'+arr[0].cost2+'</span></p><span>'+arr[0].speck1+'</span><br/><a href="#">'+arr[0].speck2+'</a></div></li>';
				for(var i = 0; i < 5; i++){
					html = html + '<li class="outli"><p ><span class="redtop">TOP'+(i+2)+'</span></p><div class="bot"><a href="#" class="overA"  style="background:url('+arr[(i+1)*(j+1)].image+') no-repeat center center;background-size:cover"></a><p class="outp"><a href="#">'+arr[(i+1)*(j+1)].title+'</a></p><p><span class="span1">'+arr[(i+1)*(j+1)].cost1+'</span><span class="span2">'+arr[(i+1)*(j+1)].cost2+'</span></p><span>'+arr[(i+1)*(j+1)].speck1+'</span><br/><a href="#">'+arr[(i+1)*(j+1)].speck2+'</a></div></li>'
				}
				$(".ser5_1").find("ul").eq(j).html(html);
			}
			
		}

	})


	//ser6
	$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser4;
			var html = "";
			for(var i = 0; i < 6; i++){
				html = html + '<div class="ser4_1top"><a href="#"><div class="ser4_a" style = "background: url('+arr[i+6].image+') center center no-repeat; background-size: cover;"></div></a><p><span class="span1">￥'+arr[i].cost1+'</span><span class="span2">￥'+arr[i].cost2+'</span></p><p class="p_last"><a href="#">'+arr[i].title+'</a></p><a href="#" class="a_bot"><div class="speck2"><p>'+arr[i].speck1+'</p><p>  '+arr[i].speck2+'</p></div></a></div>';
			}
			$(".ser6_1").find(".content").html(html);
		}

	})

	//ser7
		
	$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser7;
			var html = "";
			for(var i = 0; i < 4; i++){
				html = html + '<div class="ser7_left"><div class="ser7_l1"><a href="#" style="background:url('+arr[i].image+') no-repeat center center;background-size:cover;"></a></div><div class="ser7_l2"><p class="clock">距闪购结束:6:00:00</p><p class="discount"><span>'+arr[i].title1+'</span><a href="#">'+arr[i].title2+'</a></p><div class="introduce">'+arr[i].title4+'</div><p><span class="span1">'+arr[i].cost1+'</span><span class="span2">'+arr[i].cost2+'</span></p><p class="shop"><a href="#">立即抢购</a><span>'+arr[i].title3+'</span></p></div></div>'
			}
			html = html + '<p class="more">点击查看更多</p>'
			$(".ser7_l").html(html);
		}

	})

	$(".ser7").delegate(".more","click",function(){
		$(this).css("display","none");
		$.ajax({
			type:"GET",
			url:"ser4.json",
			success:function(data){
				var arr = data.ser7;
				var html = "";
				for(var i = 0; i < 18; i++){
					html = html + '<div class="ser7_left"><div class="ser7_l1"><a href="#" style="background:url('+arr[i%9].image+') no-repeat center center;background-size:cover;"></a></div><div class="ser7_l2"><p class="clock">距闪购结束:6:00:00</p><p class="discount"><span>'+arr[i%9].title1+'</span><a href="#">'+arr[i%9].title2+'</a></p><div class="introduce">'+arr[i%9].title4+'</div><p><span class="span1">'+arr[i%9].cost1+'</span><span class="span2">'+arr[i%9].cost2+'</span></p><p class="shop"><a href="#">立即抢购</a><span>'+arr[i%9].title3+'</span></p></div></div>'
				}
				$(".ser7_l").html(html);
			}

		})
	})

	//ser7-left
	$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser8;
			var html = "";
			for(var i = 0; i < 5; i++){
				html = html + '<div class="ser7_r1"><div class="left"><a href="#" class="r-l" style="background:url('+arr[i].image+') no-repeat center center; background-size:cover;"></a></div><div class="r-r"><p class="p1"> 3.5折 新水份缘保湿舒缓晚霜(15ml)</p><p class="p2">“夜间是尤佳的修护时间，千万不要错过！兰蔻家经典的补水利器！天然植物配方，蕴含第</p><p><span class="collect"></span><a href="#">收藏</a><a href="#" class="shopCar">加入购物车</a></p></div></div>'
			}
			
			$(".ser7_con").html(html);
		}

	})
	$(".ser7").delegate(".ser7_left","mouseover",function(){
			$(this).css("box-shadow","-3px -3px 3px 3px #e5e5e5, 3px 3px 3px 3px #e5e5e5, -3px 3px 3px 3px #e5e5e5,3px -3px 3px 3px #e5e5e5");
		});
		$(".ser7").delegate(".ser7_left","mouseout",function(){
			$(this).css("box-shadow","");
		});
	$(".ser7").delegate(".ser7_r1","mouseover",function(){
			$(this).css("box-shadow","-3px -3px 3px 3px #e5e5e5, 3px 3px 3px 3px #e5e5e5, -3px 3px 3px 3px #e5e5e5,3px -3px 3px 3px #e5e5e5");
		})
		$(".ser7").delegate(".ser7_r1","mouseout",function(){
			$(this).css("box-shadow","");
		})

		$(".arrow").click(function(){
			$.ajax({
				type:"GET",
				url:"ser4.json",
				success:function(data){
					var arr = data.ser8;
					var html = "";
					var num = Math.floor(Math.random()*6)
					for(var i = 0; i < 5; i++){
						html = html + '<div class="ser7_r1"><div class="left"><a href="#" class="r-l" style="background:url('+arr[i+num].image+') no-repeat center center; background-size:cover;"></a></div><div class="r-r"><p class="p1"> 3.5折 新水份缘保湿舒缓晚霜(15ml)</p><p class="p2">“夜间是尤佳的修护时间，千万不要错过！兰蔻家经典的补水利器！天然植物配方，蕴含第</p><p><span class="collect"></span><a href="#">收藏</a><a href="car.html" class="shopCar">加入购物车</a></p></div></div>'
					}
					
					$(".ser7_con").html(html);
				}

			})
		})


})

