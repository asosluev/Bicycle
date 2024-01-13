// async function ibg(){
//     const images = document.querySelectorAll(".ibg");
//     if (images.length > 0) {
//         await Promise.all(
//             await Object.keys(images).map(async (i) => {
//                 if(images[i].querySelector('img')){
//                     images[i].style.backgroundImage = `url(${images[i].querySelector('img').getAttribute('src')})`;
//                 }
//             })
//         )
//     }
// }

// ibg().then(() => {
//     console.log('images BG added correctly')
// }).catch(err => {
//     console.log('Error: ', err)
//     throw err;
// })




$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

// $(document).ready(function(){
//     $('.header__burger').click(function(event){
//         $('.header__burger,.header__menu').toggleClass('active');

//     });
// });


function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

if ($('.slider__body').lenght > 0) {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight:true,
        nextArrow: '<button type="button" class="slick-next></button>',
        prevArrow: '<button type="button" class="slick-prev></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}


