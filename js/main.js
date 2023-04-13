// 검색창 요소(.search) 선택 시 강제 포커스 및 제어
const searchEl = document.querySelector('.search');
// const searchinputEl = document.querySelector('.search input'); 아래와 같이 최적화
const searchinputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input요소를 포커스하도록 설정
searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchinputEl.focus(); //포커스 강제 적용
});

//input 요소에 포커스되면 실행
searchinputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchinputEl.setAttribute('placeholder', '통합검색'); //setattribute - html 속성을 추가하는 메소드
});

//input 요소에 포커스 해제(불러)되면 실행
searchinputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchinputEl.setAttribute('placeholder', '');
});

// 스크롤 시 전역 배지(고정 배지) 숨기기
const badgeEl = document.querySelector('header .badges');

// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // y축으로 얼마나 스크롤 했는지에 대한 수치
  // console.log(window.scrollY);

  // 만약 y축으로 스크롤 한 수치가 500을 초과하면 배지 요소를 숨기고 그렇지 않으면 다시 보이기
  if (window.scrollY > 500) {
    // 배지 요소 숨기기
    badgeEl.style.display = "none";
  } else { //배지 요소 보이기
    badgeEl.style.display = "block";
  }

});