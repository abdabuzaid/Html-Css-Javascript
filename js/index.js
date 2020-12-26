window.onload = function () {
    'use strict';
    var head = document.getElementById('text1'),
        text = "Pet Center",
        i = 0,
        clear = this.setInterval(function () {
            'use strict';
            head.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(clear);
            }
        }, 200);
};


// Start Image Random
var img_ran = document.getElementById('img-ran'),
    imageList = ['../img/img2.jpg',
        '../img/img3.jpg',
        '../img/img4.jpg',
        '../img/img5.jpg',
        '../img/img6.jpg'];
function changeImages(myElement, myList) {
    'use strict';
    setInterval(function () {
        'use strict';
        var randomKey = Math.floor(Math.random() * imageList.length);
        img_ran.setAttribute('src', imageList[randomKey]);
    }, 2000);

}
changeImages(img_ran, imageList);
//End Image Random

//Start Slider  

var sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
    slidesCount = sliderImages.length,
    currentSlide = 1,
    nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev');


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

theChecker();



function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        return false;

    } else {

        currentSlide++;

        theChecker();

    }

}

function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        return false;

    } else {

        currentSlide--;

        theChecker();

    }

}

function theChecker() {

    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {


        prevButton.classList.add('disabled');

    } else {

        prevButton.classList.remove('disabled');

    }


    if (currentSlide == slidesCount) {

        nextButton.classList.add('disabled');

    } else {


        nextButton.classList.remove('disabled');

    }

}

function removeAllActive() {

    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });
};
//End Slider

//Start Form Placeholder

var myInput1 = document.getElementById('textName'),
    storgePlaceholder1 = myInput1.getAttribute('placeholder'),
    myInput2 = document.getElementById('textPhone'),
    storgePlaceholder2 = myInput2.getAttribute('placeholder'),
    myInput3 = document.getElementById('textEmail'),
    storgePlaceholder3 = myInput3.getAttribute('placeholder'),
    textarea = document.getElementById('text-area'),
    storgePlaceholder4 = textarea.getAttribute('placeholder');

    
myInput1.onfocus = function(){
    'use strict';
    myInput1.setAttribute('placeholder', "");
}
myInput1.onblur = function (){
    'use strict';
    myInput1.setAttribute('placeholder', storgePlaceholder1);
}
   
myInput2.onfocus = function(){
    'use strict';
    myInput2.setAttribute('placeholder', "");
}
myInput2.onblur = function (){
    'use strict';
    myInput2.setAttribute('placeholder', storgePlaceholder2);
}
myInput3.onfocus = function(){
    'use strict';
    myInput3.setAttribute('placeholder', "");
}
myInput3.onblur = function (){
    'use strict';
    myInput3.setAttribute('placeholder', storgePlaceholder3);
}

textarea.onfocus = function () {
    'use strict';
    textarea.setAttribute('placeholder', "");
}
textarea.onblur = function () {
    'use strict';
    textarea.setAttribute('placeholder', storgePlaceholder4);
}

//End Form Placeholder