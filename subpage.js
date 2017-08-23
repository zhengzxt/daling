$(function(){
	var html = "";
	for(var i = 0; i < 40; i++){
		html = html+ '<div class="sbu4-1"><a href="#" class="sub4A" style="background:url(image/sub'+(i+1)+'.jpg) no-repeat center center;background-size: cover"></a><p><span class="span1">￥22.22</span><span class="span2">￥22.22</span></p><p><span><b>6折/</b></span><a href="#">[韩国 · 拉面界的网红] 三养 韩国三养火鸡面140g*5包(140g*5) </a></p><p>0人收藏 | 0人评论</p></div>'
	}
	$(".sub4").html(html);

	$(".sbu4-1").hover(function(){
		$(this).css("box-shadow","-3px 3px 3px 3px #f2f2f2, 3px 3px 3px 3px #f2f2f2, -3px -3px 3px 3px #f2f2f2, 3px -3px 3px 3px #f2f2f2")
	},function(){
		$(this).css("box-shadow","")
	})

	$(".p1").hover(function(){
		$(".side_l").css("display","block");
	},function(){
		$(".side_l").css("display","none");
	})

})