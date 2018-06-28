$(document).ready(function(){  
	
	$('.companySlideNavItem').click(function(){
		var a = $(this).children("a").attr("href");
		if(a=='#connection')
		{
			$('.slick-for').slick({
				prevArrow:$('.navLeftSlick2'),
				nextArrow:$('.navRightSlick2'),
				autoplay: true,
				centerMode: false,
				slidesToShow: 3,
				variableWidth:true,
				responsive: [
				  {
					breakpoint: 1024,
					settings: {
					  slidesToShow: 2,
					  infinite: true,
					  variableWidth:true
					}
				  },
				  {
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  variableWidth:true
					}
				  }
				]
			});	
		}
	});
	
	$('.slick-for-Gallery').slick({
		prevArrow:$('.navLeftSlick'),
		nextArrow:$('.navRightSlick'),
		autoplay: true,
		centerMode: false,
		variableWidth: true,
		slidesToShow: 3
	});		
});

$(document).ready(function(){
	   
	$('.reviewSlick').slick({
		dots: false,
		autoplay: true,
		infinite: true,
		centerMode: false,
		variableWidth: false,
		arrows: false,
		slidesToShow: 1
	  });   

	$('.aboutSmartContainer').slick({
		autoplay: false,
		arrows:false,
		centerMode: false,
		variableWidth: false,
		slidesToShow: 1
	  });

	  $('.blockPartner').slick({
		prevArrow:$('.arrowPrev'),
		nextArrow:$('.arrowNext'),
		autoplay: true,
		infinite: false,
		centerMode: false,
		variableWidth: false,
		slidesToShow: 1
	  });
  
	  $('.blockCustomer').slick({
		prevArrow:$('.arrowPrev2'),
		nextArrow:$('.arrowNext2'),
		autoplay: true,
		infinite: false,
		centerMode: false,
		variableWidth: false,
		slidesToShow: 1
	  });
		
});

$(document).ready(function(){
	
	/*
	$('.customRadio').click(function(){
		var a = $(this).find('input').attr("name");
		$( "input[name*='" + a + "']").parent().removeClass('active');
		$(this).addClass('active');
	});*/

	
	$('.checkmark').click(function(){
		if($(this).parent().hasClass('active'))
		{
			$(this).parent().removeClass('active');
		}
		else
		{
			$(this).parent().addClass('active');
		}
	});


	$("#companyPanel").hide();

	$(".buttonTrigger").click(function(){
		$(".navSearch").slideToggle(300);
	});

	$('.buttonDropdownList').click(function(){
		$('.dropdownList').toggle();
	});

	$('.dropdownList li').click(function(){
		$('.inputDropdownList').val($(this).text());
		$('.dropdownList').toggle();
	});

	$('.inputDropdownList').keypress(function(){
		$('.dropdownList').show();
	});

	$(".inputDropdownList").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".dropdownList li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	  });

	$(".inputDropdownList").focus(function() {
		$('.dropdownList').show();       
		//return false;
	});

});
$(document).ready(function(){
	/*if($(document).width() <= 1025)
	{
		
		$('.staContent').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		centerMode: false,
		variableWidth: true,
		arrows: false
		});

		$('.staContent2').slick({
			dots: false,
			infinite: false,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true,
			arrows: false
		});

	}*/
/*FUnction drag title */

});

$(document).ready(function(){
	/*Change height fit screen*/
	/*Change height fit screen*/
	/*Change height fit screen
	$(".map").width($(document).width()-435);*/
	var a =$(document).height();
	$("#result").height($(document).height()-115);
	$("#result").css('display','block');
	$(".map").height($(document).height()-115);
	$(".map").width($(document).width());
	$(".resultPanel").width($(document).width());
	$(".resultContainer").width($(".resultPanel").width() + $(".map").width());
	$(".resultListing").height($(document).height() - (56 + $('.resultTop').height() + $('.resultIngo').height()) - 23);
	$(".filterPanel").height($(".resultListing").height() + $('.resultIngo').height());
	
	$(window).resize(function(){
        $(".map").height($(document).height()-115);
		$("#result").height($(document).height()-115);
		$(".resultListing").height($(document).height() - (56 + $('.resultTop').height() + $('.resultIngo').height()) - 23);
		$(".filterPanel").height($(".resultListing").height() + $('.resultIngo').height());
		/*$(".map").width($(document).width()-435);*/
		$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
		$('.expandBtn').css('right',0);
		$('#menu').next().css('top',$('#menu').offset().top+24);
		$('#menu').next().css('left',$('#menu').offset().left-64);
		$('#user').next().css('top',$('#menu').offset().top+24);
		$('#user').next().css('left',$('#menu').offset().left-64);
    });
	
	
	/*Change height fit screen*/
	/*Change height fit screen*/
	/*Change height fit screen*/
	
	/*set position of expand button*/
	$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
	$('.expandBtn').css('right',0);
	/*set position of expand button*/
	
	/*Expand Result*/
	/*Expand Result*/
	/*Expand Result*/
	$('.expandBtn').click(function(){
		var a = $(".map").css('margin-left');
		var b = "-" + $(document).width() + "px";
		$('.expandBtn').removeAttr('style');
		if(a==b)
		{
			$(".map").animate({marginLeft: "0"});
			$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
			$('.expandBtn').css('right',0);
			$('.expandBtn').css('transform','rotate(0)');
		}
		else
		{
			$(".map").animate({marginLeft: b});
			$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
			$('.expandBtn').css('left',0);
			$('.expandBtn').css('transform','rotate(180deg)');
		}
/*
		if(a==true)
		{
			$('.expandBtn').removeAttr('style');
			$('.map').removeClass('hideMap');
			$('.resultPanel').addClass('hideResult');
			$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
			$('.expandBtn').css('right',0);
			$('.expandBtn').css('transform','rotate(0)');
		}
		
		if(b==true)
		{
			$('.expandBtn').removeAttr('style');
			$('.resultPanel').removeClass('hideResult');
			$('.map').addClass('hideMap');
			$('.expandBtn').css('top',$('.searchBar').offset().top + 42);
			$('.expandBtn').css('left',0);
			$('.expandBtn').css('transform','rotate(180deg)');
		}
		*/
		
	});
	
	var sd = $(".resultItemView img").offset().left;
	var s2d = $(".resultItemView").offset().left;
	/*Expand Result*/
	/*Expand Result*/
	/*Expand Result*/
	
	/*Show filter for maps*/
	$('html').click(function() {
   		$('.filterPanel').hide(); 
   		$('.sortPanel').hide(); 
		$('.submenu').hide();  
		$('.dropdownList').hide(); 
	});
	
	$('#filterBtn').click(function(event){
		 event.stopPropagation();
	});

	
	
	$('.test').click(function(event){
		 event.stopPropagation();
	});
	
	$('.filterPanel').click(function(event){
		 event.stopPropagation();
	});
	
	$('#filterBtn').click(function(){
		$('.filterPanel').css('top',$('#filterBtn').offset().top + $('#filterBtn').height() + 5);
		$('.filterPanel').css('left',$('#filterBtn').offset().left);
		$('.filterPanel').toggle();
		$('.sortPanel').hide();
	});
	
	$('#sortBtn').click(function(event){
		 event.stopPropagation();
	});
	
	
	$('#sortBtn').click(function(){
		$('.sortPanel').css('top',$('#sortBtn').offset().top + $('#sortBtn').height() + 5);
		$('.sortPanel').css('left',$('#sortBtn').offset().left);
		$('.filterPanel').hide();
		$('.sortPanel').toggle();
	});
	
	/*Show filter for maps*/
});

$(document).ready(function(){

	$('.seemore').click(function(){
		if($(this).text() == "More...")
		{
			$('.basicIntroDesc p').css('height','auto');
			$(this).text("Less...");
		}
		else
		{
			$('.basicIntroDesc p').css('height','54px');
			$(this).text("More...");
		}
	});

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
	
	
	$('html').click(function() {
   		$('#user').next().hide();
   		$('#menu').next().hide();
	});
	
	$('#user').click(function(event){
		 event.stopPropagation();
   		$('#menu').next().hide();
	});
	
	$('#user').click(function(){
		var a = $('#user').next();
		if($('.topNav').width() <= 1366)
		{
			a.css('top',$('#user').offset().top + $('#user').height() + 5);
			a.css('right',10);
			a.css('left','auto');
		}
		else
		{	
			a.css('top',$('#user').offset().top + $('#user').height() + 5);
			a.css('left',$('#user').offset().left-64);
		}
		a.toggle();
	});
	
	
	$('#menu').click(function(event){
		 event.stopPropagation();
   		$('#user').next().hide();
	});
	
	$('#menu').click(function(){
		var a = $('#menu').next();
		if($('.topNav').width() <= 1366)
		{
			a.css('top',$('#menu').offset().top + $('#menu').height() + 5);
			a.css('right',10);
			a.css('left','auto');
		}
		else
		{	
			a.css('top',$('#menu').offset().top + $('#menu').height() + 5);
			a.css('left',$('#menu').offset().left-64);
		}
		a.toggle();
	});

	$('.customCard').click(function(){
		if($(this).hasClass('expandCustomCard'))
		{
			$(this).removeClass('expandCustomCard');
		}
		else
		{
			$(this).addClass('expandCustomCard');
		}
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
	
	/*changeWidthItem();
	change width base on number of elements*/
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
		var lastChildItem="<div class=\"catItem\"><a href=\"#\"><img src=\"public/assets/legal-struture.svg\" /><h6>Show More</h6></a></div>";
		$("#catContainer").append(lastChildItem);
		/*script for demo add item*/
		
		$(".lastChildCatItem").hide();
		var showmore = $(".lastChildCatItem");
		showmore.show();
		$("#catContainer").append(showmore);
		
	}
	
	$(".lastChildCatItem").click(function(){
		lastClick();
		
		/*changeWidthItem();*/
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
	var display1 = document.getElementById("count01");
	var number1 = {param:0};
	var value1= document.getElementById("count01").getAttribute("value-to");
	
	var display2 = document.getElementById("count02");
	var number2 = {param:0};
	var value2= document.getElementById("count02").getAttribute("value-to");
	
	var display3 = document.getElementById("count03");
	var number3 = {param:0};
	var value3= document.getElementById("count03").getAttribute("value-to");
	
	var display4 = document.getElementById("count04");
	var number4 = {param:0};
	var value4= document.getElementById("count04").getAttribute("value-to");
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
	var companies = new CountUp('count01',0, value1, 0, 5, options);
	companies.start();
	var cities = new CountUp('count02',0, value2, 0, 5, options);
	cities.start();
	var searched = new CountUp('count03',0, value3, 0, 5, options);
	searched.start();
	var totalUser = new CountUp('count04',0, value4, 0, 5, options);
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
/*
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
*/
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

	/* function copy to clipboard */
	function copyToClipboard(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).html()).select();
		document.execCommand("copy");
		$temp.remove();
	  }

	function showNoti(element){
		$('.notification').css('position','absolute');
		$('.notification').css('height','60px');
		$('.notification').css('top',element.offset().top+30);
		$('.notification').css('left',element.offset().left);
		$('.notification').toggle();
		setTimeout(function() {
			$(".notification").fadeOut();
		  }, 1500);
	}

	$('.copyToClipboard').click(function(){
		copyToClipboard('#emailSign');
		showNoti($('.copyToClipboard'));
	});

	$('.testupdatenamecard').click(function(){
		if($('.downloadNameCard').hasClass('isDisabled'))
		{
			$('.downloadNameCard').removeClass('isDisabled');
		}
		else
		{
			$('.downloadNameCard').addClass('isDisabled');
		}
		if($('.copyToClipboard').hasClass('isDisabled'))
		{
			$('.copyToClipboard').removeClass('isDisabled');
		}
		else
		{
			$('.copyToClipboard').addClass('isDisabled');
		}
		
		$('.imgNameCard').toggle();
		$('.emailSign').toggle();
		$('.uploadNameCard').toggle();
		$('.uploadEmailSign').toggle();
	});

});

$(document).ready(function(){   
	$('.featureProductItem').click(function(){
		var a = $(this).children("a").attr("data-target");

		$(a + ' .topImgGalleryProduct').slick({
			autoplay: false,
			centerMode: false,
			arrows:false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.botImgGalleryProduct'
		});	
		
		$(a + ' .botImgGalleryProduct').slick({
			autoplay: true,
			centerMode: false,
			arrows:false,
			variableWidth:true,
			focusOnSelect: true,
			asNavFor: '.topImgGalleryProduct'
		});	

	});
	
});