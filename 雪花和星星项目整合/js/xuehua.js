//$(function(){
		//方法二:雪花	
	function Hua(){
		this.xiaxue =$("<div></div>");
		this.xiaxue.addClass("hua");
		this.xiaxue.appendTo("body")
	}
	//用外部原型方法
	Hua.prototype.xia =function(){
//		console.log(1)
	//获取屏幕宽高
		//var xl =Math.random()*($("body").width()-200);
		var hl =Math.random()*($("body").height()-200);
		var xue =this;
		//console.log(xue)
		//var xuehua =this;
		//设置初始值
		$(".hua").css({
			left:Math.random()*($("body").width()-200),
			top:0
		})
	//雪花运动
		var theight =$("body").height()-40
		$(".hua").animate({top:theight},5000,function(){
			xue.xia()
		})
	}
//})
