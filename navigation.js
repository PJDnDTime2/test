$(document).ready(function() {
    $(".jqMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
        if ($(clickedID + ":visible").length) {
            $(clickedID).slideToggle(10);
        } else if ($(".ddmenu:visible").length) {
            $(".ddmenu:visible").slideUp(10, function() {
                $(clickedID).slideToggle(10);
				});
		} else {
			$(clickedID).slideToggle(10);
        }
    });
});
$(document).ready(function() {
    $(".jqMMenu").click(function() {
        var clickedID = "#" + $(this).attr('id') + "Menu";
		$(clickedID).slideToggle(10);
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
