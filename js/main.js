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
    // badgeEl.style.display = "none";

    //gsap.to(요소, 지속시간, 옵션: {}) 메소드: css 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else { //배지 요소 보이기
    // badgeEl.style.display = "block";

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션: {}) 메소드: css 속성을 통해 애니메이션 처리
  gsap.to(fadeEl, 1, {
    // delay: 몇 초 뒤에 실행될 것인가
    delay: (index + 1) * 0.7, //0.7 1.4 2.1 2.8
    opacity: 1
  });

});

//공지사항 수직 슬라이드 기능 작성
// new 키워드로 swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(선택자, 옵션: {});
new Swiper('.notice .swiper', {
  direction: 'vertical', //수직 슬라이드
  loop: true, //반복 재생 여부
  autoplay: true, //자동 재생 여부
});

// 프로모션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  direction: 'horizontal', //수평 슬라이드(기본값)
  loop: true, //반복 재생 여부
  autoplay: {
    delay: 5000 //5초마다 슬라이드 바뀜(기본값: 3000)

  }, //자동 재생 여부
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수(기본값: 1)
  spaceBetween: 10, //슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { //페이지 번호 사용
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },

  navigation: { //슬라이드 이전,다음 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

//프로모션 섹션 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');
// 토글 버튼을 클릭했을 때 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리
// ('hide'클래스를 제거하고 아이콘 모양을 'upload;로 설정) 그렇지 않으면 숨김 처리
// ('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)

promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';

  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }
});




