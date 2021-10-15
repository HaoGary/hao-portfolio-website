$(document).ready(function () {

    // 獲取元素
    const goBack = document.querySelector('.goBack');
    const about = document.querySelector('.about');


    // goBack 顯示
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= about.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    // goBack 點擊
    goBack.addEventListener('click', function () {
        animate(window, 0);
    });

    // 執行loading動畫
    $(window).on('load', function () {
        $('.preloader').addClass('complete')
    });
    // 滑動頁面時
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });
    // 打字特效，套用typed.js 的語法格式
    var typed = new Typed(".element", {
        strings: ["HaoTsung", "a 3D / 2D Designer", "a UI Designer", "a Web Developer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });
    // 進度條
    // 套用waypoint js
    var waypoint = new Waypoint({
        // 獲取ID
        element: document.getElementById('exp-id'),
        handler: function () {
            // 進度條 動畫效果
            const p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style', "width:90%;transition:1s all");
            p[1].setAttribute('style', "width:70%;transition:0.25s all");
            p[2].setAttribute('style', "width:80%;transition:0.8s all");
            p[3].setAttribute('style', "width:75%;transition:0.5s all");
            p[4].setAttribute('style', "width:60%;transition:0.5s all");
        }, offset: '90%'
    });

    // 作品調換功能
    var filterized = $('.filter-container').filterizr({
        animationDuration: .5,
    });

    // owl-carousel
    // Demo 輪播圖
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     items: 1
    // });






});