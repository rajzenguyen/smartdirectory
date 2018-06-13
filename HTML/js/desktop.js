$(document).ready(function(){   
	$('.slick-for').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3
	});
		
});

$(document).ready(function(){   
	$('.reviewSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  arrows: false
	});   
		
});

$(document).ready(function(){
	
	$('.reviewSlick2').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  centerMode: false,
	  variableWidth: true,
	  arrows: false
	});
		
});

$(document).ready(function(){
	
	$("#companyPanel").hide();
	$(".buttonTrigger").click(function(){
		$(".buttonTrigger").hide();
		$("input[name='txtSearchNavTxt']").show();
		$("button[name='btnSearchNavBtn']").show();
	});
	
	$(".submenu").click(function(){
	$('.dropdown-submenu a.test').next('ul').toggle();
	});
});

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

$(document).ready(function(){
	
	
	/*show scroll to top when scroll*/
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
			$('.gottopping').show();
		} else {
			$('.gottopping').hide();
		}
	}
	/*show scroll to top when scroll*/
	
	$('.gottopping').click(function(){
		jQuery('html,body').animate({scrollTop:0},800);
	});
	
	$('.hideNoti').click(function(){
		$('.hideNoti').parent(this).toggle();
	});
	
	
	$('#lang').click(function(){
		$('#menuLang').toggle();
		
	});
	
	$('#menuLang').click(function(){
		$('#menuLang').toggle();
	});
	
	$("#companyToggle").click(function(){
		$("#companyPanel").show();
		$("#personalPanel").hide();
	});
	
	$("#personalToggle").click(function(){
		
		$("#companyPanel").hide();
		$("#personalPanel").show();
	});
	
	/*cut down the content of notification to match 85 characters*/
	/*cut down the content of notification to match 85 characters*/
	/*cut down the content of notification to match 85 characters*/
	function cutDownLengthOfNoti(){
		var n = $(".notiItemContent h7").length;
		for(i = 0; i<n ;i++)
		{
			var n = $(".notiItemContent h7").eq(i).text().length;
			if(n > 85)
			{
				var subs = $(".notiItemContent h7").eq(i).text().substr(0,82) + ".....";
				$(".notiItemContent h7").eq(i).text(subs);
			}
		}
	}
	cutDownLengthOfNoti();
	
	/*cut down the content of notification to match 85 characters*/
	/*cut down the content of notification to match 85 characters*/
	/*cut down the content of notification to match 85 characters*/
	/*cut down the content of notification to match 85 characters*/
	
	
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	function changeWidthItem(){
		var element = document.getElementById("catContainer");
		var numberOfElement = element.getElementsByClassName("catItem").length;
		var odd=numberOfElement%4;
		if(odd == 0)
		{
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
		}
		else if(odd == 1){
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-5].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-4].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="17%";
			
		}
		else if(odd == 2){
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-10].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-9].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-8].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-7].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-6].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-5].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-4].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="17%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="17%";
			
		}
		else if(odd == 3){
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="37%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="37%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="17%";
			
		}
		/*if(odd == 0)
		{
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
		}
		else if(numberOfElement%5==0)
		{
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="17%";
			}
		}
		else if(odd == 1 && numberOfElement < 9){
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="17%";
			}
		}
		else if(odd == 1 && numberOfElement >=9)
		{
			for(i = 0; i<numberOfElement-4;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-5].style.width="18%";
			element.getElementsByClassName("catItem")[numberOfElement-4].style.width="24%";
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="14%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="14%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="15%";
		}
		else if(odd == 2)
		{
			for(i = 0; i<numberOfElement;i++){
				element.getElementsByClassName("catItem")[i].style.width="17%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-7].style.width="33%";
			element.getElementsByClassName("catItem")[numberOfElement-6].style.width="20%";
			element.getElementsByClassName("catItem")[numberOfElement-5].style.width="38%";
			element.getElementsByClassName("catItem")[numberOfElement-4].style.width="18%";
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="30%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="24%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="15%";
		}
		else if(odd == 3)
		{
			for(i = 0; i<numberOfElement-3;i++){
				element.getElementsByClassName("catItem")[i].style.width="22%";
			}
			element.getElementsByClassName("catItem")[numberOfElement-3].style.width="33%";
			element.getElementsByClassName("catItem")[numberOfElement-2].style.width="20%";
			element.getElementsByClassName("catItem")[numberOfElement-1].style.width="38%";
		}*/
	}
	
	changeWidthItem();
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	/*change width base on number of elements*/
	
	
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	function lastClick(){
		
		var element = document.getElementById("catContainer");
		var numberOfElement = element.getElementsByClassName("catItem").length;	
		
		/*script for demo add item*/	
		var lastChildItem="<div class=\"catItem\"><a href=\"#\"><img src=\"assets/legal-struture.svg\" /><h6>Show More</h6></a></div>";
		$("#catContainer").append(lastChildItem);
		/*script for demo add item*/
		
		$(".lastChildCatItem").hide();
		var showmore = $(".lastChildCatItem");
		showmore.show();
		$("#catContainer").append(showmore);
		
		/*resize block when add more block*/
		changeWidthItem();
	}
	
	$(".lastChildCatItem").click(function(){
		lastClick();
	});
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	/*add more filter to homepage*/
	
	
	
	
	/*running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
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
	var display5 = document.getElementById("id2");
	var number5 = {param:0};
	var value5= document.getElementById("id2").getAttribute("value-to");
	
	var display6 = document.getElementById("id3");
	var number6 = {param:0};
	var value6= document.getElementById("id3").getAttribute("value-to");
	
	var display7 = document.getElementById("id4");
	var number7 = {param:0};
	var value7= document.getElementById("id4").getAttribute("value-to");
	
	var display8 = document.getElementById("id5");
	var number8 = {param:0};
	var value8 = document.getElementById("id5").getAttribute("value-to");
	
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
	/*
	var id2 = new CountUp('id2',0, value5, 0, 5, options);
	id2.start();
	var id3 = new CountUp('id3',0, value6, 0, 5, options);
	id3.start();
	var id4 = new CountUp('id4',0, value7, 0, 5, options);
	id4.start();
	var id5 = new CountUp('id5',0, value8, 0, 5, options);
	id5.start();
	
	
	running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
	/*running number for homepage*/
	
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