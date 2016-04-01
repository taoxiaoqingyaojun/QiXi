var container = $('#content');
var element = container.find(':first');  //就是content-wrap//相对定位
var width = element.children().width();

var page1 ={

		pageScroll:function(delayTime,durationTime,pageNum){

			var dtd = $.Deferred(); //生成deferred对象

		element.css({
		'transition-delay':delayTime,
		'transition-timing-function':'linear',
		'transition-duration':durationTime,
		'transform':'translate3d(' +(-(width * pageNum)) +'px,0px,0px)'
		});

		
		return dtd;
	},

	pageScrollAnimate:function(){

		var dtd = $.Deferred();
		element.animate({
			left:(-width)
		},10000,function(){
			dtd.resolve();
		})

		return dtd;
	}

}

module.exports = page1;