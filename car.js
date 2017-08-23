$(function(){

	relCar();

	$(".car4").delegate("input","click",function(){
		$(".amount").html(amount().sum);
		$(".sum1").html(amount().sum1);
	})

	$(".car_2").delegate("input","click",function(){
		if($(this).attr("checked")){
			$(".car2").find("input").attr("checked","checked");
		}
		$(".amount").html(amount().sum);
		$(".sum1").html(amount().sum1);
	})



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
				$(".amount").html(amount().sum);
				$(".sum1").html(amount().sum1);
			}
		})

		var first= $.cookie("daling") == "[]" ? true : false;
		var first1= $.cookie("daling") == null ? true : false;
		if(first || first1){
			$(".car4").css("display","none");
			$(".car3").css("display","flex");
		}else{
			$(".car3").css("display","none");
			$(".car4").css("display","block");
		}

	}

})