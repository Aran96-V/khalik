//======================================
// CATEGORY DROPDOWN
//======================================

const categoryBtn = document.querySelector(".category-btn");
const megaMenu = document.querySelector(".mega-menu");

if (categoryBtn && megaMenu) {

    megaMenu.style.opacity = "0";
    megaMenu.style.visibility = "hidden";
    megaMenu.style.transform = "translateY(20px)";
    megaMenu.style.transition = ".35s ease";

    categoryBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        megaMenu.classList.toggle("show");

        if (megaMenu.classList.contains("show")) {

            megaMenu.style.opacity = "1";
            megaMenu.style.visibility = "visible";
            megaMenu.style.transform = "translateY(0)";

        } else {

            megaMenu.style.opacity = "0";
            megaMenu.style.visibility = "hidden";
            megaMenu.style.transform = "translateY(20px)";
        }

    });

    document.addEventListener("click", function () {

        megaMenu.classList.remove("show");

        megaMenu.style.opacity = "0";
        megaMenu.style.visibility = "hidden";
        megaMenu.style.transform = "translateY(20px)";

    });

}


//======================================
// STICKY HEADER
//======================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


//======================================
// HERO PARALLAX
//======================================

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", function (e) {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        document.querySelectorAll(".hero-image img").forEach((img, index) => {

            const speed = (index + 1) * 10;

            img.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });

}


//======================================
// BUTTON RIPPLE
//======================================

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn => {

    btn.addEventListener("mousemove", function (e) {

        const x = e.pageX - this.offsetLeft;

        const y = e.pageY - this.offsetTop;

        this.style.setProperty("--x", x + "px");

        this.style.setProperty("--y", y + "px");

    });

});


//======================================
// SCROLL REVEAL
//======================================

const reveals = document.querySelectorAll(
    ".feature-bar,.hero-content,.hero-image,.brands span"
);

function revealAnimation() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 90) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealAnimation);

revealAnimation();


//======================================
// PRODUCT FLOAT
//======================================

document.querySelectorAll(".hero-image img").forEach((img, i) => {

    img.animate([

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-12px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 3500 + i * 400,

        iterations: Infinity

    });

});


//======================================
// SEARCH
//======================================

const search = document.querySelector(".search-box input");

if (search) {

    search.addEventListener("focus", function () {

        this.parentElement.classList.add("active");

    });

    search.addEventListener("blur", function () {

        this.parentElement.classList.remove("active");

    });

}


//======================================
// SMOOTH MENU ACTIVE
//======================================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", function () {

        document.querySelectorAll(".menu a").forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});







// home slider ===================

// banner ------------

const heroSwiper = new Swiper(".heroSwiper", {

    loop:true,

    speed:1000,

    slidesPerView:1,

    spaceBetween:0,

    effect:"fade",

    fadeEffect:{
        crossFade:true
    },

    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

});






// featured products

const featuredProductSlider = new Swiper(".featuredProductSlider", {

    slidesPerView:4,

    spaceBetween:30,

    loop:true,

    speed:800,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    navigation:{
        nextEl:".featured-next",
        prevEl:".featured-prev",
    },

    breakpoints:{

        0:{
            slidesPerView:2,
            spaceBetween:20,
        },

        576:{
            slidesPerView:2,
            spaceBetween:20,
        },

        992:{
            slidesPerView:3,
            spaceBetween:25,
        },

        1400:{
            slidesPerView:6,
            spaceBetween:30,
        }

    }

});




// new arrival -------------

const newArrivalSlider = new Swiper(".newArrivalSlider",{

    slidesPerView:1,

    spaceBetween:30,

    loop:true,

    speed:900,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    navigation:{
        nextEl:".arrival-next",
        prevEl:".arrival-prev",
    },

    breakpoints:{

        0:{
            slidesPerView:2,
            spaceBetween:20,
        },

        576:{
            slidesPerView:2,
            spaceBetween:20,
        },

        768:{
            slidesPerView:2,
            spaceBetween:25,
        },

        992:{
            slidesPerView:3,
            spaceBetween:25,
        },

        1200:{
            slidesPerView:4,
            spaceBetween:25,
        },

        1400:{
            slidesPerView:6,
            spaceBetween:30,
        }

    }

});



// shop by category

document.addEventListener("DOMContentLoaded", function () {

    const categorySlider = new Swiper(".categorySlider", {

        slidesPerView: 4,
        spaceBetween: 30,

        loop: true,
        speed: 700,
        grabCursor: true,
        centeredSlides: false,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        navigation: {
            nextEl: ".category-next",
            prevEl: ".category-prev",
        },

        pagination: {
            el: ".shop-category .swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
            },

            992: {
                slidesPerView: 4,
                spaceBetween: 25,
            },

            1200: {
                slidesPerView: 6,
                spaceBetween: 20,
            }

        }

    });

});











document.addEventListener("DOMContentLoaded", function () {

    const categorySwiper = new Swiper(".categorySwiper", {

        slidesPerView: 2,

        spaceBetween: 12,

        loop: true,
        speed: 700,
        grabCursor: true,
        centeredSlides: false,

        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        },


        navigation: {
            nextEl: ".category-next",
            prevEl: ".category-prev",
        },

        breakpoints: {

            576: {
                slidesPerView: 3,
                spaceBetween: 15
            },

            768: {
                slidesPerView: 4,
                spaceBetween: 18
            },

            992: {
                slidesPerView: 5,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 6,
                spaceBetween: 20
            }

        }

    });

});
