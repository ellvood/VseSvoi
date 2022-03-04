// function readMore() {
//         var dots = 
//         document.getElementById("dots1", "dots2", "dots3");
//         var more =
//         document.getElementById("more1", "more2", "more3");
//         var btn =
//         document.getElementById("btn1", "btn2", "btn3");
        
//         if (dots.style.display == "none") {
//             dots.style.display="inline";
//             btn.innerHTML="Подробнее";
//             more.style.display="none";
//         } else {
//             dots.style.display="none";
//             btn.innerHTML="Скрыть";
//             more.style.display="inline";
//         }
//     };

function facechange1(objName) {
    if ($(objName).css('display')=='none' ) {
        btn1.innerHTML="Скрыть";
        $(objName).animate({height: 'show'}, 400);
    } else {
        btn1.innerHTML="Подробнее";
        $(objName).animate({height: 'hide'}, 200);
    }
};

function facechange2(objName) {
    if ($(objName).css('display')=='none' ) {
        btn2.innerHTML="Скрыть";
        $(objName).animate({height: 'show'}, 400);
    } else {
        btn2.innerHTML="Подробнее";
        $(objName).animate({height: 'hide'}, 200);
    }
};

function facechange3(objName) {
    if ($(objName).css('display')=='none' ) {
        btn3.innerHTML="Скрыть";
        $(objName).animate({height: 'show'}, 400);
    } else {
        btn3.innerHTML="Подробнее";
        $(objName).animate({height: 'hide'}, 200);
    }
};