$(document).ready(function(){
	console.log("The page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function(){
		$('.research-item').addClass('hide');
	}

	$('.btn-profile').click(function(){
		hideAll();
		$('.profile').removeClass('hide');
	});

	$('.btn-avatars').click(function(){
		hideAll();
		$('.avatars').removeClass('hide');
	});

	$('.btn-self').click(function(){
		hideAll();
		$('.self').removeClass('hide');
	});

	$('.btn-status').click(function(){
		hideAll();
		$('.status').removeClass('hide');
	});

	$('.btn-consumed').click(function(){
		hideAll();
		$('.consumed').removeClass('hide');
	});

	$('.btn-catfish').click(function(){
		hideAll();
		$('.catfish').removeClass('hide');
	});

	$('.btn-anonymous').click(function(){
		hideAll();
		$('.anonymous').removeClass('hide');
	});

	$('.btn-self-worth').click(function(){
		hideAll();
		$('.self-worth').removeClass('hide');
	});

	$('.btn-facetune').click(function(){
		hideAll();
		$('.facetune').removeClass('hide');
	});

	$('.btn-faux').click(function(){
		hideAll();
		$('.faux').removeClass('hide');
	});

});