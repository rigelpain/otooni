// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider';

// Main Slider
let mainSliderOptions = {
  loop: false,
  speed:2000,
  // parallax:true,
  // autoplay:{
  //   delay:3000
  // },
  autoplay:false,
  // loopAdditionalSlides: 7,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  on: {
    init: function(){
      this.autoplay.stop();
    },
    imagesReady: function(){
      this.el.classList.remove('loading');
      // this.autoplay.start();
    }
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
      loop: false,
      // loopAdditionalSlides: 100,
      speed:2000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);


  mainSlider.on('slideChange', function () {
  console.log('現在のスライド番号： ' + (this.activeIndex+1));
  console.log("video-" + (this.activeIndex+1));
  if(this.activeIndex<11){
    document.getElementById("video-" + (this.activeIndex+1)).play();
  }
});


// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;