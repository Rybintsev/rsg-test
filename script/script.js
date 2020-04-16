$(document).ready(function() {
	$('.menu-burger').click(function() {
		$('.header__menu').toggleClass('active');
	}),
	$('#openContact').click(function() {
		$('.contact__content,.contact').addClass('activ');
	}),
	$('#closeContact').click(function() {
		$('.contact__content,.contact').removeClass('activ');
	}),
	$('.input,input').focus(function() {
		$(this).addClass('focus');
	}),
	$('.input,input').blur(function() {
		$(this).removeClass('focus');
	});
});

