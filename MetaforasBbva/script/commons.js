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
    
    $('.button-container').hover(function() {
        $(this).css('cursor','pointer');
    });
    
   $('.button-container').click(function() {
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

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};	