$(document).ready(function(){
    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

   
    var typed = new Typed(".typing", {
        strings: ["Student","Web Developer", "Freelancer", "Singer", "Drawing Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Drawing","Singing", "Freelancing","Content Writing", "Building small websites"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
});