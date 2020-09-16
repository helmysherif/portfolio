$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $(".navbar").addClass("sticky");
        }
        else
        {
            $(".navbar").removeClass("sticky");
        }
        if(this.scrollY > 200)
        {
            $(".scroll-up-btn").addClass("show");
        }
        else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
    $(".scroll-up-btn").click(function(){
        $("html,body").animate({scrollTop:0});
    })
    let typed = new Typed(".typing",{
        strings:['Front End Developer','Developer','Designer','Freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    let typed2 = new Typed(".typing-2",{
        strings:['Front End Developer','Developer','Designer','Freelancer'],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".navbar .menu-btn i").toggleClass("active")
    });
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})