$(document).ready (function () {

	//$("nav ul li").children("ul").parent("li").children("a").addClass("plus_icon");

	var windowWidth = $(window).width();
	if (windowWidth > 576) {

		$("nav ul li").hover (function () {			
			//$(this).children("ul").css("display", "block");
			$(this).children("ul").animate({
			opacity: 1,
			top: "48",
			}, 125, function() {
			//Animation complete
			});
			return false;

		}, function () {			
			$(this).children("ul").animate({
			opacity: 0,
			top: "100"
			}, 125, function() {
			//Animation complete
			});
		});

		$("nav ul ul li").hover (function () {			
			$(this).children("ul").css("display", "block");
			$(this).children("ul").animate({
			opacity: 1,
			top: "0"
			}, 125, function() {
			//Animation complete
			});
			return false;

		}, function () {			
			$(this).children("ul").animate({
			opacity: 0,
			top: "100"
			});
		});

	}

	else if (windowWidth < 576) {

		$("nav ul li").click (function () {
			$(this).children("ul").slideToggle("fast");
			return false;
		});
		
	}

	$(".nav_toggle").on("click", function() {
    	$("nav > ul").slideToggle();
    	return false;
	});

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 