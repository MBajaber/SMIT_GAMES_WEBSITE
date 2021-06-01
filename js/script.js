//  Add Active Class To a Link when you click on it and Remove from Siblings.
let allLinks = document.querySelectorAll('.navbar .navbar-nav li');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.parentElement.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    });
})

//  Show Popup when Click On Videos or Images

let mypopup = document.querySelector('.popup');
let myIframe = document.querySelector('.popup .embed-responsive .embed-responsive-item');
let myBoxWindow = document.querySelector('.popup .box');
let myCloseBtn = document.querySelector('.popup .box .close-btn');

//  Close Popup When You Click On Popup.
mypopup.addEventListener('click', function () {
    myIframe.src = '';
    return this.style.display = 'none';
});
//  Close Popup When You Click On Close Button.
myCloseBtn.addEventListener('click', function () {
    myIframe.src = '';
    return this.parentElement.parentElement.style.display = 'none';
});

//  To Not Close When You Click on Box Window.
myBoxWindow.addEventListener('click', (e) => {
    e.stopPropagation();
});

//  When Click on Box to Show Videos Advertisements.
let headersVideos = document.querySelectorAll('.header .content .image .watch-adver .box');
headersVideos.forEach(box => {
    box.addEventListener('click', function () {
        getSrc(this.dataset.titlesrc);
    });
});

//  When Click on Box to Show Videos Advertisements.
let mainAdver = document.querySelector('.header .content .info .bottom-box .watch');
mainAdver.addEventListener('click', function () {
    getSrc(this.dataset.titlesrc);
});

//  When You Click on Box to Show Videos Advertisements.
let newGamesPlyBtn = document.querySelector('.new-game .content .image .play-btn');
newGamesPlyBtn.addEventListener('click', function () {
    getSrc(this.dataset.titlesrc);
});

//  To Get Source And Open The Popup.
function getSrc (url) {
    myIframe.src = url;
    mypopup.style.display = 'block';
}

//  When You Click on Scroll Text On Headers To Move To More Games Sections.
let scrollBtn = document.querySelector('.header .content .info .bottom-box .scroll');
scrollBtn.addEventListener('click', function () {
    document.getElementById('more-games').scrollIntoView({
        behavior: 'smooth'
    })
});

//  Trigger Owl Carousel.
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        800: {
            items:4
        },
        1000:{
            items:6
        }
    }
});