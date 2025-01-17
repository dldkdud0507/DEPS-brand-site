let rollingSwiper; // Swiper 슬라이드

// 롤링시작 함수
function PlayRollingSwiper(target) {
    rollingSwiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 5000,
        autoplay: {
            delay: 0,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: false,
    });
}

// 페이지 로드
window.addEventListener('load', function () {
    PlayRollingSwiper();
});