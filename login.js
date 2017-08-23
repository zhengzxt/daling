$(function(){
			$("input").focus(function(){
				$(this).css("border-color","#94d469");
				var string = $(this).prev().css("background-position");
				var newString = string.replace(/px/g,"");
				var arr = newString.split(" ");
				$(this).prev().css("border-color","#94d469").css("background-position","10px "+arr[1]+"px");
			})
			$("input").blur(function(){
				$(this).css("border-color","#ccc");
				var string = $(this).prev().css("background-position");
				var newString = string.replace(/px/g,"");
				var arr = newString.split(" ");
				$(this).prev().css("border-color","#ccc").css("background-position","-20px "+arr[1]+"px");
			})

			$(".p2").find("a:eq(0)").click(function(){
				$("#register").css("display","none");
				$("#enter").css("display","block");
				$(this).css("background-image","url(image/login_arr.png)");
				$(this).next().css("background-image","url()");
			})
			$(".p2").find("a:eq(1)").click(function(){
				$("#register").css("display","block");
				$("#enter").css("display","none");
				$(this).css("background-image","url(image/login_arr.png)");
				$(this).prev().css("background-image","url()");
			})
			$("#agree").click(function(){
				if($(this).attr("checked") == "checked"){
					$("#reset1").css("background-color","#e14958").removeAttr("disabled");
				}else{
					$("#reset1").css("background-color","#ccc").attr("disabled","disabled")
				}
				
			})

			$("#phone").blur(function(){
				phoNum("#phone");
			})
			$("#phone1").blur(function(){
				phoNum("#phone1");
			})

		})
function phoNum(id){
	var string = $(id).val();
	var box = /\D/ig;
	if(string.length == 11 && !box.test(string)){
		creaAlert(true);
	}else{
		creaAlert(false);
	}
}
var creaAlert = (function(istrue){
	var oDiv = null;
	var creaDiv = function(istrue){
		if(!oDiv){
			oDiv = document.createElement("div");
			oDiv.innerHTML = "请输入正确的手机号";
			oDiv.id = "judgePho";
			$(".login").append(oDiv);
			oDiv1 = document.createElement("div");
			oDiv1.id = "triangle";
			$(".login").append(oDiv1);
		}
		if(istrue){
			oDiv=null;
			$("#triangle").remove();
			$("#judgePho").remove();
		}
	}

	return creaDiv;
})()

