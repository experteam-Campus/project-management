$(document).ready(function() {

    window.onscroll = function() { scrollIndicator() };

    function scrollIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scrollIndicatorBar").style.width = scrolled + "%";
    }

    /* console.log("helllo");
     */
});
/* QUESTIONS CHOOSE CHANE COLOR */

/* 
            $('.choicegroup.capa_inputtype .field-input[type="radio"]').change(function() {

                if ($(this).prop("checked")) {
                    console.log("line 17 - checked")

                    $("label").css({
                        "background-color": "white",
                        "color": "black",
                        "border": "2px solid #142654"
                    })


                    $(this).parent().css({
                        "background-color": "#fcc02e",
                        "border": "2px solid #142654",
                        "color": "#142654",
                    })

                    $("label").hover(function() {
                        $(this).css({ "border": "2px solid #fcc02e" });
                    }, function() {
                        $(this).css({ "border": "2px solid #142654" });
                    });


                }
            });



            $('.field-input[type="checkbox"]').change(function() {
                if ($(this).prop("checked")) {

                    $(this).parent().css({
                        "background-color": "#fcc02e",
                        "border": "2px solid #142654",
                        "color": "black",

                    })

                    $("label").hover(function() {
                        $(this).css({ "border": "2px solid #fcc02e" });
                    }, function() {
                        $(this).css({ "border": "2px solid #142654" });
                    });


                } else {
                    $(this).parent().css({
                        "background-color": "white",
                        "color": "black",
                        "border": "2px solid #142654"
                    })

                    $("label").hover(function() {
                        $(this).css({ "border": "2px solid #fcc02e" });
                    }, function() {
                        $(this).css({ "border": "2px solid #142654" });
                    });
                }
            });
            });





           




            var slideIndex = 1;
            showSlides(slideIndex);
            function plusSlides(n) {
            showSlides(slideIndex += n);
            }
            function currentSlide(n) {
            showSlides(slideIndex = n);
            }
            function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var hwidth = 100 / slides;
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
            } 

 */