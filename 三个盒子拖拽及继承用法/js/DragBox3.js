

function DragBox3(BoxId){
	//console.log(1)
	DragBox2.call(this,BoxId);//克隆继承属性
}
DragBox3.prototype = DragBox2.prototype;

//var DragBox3.prototype= "";
//for (var k in DragBox2.prototype) {
//	DragBox3.prototype[k] = DragBox2.prototype[k]
//}

DragBox3.prototype.move =function(l,t){   //思路：不用写判断，达到一样的效果
	if(l<0){
		l=0
	};
	if(t<0){
		t=0
	};
	
	 this.ele.css({
	 	left:l,
	 	top:t
	 });
	 
	 //添加到box3上去
	 this.ele.html("left:"+l+"px <br> top:"+t+"px");
}
