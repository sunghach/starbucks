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


//FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021