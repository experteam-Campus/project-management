var changeallcounter = 0;
var acc = document.getElementsByClassName("accordion1");
var accplus = document.getElementsByClassName("accplus");
var i;


var changeallcounter = 0;
var acc2 = document.getElementsByClassName("accordion2");
var accplus = document.getElementsByClassName("accplus");
var l;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        if (this.firstElementChild.innerHTML == "+") {
            this.firstElementChild.innerHTML = "-";
        } else {
            this.firstElementChild.innerHTML = "+";
        }

    }
}



for (l = 0; l < acc2.length; l++) {
    acc2[l].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        if (this.firstElementChild.innerHTML == "+") {
            this.firstElementChild.innerHTML = "-";
        } else {
            this.firstElementChild.innerHTML = "+";
        }

    }
}

function openOrCloseAcc(e) {

    if (e.firstElementChild.innerHTML == "+") {
        e.firstElementChild.innerHTML = "-";
        e.classList.add("active");
        e.nextElementSibling.classList.add("show");
        e.firstElementChild.innerHTML = "-";
    } else {
        e.firstElementChild.innerHTML = "+";
        e.classList.remove("active");
        e.nextElementSibling.classList.remove("show");
        e.firstElementChild.innerHTML = "+";
    }

}




function openallfunc() {
    for (i = 0; i < acc.length; i++) {

        acc[i].classList.add("active");
        acc[i].nextElementSibling.classList.add("show");
        acc[i].firstElementChild.innerHTML = "-";
    }
}

function closeallfunc() {
    for (i = 0; i < acc.length; i++) {
        acc[i].classList.remove("active");
        acc[i].nextElementSibling.classList.remove("show");
        acc[i].firstElementChild.innerHTML = "+";
    }
    for (i = 0; i < acc2.length; i++) {
        acc2[i].classList.remove("active");
        acc2[i].nextElementSibling.classList.remove("show");
        acc2[i].firstElementChild.innerHTML = "+";
    }
}
//open and print hidden content
function showAndPrint() {

    for (i = 1; i < 10; i++) {
        if ($(`.panel${i}`).length) {

            $(`.panel${i}`).css("opacity", "1");
            $(`.panel${i}`).css("max-height", "100%");
        }

    }


    for (z = 1; z < 10; z++) {
        if ($(`#answer-${z}`).length) {
            $(`#answer-${z}`).removeClass("hid")
            $(`#answer-${z}`).addClass("rev");
            $(`#button-${z}`).hide();
        } else {
            break;
        }
    }

    setTimeout(() => { window.print() }, 700);

}