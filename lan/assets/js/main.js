$(document).ready(function(){
	console.log("The page is ready!");

	$('.listing').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function(){
		$('.listing').addClass('hide');
	}

	$('.btn-September').click(function(){
		hideAll();
		$('.September').removeClass('hide');
	});

	$('.btn-October').click(function(){
		hideAll();
		$('.October').removeClass('hide');
	});

	$('.btn-November').click(function(){
		hideAll();
		$('.November').removeClass('hide');
	});

	$('.btn-December').click(function(){
		hideAll();
		$('.December').removeClass('hide');
	});

});