$(function(){

	//nav
	$(".QR").hover(function(){
		var oDiv = document.createElement("div");
		var oDiv1 = document.createElement("div");
		oDiv1.id = "triangle";
		var oImg = document.createElement("img");
		oImg.src = "image/cod_da.png";
		oDiv.style.border = "10px solid #f2f2f2";
		oDiv.style.height = "91px"
		oDiv.appendChild(oImg);
		oDiv.appendChild(oDiv1)
		$(".QR").append(oDiv);
		},function(){
		$(".QR").find("div").remove();
	})


	//aside

	$(".side").css("height",$(window).height());
	$(document).scroll(function(){
		$(".side").css("top",$(this).scrollTop());
	})
	$(document).resize(function(){
		$(".side").css("height",$(window).height());
	})

	$(".mouseover").hover(function(){
		$(this).find(".side_cen").css("display","block");
		$(this).css("border-bottom-color","black").css("border-top-color","black").css("border-right-color","white").css("width","200px").css("background-color","white")
	},function(){
		$(this).find(".side_cen").css("display","none");
		$(this).css("border-color","#e8e3eb").css("width","199px").css("background-color","#e8e3eb")
	})
	//side
	$(".bg-1,.bg-2").hover(function(){
		$(this).css("background-color","#e14958").find("span").css("display","block")
	},function(){
		$(this).css("background-color","black").find("span").css("display","none")
	})
	
	$(window).scroll(function(){
		if($(window).scrollTop() > $(window).width()){
			$(".bg-4").css("display","block")
		}else{
			$(".bg-4").css("display","none")
		}
	})
	$(".bg-4").click(function(){
		$(window).scrollTop(0);
	})
	$(".carp").hover(function(){
		$(this).css("background-color","#e14958")
	},function(){
		$(this).css("background-color","")
	})


	//购物车
	$(".ser2").delegate(".shopCar","click",function(e){
		var first = $.cookie("daling") == null ? true : false;
		if(first){
			$.cookie("daling","[{name:"+$(this).attr("name")+",num:1}]",{expirse:7});
		}else{
			var cookieStr = $.cookie("daling");
			var arr = eval(cookieStr);
			var istrue = false
			for(var i in arr){
				if(arr[i].name == $(this).attr("name")){
					(arr[i].num)++;
					istrue = true;
				}
			}

			if(!istrue){
				var obj = {name:$(this).attr("name"),num:1}
				arr.push(obj)
			}

			var str = JSON.stringify(arr);
			$.cookie("daling",str,{expirse:7})
		}
		sc_car();
		shopCar();
		var num = $(this).attr("name");
		var _this = $(this)
		$.ajax({
			type:"GET",
			url:"daling.json",
			success:function(data){
				var arr = data;
				var oDiv = $("<div>");
				oDiv.attr("class","para").css("background","url("+arr[num].image+") no-repeat center center").css("background-size","cover").appendTo(_this);
				var offsetX =1242 - e.clientX;
				var offsetY =210 - e.clientY;
				//抛物线
				var bool = new Parabola({
					el: ".para",
					offset:[offsetX,offsetY],
					curvature: 0.001,
					duration: 1000,
					callback: function(){
						oDiv.remove();
					},
					
				})
				bool.start();
				$(".para").stop().animate({"width":"30px","height":"30px"},500)


			}
		})

	})
	sc_car();

	$(".carp").toggle(function(){
		shopCar();
		$('.side').css("right","280px");

	},function(){
		$('.side').css("right","0px");
	})

	$(".side").delegate(".carhead span","click",function(){
		$('.side').css("right","0px");
	})


	$("body").delegate(".add","click",function(){
		add_car($(this).attr("name"));
		sc_car();
		shopCar();
		relCar();
		$(".amount").html(amount().sum);
		$(".sum1").html(amount().sum1);
	})

	$("body").delegate(".cel","click",function(){
		cel_car($(this).attr("name"));
		sc_car();
		shopCar();
		relCar();
		$(".amount").html(amount().sum);
		$(".sum1").html(amount().sum1);
	})

	$("body").delegate(".del","click",function(){
		del_car($(this).attr("name"));
		sc_car();
		shopCar();
		$(".amount").html(amount().sum);
		$(".sum1").html(amount().sum1);
		
	})

	function sc_car(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		var sum = 0; //用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}

		$(".count").html(sum);
	}

	function add_car(name){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].name == name){
				(arr[i].num)++;
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("daling",str,{expirse:7});
	}

	function cel_car(name){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].name == name){
				if((arr[i].num)==1){
					return
				}else{
					(arr[i].num)--;
				}
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("daling",str,{expirse:7})
	}

	function del_car(name){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].name == name){
				arr.splice(i,1);
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("daling",str,{expirse:7})
	}



	function shopCar(){
		$.ajax({
		type:"GET",
		url:"daling.json",
		success:function(data){
			var arr = data;
			var sum = 0;
			var string = eval($.cookie("daling"));
			var html ='<p class="carhead">我的购物车<span>X</span></p>';
				
			var first = $.cookie("daling") == "[]" ? true : false;
			var first1 = $.cookie("daling") == null ? true : false;
				if(first || first1){
					html = '<img src="image/cart_mini_empty.png" style="margin:200px auto;display:block"/>'
				}else{
					for(var i = 0; i < string.length; i++){
					
					html = html + '<ul><li class="li1"><a href="#" style="background:url('+arr[string[i].name].image +') no-repeat center center;background-size:cover"></a></li><li class="li2"><p>[达令出品]</p><p>'+arr[string[i].name].title+'</p><p><span class="cel" name="'+string[i].name+'">-</span><span>'+string[i].num+'</span><span class="add" name="'+string[i].name+'">+</span></p></li><li class="li3"><p style="color:red;">￥'+(arr[string[i].name].cost1)*(string[i].num)+'</p><p class="del" name="'+string[i].name+'">删除</p></li></ul>'

					sum += (arr[string[i].name].cost1)*(string[i].num)

				}
				}
				

				$(".sidecar").html(html);
				sum = "￥"+sum;
				$(".sum").html(sum);

				
				
		}
	})
	}


	function relCar(){
		$.ajax({
			type:"GET",
			url:"daling.json",
			success:function(data){
				var arr = eval($.cookie("daling"));
				var html = "";
				for(var i = 0; i < arr.length; i++){
					html+='<ul class="car2"><li class="l1"><input type="checkbox" checked="" /><a href="#" style="background:url('+data[arr[i].name].image+') no-repeat center center;background-size:cover;"></a></li><li class="l2"><a href="#">'+data[arr[i].name].title+'</a></li><li class="l3">￥'+data[arr[i].name].cost1+'</li><li class="l4"><span class="cel" name='+arr[i].name+'>-</span><span class="count1">'+arr[i].num+'</span><span class="add" name='+arr[i].name+'>+</span></li><li class="l5">￥'+arr[i].num*data[arr[i].name].cost1+'</li><li class="del" name='+arr[i].name+'>删除</li></ul>'
				}
				$(".car4").html(html);
			}
		})

		var first= $.cookie("daling") == "[]" ? true : false;
		var first1 = $.cookie("daling") == null ? true : false;
		if(first || first){
			$(".car4").css("display","none");
			$(".car3").css("display","flex");
		}else{
			$(".car3").css("display","none");
			$(".car4").css("display","block");
		}
	}




	function amount(){
		var length = $(".car4").find("input").size();
		var sum = 0;
		var sum1 = 0;
		for(var i = 0; i<length; i++){
			if($(".car4").find("input").eq(i).attr("checked")){
				var str = $(".car4").find(".car2").eq(i).find(".l5").html();
				var newstr = str.replace("￥","");
				sum+=Number(newstr)

				var num = $(".car4").find(".car2").eq(i).find(".count1").html();
				sum1 +=Number(num)
			}else{
				$(".car5").find("input").removeAttr("checked")
				$(".car_2").find("input").removeAttr("checked")
			}
		}
		
		return {sum:sum,sum1:sum1};
		
	}


	$(".ser2").delegate(".l5-2","click",function(e){
		var sum = Number($(".l4-1").html());
		var first = $.cookie("daling") == null ? true : false;
		if(first){
			$.cookie("daling","[{name:"+$(this).attr("name")+",num:"+sum+"}]",{expirse:7});
		}else{
			var cookieStr = $.cookie("daling");
			var arr = eval(cookieStr);
			var istrue = false
			for(var i in arr){
				if(arr[i].name == $(this).attr("name")){
					(arr[i].num)=(arr[i].num) + sum;
					istrue = true;
				}
			}

			if(!istrue){
				var obj = {name:$(this).attr("name"),num:sum}
				arr.push(obj)
			}

			var str = JSON.stringify(arr);
			$.cookie("daling",str,{expirse:7})
		}
		sc_car();
		shopCar();
		var num = $(this).attr("name");
		var _this = $(this)
		$.ajax({
			type:"GET",
			url:"daling.json",
			success:function(data){
				var arr = data;
				var oDiv = $("<div>");
				oDiv.attr("class","para").css("background","url("+arr[num].image+") no-repeat center center").css("background-size","cover").appendTo(_this);
				var offsetX =1242 - e.clientX;
				var offsetY =210 - e.clientY;
				//抛物线
				var bool = new Parabola({
					el: ".para",
					offset:[offsetX,offsetY],
					curvature: 0.001,
					duration: 1000,
					callback: function(){
						oDiv.remove();
					},
					stepcallback:function(){
						$(".para").css("background-size","cover")
					}
				})
				bool.start();
				$(".para").stop().animate({"width":"30px","height":"30px"},500)
			}
		})

	})
	
	

	
})




