$(function() {
    new WOW().init();
});


$(window).on("load", () => {
    $("#header .container img").css({"animation-duration":"1s", "animation-delay":".75s"}).addClass("animated fadeInDown");
    
        $(".header_text").css({"animation-duration":"1s", "animation-delay":".75s"}).addClass("animated fadeInLeft");
    

    $(".about_left_col").addClass("wow fadeInLeft");
    $(".about_right_col").addClass("wow fadeInRight");
    $(".about-right").addClass("wow fadeInLeft");
//    
    $(".feature_row").addClass("wow bounceInUp");
    $(".feature_btn").addClass("wow fadeInLeft");
    
    $(".course_left_col").addClass("wow fadeInDown");
    $(".course_right_col").addClass("wow fadeInUp");
    
    $(".contact_left_col").addClass("wow zoomInUp");
    $(".contact_right_col").addClass("wow zoomInUp");

    $("#menu_btn").css({"animation-duration":"1s", "animation-iteration-count":"infinite"}).addClass("animated pulse");
//    
//    $("header#home nav #bars").css({"animation-duration":"2.5s", "animation-iteration-count":"infinite"}).addClass("animated flash");
    
})