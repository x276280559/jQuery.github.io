

function DragBox1 (BoxId){
	this.ele =$(BoxId);
	//console.log(this)
}
//开始方法
DragBox1.prototype.start = function(){
	var self=this
	this.ele.mousedown(function(e){  //点击按下事件
		var l =e.offsetX;
		var t =e.offsetY;
		  //点击移动事件
		$(document).mousemove(function(e){
			var left = e.clientX-l; //获取点击的位置
			var top = e.clientY-t;
			
			self.move(left,top)
		})
		$(document).mouseup(function(){
			self.up()
		})
	})
}
//移动方法
DragBox1.prototype.move = function(l,t){
	this.ele.css({
		left:l,
		top:t
	})
}
 //移动停止方法
DragBox1.prototype.up = function(){
	$(document).off("mousemove mouseup")
}