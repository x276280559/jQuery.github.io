//星星
//$(function(){
		function Fly(){
		//属性，创建节点
		
		this.ele=$("<div></div>");
		//console.log(this.ele)
		this.ele.addClass("fly");
		this.ele.appendTo("body");
		
		//方法 1  小鸟飞：获取随机位置--然后运动--让他继续飞
		this.move =function(){
			var l = Math.random()*($("body").width()-300)
			//console.log(l)
			var t = Math.random()*($("body").width()-800)
			//调用运动框架
			var er=this
			$(".fly").animate({left:l,top:t},1000,function(){
				//console.log(this)
				er.move()
			})
		}
	}
//})
