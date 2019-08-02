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
$("a").click(function () {
	if ($(this).hasClass("redtext")) {
		$("a").removeClass("redtext");
	} else {
		$("a").removeClass("redtext");
		$(this).toggleClass("redtext");
	}
});

// sticky navbar
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("navigationbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
