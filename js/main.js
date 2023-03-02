const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll',_.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none',
    });
    //버튼 보이기
    gsap.to(toTopEl,.2,{
      x: 0
    })
    gsap
  }else{
    //배지 보여주기
    gsap.to(badgeEl,.6,{
      opacity: 1,
      display: 'block',
    });
    //버튼 숨기기
    gsap.to(toTopEl,.2,{
      x: 100
    })
  }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click',() => {
    gsap.to(window, .7, {
      scrollTo: 0
    })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  console.log(fadeEl)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드
  spaceBetween: 10,
  centeredSlides: true,
  // loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  // autoplay: true,
  // loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide')
  }else{
    //보임 처리
    promotionEl.classList.remove('hide')
  }
})

function random(min,max){
  return parseFloat((Math.random() * (max - min) + min))
}
function floatingObject(selector, delay, size){
  //gsap.tp(요소, 지속시간, 옵션)
  gsap.to(
    selector, //선택자
    random(1.5,2.5), //애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();


