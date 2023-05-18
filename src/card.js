$('.services-block__item').click(function(){
	$('.card').addClass('active');
	if (document.documentElement.clientWidth > 1024) {
		$('.backdrop-black').addClass('active')
		$('body').addClass('active')
	} else {
		$('.backdrop-black').removeClass('active')
	$('body').removeClass('active')
	}
});

$('.backdrop-black').click(function(){
	$('.backdrop-black').removeClass('active')
	$('.card').removeClass('active');
	$('body').removeClass('active')
});

