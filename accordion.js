$(document).ready(function() {
    $('.choicegroup.capa_inputtype .field-input[type="radio"]').change(function() {
        if ($(this).prop("checked")) {
            console.log("line 17 - checked")

            $("label").css({
                "background-color": "white",
                "border": "2px solid black"
            })

            $(this).parent().css({
                "background-color": "#F9DE32",
                "border": "2px solid #f93694",

            })

            $("label").hover(function() {
                $(this).css({ "border": "2px solid #f93694" });
            }, function() {
                $(this).css({ "border": "2px solid black" });
            });


        }
        $('.field-input[type="radio"]:checked').parent().css({

            "background-color": "#F9DE32",
            "border": "2px solid #f93694",

        })


    });


    $('.field-input[type="checkbox"]').change(function() {
        if ($(this).prop("checked")) {
            console.log("line 17 - checked")

            $(this).parent().css({
                "background-color": "#F9DE32",
                "border": "2px solid #f93694",

            })

            $("label").hover(function() {
                $(this).css({ "border": "2px solid #f93694" });
            }, function() {
                $(this).css({ "border": "2px solid black" });
            });


        } else {
            $(this).parent().css({
                "background-color": "white",
                "border": "2px solid black"
            })

            $("label").hover(function() {
                $(this).css({ "border": "2px solid #f93694" });
            }, function() {
                $(this).css({ "border": "2px solid black" });
            });
        }
    });
});



function tau_toggle(ele) {
    var str = "answer-" + ele.id.slice(ele.id.indexOf("-") + 1);
    var res = document.getElementById(str);
    if (res.classList.contains("hid")) {
        res.classList.remove("hid");
        res.classList.add("rev");
        ele.removeAttribute("onclick");
        ele.disabled = true;

    }
}



function courseParam(courseName) {
    // [name, primary (h1 background), secondary (h1 text), tetriary (h1 line), text1 (gradient), text2 (gradient)]
    var courses = [
        ['viruses', 'rgb(237, 201, 61)', 'rgb(23, 82, 125)', 'rgb(23, 82, 125)', 'black', 'black'],
        ['chemistry', 'rgb(0, 162, 138)', 'white', 'black', 'black', 'black'],
        ['cs', 'rgb(30, 165, 182)', 'white', 'black', 'black', 'black'],
        ['lms', '#080A52', '#EB2188', '#EB2188', '#080A52', '#EB2188'],
        ['plants', '#e1f5c4', '#0B3B39', '#0B3B39', 'black', 'black'],
        ['justice', '#002878', '#D5A530', '#D5A530', 'black', 'black'],
        ['Modern Israel', '#104C91', '#EFC9AF', '#EFC9AF', 'black', 'black'],
        ['psycho', '#5D3989', '#FFFFFF', '#BA8AF4', 'black', 'black'],
        ['physics', '#344C5C', '#FFFFFF', 'black', 'black', 'black'],
        ['energy', '#006B38FF', '#FFFFFF', '#101820FF', 'black', 'black'],
        ['ds', '#E2A756', '#1D56AE', '#1D56AE', 'black', 'black'],
        ['islam', 'rgb(226, 213, 181)', '#1D2A4E', '#1D2A4E', 'black', 'black'],
    ];
    for (i = 0; i < courses.length; i++) {
        if (courseName.toString() == courses[i][0]) {
            document.documentElement.style.setProperty('--primary-color', courses[i][1]);
            document.documentElement.style.setProperty('--secondary-color', courses[i][2]);
            document.documentElement.style.setProperty('--tetriary-color', courses[i][3]);
            document.documentElement.style.setProperty('--text1', courses[i][4]);
            document.documentElement.style.setProperty('--text2', courses[i][5]);
            break;
        }
    }

    $("h1").append('<img src="../static/Asset_8.png"/>');

    //For Data Structures
    if (courseName == 'ds' && $('option[value="he"]').is('[selected="selected"]')) {
        $('span.group-heading, p.accordion-display-name, div.breadcrumbs').css({ 'text-align': 'left', 'direction': 'ltr' });
        $('.hd.hd-2 unit-title').css({ 'direction': 'ltr' });
        $('.sequence-tooltip.sr').html(function(i, origText) {
            return `<span style='direction: ltr'>` + origText + `</span>`;
        });
        $('.fa-angle-right').toggleClass('changeArrow');
    }
}



/* HIDE DISSCUTION */


/* function tasteParam(courseName) {
    courseParam(courseName);
    $('.course-material .tabs.course-tabs .tab a[href*="discussion"]').css('display', 'none');
}
 */

$(document).ready(function() {
    //turn on the scroll indicator 

    window.onscroll = function() { scrollIndicator() };
    //open discussion
    $('.nav-item.tab').on("click", function() {
        discussion_show();
    });
    $('.sequence-nav-button.button-next').on("click", function() {
        discussion_show();
    });
    $('.sequence-nav-button.button-previous').on("click", function() {
        discussion_show();
    });

    discussion_show();
});

function discussion_show() {
    $('.discussion-show.btn').click();
};




const els = document.querySelectorAll("[type='radio']");
for (const el of els)
    el.addEventListener("input", e => reorder(e.target, els));
reorder(els[0], els);

function reorder(targetEl, els) {
    const nItems = els.length;
    let processedUncheck = 0;
    for (const el of els) {
        const containerEl = el.nextElementSibling;
        if (el === targetEl) { //checked radio
            containerEl.style.setProperty("--w", "100%");
            containerEl.style.setProperty("--l", "0");
        } else { //unchecked radios
            containerEl.style.setProperty("--w", `${100 / (nItems - 1)}%`);
            containerEl.style.setProperty("--l", `${processedUncheck * 100 / (nItems - 1)}%`);
            processedUncheck += 1;
        }
    }
}





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
// When the user scrolls the page, execute myFunction


function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicatorBar").style.width = scrolled + "%";
    console.log(scrolled + "%")
}