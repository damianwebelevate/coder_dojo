$(function() {
	
	//auto loads the carousel supposed to have an interm property like this: .carousel({interval.('2000')});
	$('.carousel').carousel();
	
//to make menus drop down automatically

	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//on hover will open menu automatically fadeIn and fadeOut 'fast'




	//to make the active page using bootstrap active class
//most of the functions here require some form of css so please see the css files associated with the addClass funciton

	$("#page3 a:contains('Page 3')").parent().addClass("active");
	$("#page4 a:contains('Page 4')").parent().addClass("active");


	
});//end file


