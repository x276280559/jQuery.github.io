

function DragBox2(BoxId){
	//console.log(1)
	DragBox1.call(this,BoxId);//克隆继承属性
}
DragBox2.prototype = new DragBox1();
//console.log(DragBox2.prototype)    进来了
DragBox2.prototype.move = function(l,t){ //克隆继承方法
	
	//让盒子不要跑出去，设if判断
//	l < 0 ?l=0:;       // 为什么三目判断没有作用，是写错了，还是？
//	t < 0 ?t=0:;
//console.log(l)
//console.log(t)

	if(l<0){
		l=0
	};
	if(t<0){
		t=0
	};
	
	 this.ele.css({
	 	left:l,
	 	top:t
	 })
}
