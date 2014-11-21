/**
 *
 *  获取图片
 *
 *
 *
 * 
 */



define(function(require, exports, module){


	var Canvas = {
		init : function(canvas){
			this.canvas = canvas;
			this.context = this.canvas.getContext('2d');
			return this;
		},
		clear : function(){
			this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
		},
		drawImg : function(op){
//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
			var opt = {
				img : null,
				sx : 0, //开始剪切的 x 坐标位置
				sy : 0, //开始剪切的 y 坐标位置
				swidth : 0, //被剪切图像的宽度
				sheight : 0, //被剪切图像的高度
				x : 0, //在画布上放置图像的 x 坐标位置
				y : 0, //在画布上放置图像的 y 坐标位置
				width : 0, //要使用的图像的宽度。（伸展或缩小图像）
				height : 0  //要使用的图像的高度。（伸展或缩小图像）
			}

			$.extend(opt,op);
			$.extend(this,opt);
			this.swidth = this.swidth == 0 ? this.img.width : this.swidth;
			this.sheight = this.sheight == 0 ? this.img.height : this.sheight;

			this.width = this.width == 0 ? this.img.width : this.width;
			this.height = this.height == 0 ? this.img.height : this.height;



			this.context.drawImage(op.img,this.sx,this.sy,this.swidth,this.sheight,this.x,this.y,this.width,this.height);
		},
		drawfile : function(msg){
			this.context.font="20px Arial";
			var gradient=this.context.createLinearGradient(0,0,this.canvas.width,0);
				gradient.addColorStop("0","magenta");
				gradient.addColorStop("0.1","blue");
				gradient.addColorStop("0.3","red");
				// 用渐变填色
				this.context.fillStyle=gradient;
			// context.fillText(text,x,y,maxWidth);
			this.context.fillText(msg,0,40)
		}
	}
	

	return Canvas;

})