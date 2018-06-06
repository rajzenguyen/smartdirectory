$(document).ready(function(){   
	$('.slick-for').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3
	});
});
$(document).ready(function(){
	
	$('.hideNoti').click(function(){
		$('.hideNoti').parent(this).toggle("slow");
	});
	
	var display1 = document.getElementById("companies");
	var number1 = {param:0};
	var value1= document.getElementById("companies").getAttribute("value-to");
	
	var display2 = document.getElementById("cities");
	var number2 = {param:0};
	var value2= document.getElementById("cities").getAttribute("value-to");
	
	var display3 = document.getElementById("searched");
	var number3 = {param:0};
	var value3= document.getElementById("searched").getAttribute("value-to");
	
	var display4 = document.getElementById("totalUser");
	var number4 = {param:0};
	var value4= document.getElementById("totalUser").getAttribute("value-to");
	/*
	var duration = 8;
	
	function count() {
	  TweenLite.to(number1, duration, {param:"+=" + value1, roundProps:"param", onUpdate:update1, onComplete:complete, ease:Linear.easeNone});
	  TweenLite.to(number2, duration, {param:"+=" + value2, roundProps:"param", onUpdate:update2, onComplete:complete, ease:Linear.easeNone});
	  TweenLite.to(number3, duration, {param:"+=" + value3, roundProps:"param", onUpdate:update3, onComplete:complete, ease:Linear.easeNone});
	  TweenLite.to(number4, duration, {param:"+=" + value4, roundProps:"param", onUpdate:update4, onComplete:complete, ease:Linear.easeNone});
	}
			
	function update1() {
	  //display1.innerHTML = number1.param;
	}	
		
	function update2() {
	  display2.innerHTML = number2.param;
	}	
		
	function update3() {
	  display3.innerHTML = number3.param;
	}	
		
	function update4() {
	  display4.innerHTML = number4.param;
	}
	
	
	function complete() {
	  //alert("Complete");
	}
	
	count();*/
	
	var options = {
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',
	};
	var companies = new CountUp('companies',0, value1, 0, 5, options);
	companies.start();
	var cities = new CountUp('cities',0, value2, 0, 5, options);
	cities.start();
	var searched = new CountUp('searched',0, value3, 0, 5, options);
	searched.start();
	var totalUser = new CountUp('totalUser',0, value4, 0, 5, options);
	totalUser.start();
	
});

$(document).ready(function(){   

	var options = {
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',
	};
	var control = document.getElementsByClassName("counter");
	var value =control.item(0).getAttribute("value-to");
	var demo = new CountUp('counter', value, 0, 0, 2.5, options);
	if (!demo.error) {
		demo.start();
	} else {
		console.error(demo.error);
	}
});

$(document).ready(function(){
	$('.imgFB1').click(function(){
		$("#f1").attr('checked','checked');
		$("#f2").removeAttr('checked');
		$("#f3").removeAttr('checked');
		$("#f4").removeAttr('checked');
		$("#f5").removeAttr('checked');
	});
	
	$('.imgFB2').click(function(){
		$("#f2").attr('checked','checked');
		$("#f1").removeAttr('checked');
		$("#f3").removeAttr('checked');
		$("#f4").removeAttr('checked');
		$("#f5").removeAttr('checked');
	});
	
	$('.imgFB3').click(function(){
		$("#f3").attr('checked','checked');
		$("#f1").removeAttr('checked');
		$("#f2").removeAttr('checked');
		$("#f4").removeAttr('checked');
		$("#f5").removeAttr('checked');
	});
	
	$('.imgFB4').click(function(){
		$("#f4").attr('checked','checked');
		$("#f1").removeAttr('checked');
		$("#f3").removeAttr('checked');
		$("#f2").removeAttr('checked');
		$("#f5").removeAttr('checked');
	});
	
	$('.imgFB5').click(function(){
		$("#f5").attr('checked','checked');
		$("#f1").removeAttr('checked');
		$("#f3").removeAttr('checked');
		$("#f4").removeAttr('checked');
		$("#f2").removeAttr('checked');
	});
	
	$('.fbCate1').click(function(){
		$("#c1").removeAttr('checked');
		$("#c2").removeAttr('checked');
		$("#c3").removeAttr('checked');
		$("#c1").attr('checked','checked');
	});
	
	$('.fbCate2').click(function(){
		$("#c1").removeAttr('checked');
		$("#c2").removeAttr('checked');
		$("#c3").removeAttr('checked');
		$("#c2").attr('checked','checked');
	});
	
	$('.fbCate3').click(function(){
		$("#c1").removeAttr('checked');
		$("#c2").removeAttr('checked');
		$("#c3").removeAttr('checked');
		$("#c3").attr('checked','checked');
	});
});