//运动函数
function move( obj , attr , target , speed ){
	var startVal = parseFloat( getStyle(obj , attr) );
	var onOff = true;
	if ( target < startVal )
	{
		speed=-speed;
		onOff=!onOff;
	}
	var timer = setInterval(function(){
		startVal += speed;
		var x = onOff?startVal>=target:startVal<=target;
		if ( x )
		{
			clearInterval( timer );
			startVal = target;
		};
		obj.style[attr] = startVal + 'px';
	} , 13);
	//获得元素属性
	function getStyle(obj , attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	};
};