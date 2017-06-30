$(function(){
	$(".p1").hover(function(){
		$(".side_l").css("display","block");
	},function(){
		$(".side_l").css("display","none");
	})


	// 侧边栏
	var num = 10;
	detail(num);
	$(".arrow1").click(function(){
		num--;
		detail(num);
	})

	$(".arrow2").click(function(){
		num++
		detail(num);
	})


	$(window).scroll(function(){
		if($(this).scrollTop() >= 730){
			$(".scroll").css("display","block").css("top",$(this).scrollTop());
		}else{
			$(".scroll").css("display","none");
		}
	})

	$(".lihover").hover(function(){
		$(this).css("border","1px solid #ccc").css("position","absolute").css("left","300px");
		$(".phover2").css("display","block")
	},function(){
		$(this).css("border","");
		$(".phover2").css("display","none");
	})

	$(".sale").click(function(){
		$(window).scrollTop(10000);
		return false;
	})
	$(".news").click(function(){
		$(window).scrollTop(700);
		return false;
/*background: url(../image/det.jpg) no-repeat center top;*/
	})


	$(".l4-2").click(function(){
		var sum = $(".l4-1").html();
		sum++;
		$(".l4-1").html(sum);
	})
	$(".l4-3").click(function(){
		var sum = $(".l4-1").html();
		if(sum == 1){
			return;
		}
		sum--;
		$(".l4-1").html(sum);
	})

		$(".detA").mouseover(function(){
			$(".mark").css("display","block");
			$(".b-box").css("display","block");
		})
		$(".detA").mouseout(function(){
			$(".mark").css("display","none");
			$(".b-box").css("display","none");
		})
		$(".detA").mousemove(function(ev){
		var left = ev.pageX - $(".mark").width()/2 -20;
		var top = ev.pageY - $(".mark").height()/2 - 100;
		if(left<=0){
			left = 0;
		}else{
			if (left >= $(".detA").width()- $(".mark").width()) {
				left = $(".detA").width()- $(".mark").width();
			}
		}
		if(top<=0){
			top = 0;
		}else{
			if (top >= $(".detA").height()- $(".mark").height()) {
				top = $(".detA").height()- $(".mark").height();
			}
		}
		$(".mark").css("left",left).css("top",top);
		$(".rel-box").css("left",-3*left).css("top",-3*top);
	})
	





	function detail(n){
		$.ajax({
		type:"GET",
		url:"ser4.json",
		success:function(data){
			var arr = data.ser5;
			var html = '<p class="det5-1">·····大家都在买·····</p>';
			for(var i = 0; i < 2; i++){
				html+='<a href="#" class="det5A" style="background:url('+arr[i+n].image+') no-repeat center center;background-size:cover;"></a><p><a href="#">'+arr[i+n].cost1+'</a><a href="#"  style="text-decoration: line-through;">'+arr[i+n].cost2+'</a></p><p class="lastP"><a href="#">'+arr[i+n].title+'</a></p>'
			}
			$(".det5-top").html(html)
		}
	})
	}
})