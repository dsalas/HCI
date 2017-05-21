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

function createSearchTool(container) {
	var alphabeth = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	$.each(alphabeth, function( index, letter ) {
		var letterContainer = $('<div>').addClass("letter-button").append(letter);
		$(container).append(letterContainer);
	});
}