
var page2 = {

	cloudRun:function(){

		$('.cloud2').addClass('cloudRun');
		$('.cloud1').addClass('cloudRun');
	},

	/*开左边门*/
	openLeftDoor:function(){

		var dtd = $.Deferred();

		$('.door-left').animate({
			left:'-50%'
		},5000,function(){

			dtd.resolve();
		});

		return dtd;
	},

	/*关左边的们*/
	closeLeftDoor:function(){

		var dtd = $.Deferred();

		$('.door-left').animate({
			left:'0%'
		},5000,function(){
			dtd.resolve();
		})

		return dtd;
	},

	/*开右边的们*/
	openRightDoor:function(){
		var dtd = $.Deferred();
		$('.door-right').animate({
			left:'100%'
		},5000,function(){

				dtd.resolve();
		})

		return dtd;
	},

	/*关右边的门*/
	closeRightDoor:function(){

		var dtd = $.Deferred();
		$('.door-right').animate({
			left:'50%'
		},5000,function(){

			dtd.resolve();
		})

		return dtd;
	}
}

module.exports = page2;