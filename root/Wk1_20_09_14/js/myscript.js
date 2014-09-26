$(function() {

//to make the active page using bootstrap active class
//most of the functions here require some form of css so please see the css files associated with the addClass funciton

	$("#home a:contains('Home')").parent().addClass("active");
	$("#product a:contains('Product')").parent().addClass("active");
	$("#promo a:contains('Promo')").parent().addClass("active");
	$("#contact a:contains('Contact')").parent().addClass("active");
	$("#sitemap a:contains('Site Map')").parent().addClass("active");
	$("#Team a:contains('Team')").parent().addClass("active");

	
	
	//hides the carousel for lower screen sizes
	$("#carousel").addClass("visible-sm, hidden-xs");
	
	//adds a glyphicon with a size of 3em for mobile devices
	$("#mybutton").addClass("mybutton");
	
	//adds a class the left arrow on the carousel
	$("#left").addClass("mycircle");
	
	//adds a class the right arrow on the carousel
	$("#right").addClass("mycircle");
	
	//auto loads the carousel supposed to have an interm property like this: .carousel({interval.('2000')});
	$('.carousel').carousel();
	
	//disappears at smaller mobile sizes
	$(".myArticle").addClass("visible-sm, hidden-xs");
	
	//is automatically open on load for extra small devices.
	$("#collapseTwo").addClass("collapse in");
	
	//to animate the arrows on the page for the bullet points
	$("#hoverHere").hover(function(){
		$("#animateDiv").animate({left:'215px'});
	});

  
    //as each id is unique in jquery the target divs are changed here and for the next one
	$("#hoverHereAgain").hover(function(){
		$("#Div").animate({left:'215px'});
	});
	
  
	$("#hoverAgain").hover(function(){
	$("#Last").animate({left:'215px'});
  });

  //finally reset the animation with a refresh page div
	$("#refresh").hover(function() {
		location.reload();
	});
	
//to make menus drop down automatically

	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//on hover will open menu automatically fadeIn and fadeOut 'fast'

	
});//end file


