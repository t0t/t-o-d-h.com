
$( document ).ready(function() {
    
	$(".nav-link").click(function () {
        $("nav a").removeClass("active");
        $(".nav-link").addClass("active");
    });
	$(".logo").click(function () {
        $("nav a").removeClass("active");
    });

});
