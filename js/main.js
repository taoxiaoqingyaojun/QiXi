require('./frame')();
require('./boy')();
var page1 = require('./page1');
var page2 = require('./page2');
var boys = require('./boys');

$('.baidong').click(function(){

	boys.boyStartVibrate();
})

$('.zanting').click(function(){

	boys.boyPasueVibrate();
})

$('.chongxing').click(function(){
	boys.boyRestartVibrate();
})

$('.walk').click(function(){

	boys.boyStartRun('10s');
})

$('.gundong').click(function(){

		page1.pageScroll(0,'10s',1);
})

/*boys.boyStartVibrate();
boys.boyStartRun('10s');
page1.pageScroll('10s','10s',1).then(function(){

		window.alert("我是姚俊");

});*/

boys.boyStartVibrate();


boys.boyStartRun('10s',0);

/*	page1.pageScrollAnimate().then(function(){


});
*/

page1.pageScroll(0,0,2);



$('.sun').addClass('sunRun');

page2.cloudRun();

/*setTimeout(function(){

	page2.openLeftDoor().then(function(){

	page2.closeLeftDoor();
});
page2.openRightDoor().then(function(){

	page2.closeRightDoor();
});

},10000);*/

page2.openDoorByDelayTime(10000).then(function(){

		$('#boy').removeClass('slowWalk');
		$('#boy').addClass('boySmall');
});

setTimeout(function(){

	$('#boy').removeClass('boySmall');
	$('#boy').addClass('boyBig');
},20000);

setTimeout(function(){
	$('#boy').removeClass('boyBig');
	$('#boy').addClass('slowWalkFlower');
	page2.closeDoorByDelayTime();
},25000)

$('.bird').addClass('birdFly');

$('.bird').animate({
	left:'20%'
},20000,function(){

})












