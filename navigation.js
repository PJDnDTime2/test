$(document).ready(function() {
    $(".jqMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
        if ($(clickedID + ":visible").length) {
            $(clickedID).slideToggle();
        } else if ($(".ddmenu:visible").length) {
            $(".ddmenu:visible").slideUp(200, function() {
                $(clickedID).slideToggle();
				});
		} else {
			$(clickedID).slideToggle();
        }
    });
});
$(document).ready(function() {
    $(".jqMMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
		$(clickedID).slideToggle();
    });
});
$(document).ready(function() {
	$("a").click(function () {
		if ($(this).hasClass("redtext")) {
			$("a").removeClass("redtext");
		} else {
			$("a").removeClass("redtext");
			$(this).toggleClass("redtext");
		}
	});
});
