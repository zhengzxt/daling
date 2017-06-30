function func(data){
		alert(1);
		var arr = data;
		document.title = arr[0].title;
		}


		$(document).click(function(){
		 var oScript = $("<script>");
		 oScript.appendTo($("body"));
		 oScript.attr("src","daling.json");
		})