const searchEl = document.querySelector('.search');
// document 는 HTML 을 뜻함
const searchInputEl = searchEl.querySelector('input');
// document 내의 searchEl에서 찾는거니 또 반복할 필요없어서 searchEl로 대체

searchEl.addEventListener('click', function() {
    // logic 입력
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



// BADGE & ScrollTo
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간(초단위), 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });

    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// window : 화면 그 자체를 뜻함 / scroll 이라는 event 추가 / 그러면 scroll! 이라는 익명의 함수를 실행하겠다는 뜻
// 라이브러리에서 가져온 lodash 연동을 통해 throttle 이라는 것을 쓰기가 가능해진것 / 스크롤 횟수 제한 기능
// 300은 0.3초 단위 뜻함
// ._throttle(함수, 시간)

toTopEl.addEventListener('click',function () {
    gsap.to(window, .7, {
        scrollTo: 0 // window, 즉 화면의 위치를 0px 지점으로 옮겨주겠다는 뜻(plugin 있어야지만 작동) / 0.7초 동안 
    });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
     // gsap.to(요소, 지속시간(초단위), 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8 순차적으로 나타남
        opacity: 1
    });
});


// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    //horizontal 이 기본값이기 때문에 안넣어도 됨
    slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10,   // 슬라이드 사이 여백
    centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 //5초마다 한번씩 자동 슬라이드 되기
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        // 방향 넘기는 버튼
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion //반대값으로 반환하는 것
    if (isHidePromotion) {
        // 숨김 처리 !
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리 !
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // 애니메이션 동작 지속시간
        { // 옵션
            y: size,
            repeat: -1, // 무한반복 되도록 하는 기능
            yoyo: true, // 위로 올라갔다가 다시 내려가도록 함
            ease: Power1.easeInOut, // 움직임을 완화
            delay: random(0, delay) // random(min, max) 만큼 각자 지연시간 해당만큼
        });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); //추가한 옵션을 실제 동작할 수 있도록 하는 로직
});


//FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021