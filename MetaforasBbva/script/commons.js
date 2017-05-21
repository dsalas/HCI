$(function() {
	$('.main-menu-option').hover(function() {
        $(this).css('cursor','pointer');
    });
    
   $('.main-menu-option').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });
});