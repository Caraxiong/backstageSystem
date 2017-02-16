$(function(){
	$(".j-menu").on('click',function(){
		var $panel = $(this).next();
		var $i = $(this).find('i');
		if($panel.is(':hidden')){
			$panel.slideDown();
			$i.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}else{
			$panel.slideUp();
			$i.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		}
	});
	$('.j-menu').eq(0).trigger('click');
	
	$('.inner-nav-pabel a').on('click',function(){
		var linkUrl = $(this).attr('href');
		var $iframe = $('iframe');
		$iframe.attr('src',linkUrl);
		return false;
	});
});