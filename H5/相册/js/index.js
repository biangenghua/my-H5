let $btn = $('.music_icon');
let $audio = $('#audio')

//判断是否在旋转
let isRunning = false;
$btn.on('touchend', function () {
  // 怎么判断是否转圈
  if (isRunning) {
    // 若按钮转就让他停
    $(this).css({ animationPlayState: 'paused' });
    isRunning = false;
    $audio[0].pause()
  } else {
    $(this).css({ animationPlayState: 'running' });
    isRunning = true;
    $audio[0].play()
  }
})

var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: true, // 循环模式选项
  autoplay: false,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    }
  }
})        