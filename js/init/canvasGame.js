/**
 *
 *  canvas  game  main
 *
 *
 *
 * 
 */



define(function(require, exports, module){


	var canvas = $('#canvasGame')[0];
	canvas.width = $(document).width();
	canvas.height = $(document).height() - 30 ;
	

	// 图片获取类，
	var getImg = require('common/getImg');
	var images = ['images/loading.jpg','http://img.hackhome.com/img/201210/2012102961341277.png','http://pic002.cnblogs.com/images/2010/163061/2010112915370777.jpg','http://img.265g.com/userup/1205/201205030955235112.jpg','http://img.265g.com/userup/1205/201205170956445217.jpg','http://www.uc129.com/uploads/allimg/140108/1-14010P94629.jpg'];
	var len = images.length;
	getImg.init(images);


	// 绘制
	var Canvas = require('common/Canvas');
	Canvas.init(canvas)

	$(getImg).on('onload',function(i,data){
		// console.log(data.index)
		Canvas.clear();
		Canvas.drawImg({
			img:this.imgArr[0],
			width : canvas.width ,
			height : canvas.height
		});
		
		Canvas.drawfile('已加载' + (data.index/len * 100) + '%')

	})
	





	
	// // 动画载入类
	// 绘图类
	// 定时器类
	// 场景布置
	// 人物类
	

	//  背景布置 
	



})