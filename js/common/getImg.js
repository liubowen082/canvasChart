/**
 *
 *  获取图片
 *
 *
 *
 * 
 */



define(function(require, exports, module){


	var getImg = {
		imgArr : [],
		init : function(loadImgs){
			this.loadImgs = loadImgs;
			this.len = this.loadImgs.length;
			this.load();
		},
		load : function(){

			var img = new Image ();
			img.src = getImg.loadImgs[0];
			var that = this;
			img.onload = function(){
				
				if(img.complete == true){
					that.imgArr.push(this);
					that.loadImgs.shift();

					// getImg.loadImgs.length > 0 ? getImg.load() : $(getImg).trigger('onload');

					if(getImg.loadImgs.length > 0){
						getImg.load();
						$(getImg).trigger('onload',{
							img : this,
							index : getImg.len - getImg.loadImgs.length
						})
					}else{
						$(getImg).trigger('onload',{
							img : this,
							index : getImg.len - getImg.loadImgs.length
						})
						$(getImg).trigger('onloaded')
					}
				}

			}


		}
	}
	

	return getImg;

})