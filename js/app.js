jQuery(function($){
	/*Menu JS*/
	$('.header_menu_hamburguer_img').click(function(){
		$('.header_menu_hamburguer_inner').addClass('open');
		$('.header_menu_close_img').addClass('open');
		$('.header_menu_hamburguer_img').addClass('close');
	});
	$('.header_menu_close_img').click(function(){
		$('.header_menu_hamburguer_inner').removeClass('open');
		$('.header_menu_close_img').removeClass('open');
		$('.header_menu_hamburguer_img').removeClass('close');
	});
});