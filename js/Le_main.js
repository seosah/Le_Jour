$(function(){
  let menu1 = $('header nav .gnb > li');
  $(menu1).mouseenter(function(){
    $(this).find('.depth2_wrap').stop().slideDown();
  })//1th menu mouseenter

  $(menu1).mouseleave(function(){
    $(this).find('.depth2_wrap').stop().slideUp();
  })//1th menu mouseleave

  $('.util .lang').mouseenter(function(){
    $(this).children().stop().slideDown();
  })//lang mouseenter
  $('.util .lang').mouseleave(function(){
    $(this).find('ul').stop().slideUp();
  })//lang mouseleave

  $('.top_menu .search').click(function(){
    $('.search_box').stop().slideToggle();
  })//search click

  let header = document.querySelector ('header');
  $(window).scroll(function(){
    let scrollBar = window.scrollY;

    if(scrollBar > 0){
      /* console.log(scrollY); */
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }

    if($(window).width() <= 440){
      header.classList.remove('active');
    }
  })//window scroll

  /* header end */

  /* main_visual */
  var swiper = new Swiper(".mainVisual", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed : 2000,
    loop : true,
    slidesPerView: "auto",
    spaceBetween: 0,
  })//var

  /* main_visual end */

  /* main main_link start */

  AOS.init();

  $('.main_link .link_wrap .item').mouseenter(function(){
    $(this).css({
      'background-color' : '#52503A',
      'color': 'white',
    })
  })
  $('.main_link .link_wrap .item').mouseleave(function(){
    $(this).css({
      'background-color' : '',
      'color': '',
    })
  })

  /* main_link end */


  /* selection start */

  var swiper = new Swiper(".tab_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      //반응형
      //~~ 보다 클 때 실행
      500: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });


  $('.item_link').stop().animate({
    'bottom' : '-150px',
  }, 300)
  
  $('.item_pic').mouseenter(function(){
    /* $(this).find('.item_link').stop().slideDown(500); */
    $(this).find('.item_link').stop().animate({
      'bottom' : '20px',
    }, 300)
  })//item_pic mouseenter
  
  $('.item_pic').mouseleave(function(){
    /* $('.item_link').stop().slideUp(500); */
    $('.item_link').stop().animate({
      'bottom' : '-150px',
    }, 300)
  })//item_pic mouseleave

  /* animate (250) bottom */

  let tab = document.querySelectorAll ('.tab_menu li');
  let selectItem = document.querySelectorAll ('.select_set');

  for (let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', () => {
      tab.forEach (tab =>{
        tab.classList.remove ('active');
      })//forEach
      tab[i].classList.add ('active');

      selectItem.forEach (item => {
        item.classList.remove ('active');
      })//forEach
      
      selectItem[i].classList.add ('active');
    })//tab click event
      
  }//for

  $('.select_set .more').mouseenter(function(){
    $(this).css({
      'background-color' : '#E7C35D',
      'color' : '#53513D',
      'border' : '1px solid #E7C35D'
    })
  })
  $('.select_set .more').mouseleave(function(){
    $(this).css({
      'background-color' : '',
      'color' : '',
      'border' : ''
    })
  })

  /* selection end */

  /* event start */

  var swiper = new Swiper(".event_wrap", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed : 1500,
    loop : true,
    slidesPerView: "auto",
    spaceBetween: 0,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* event end */

  /* review start */

  var swiper = new Swiper(".review_wrap", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed : 1500,
  });

  /* review end */


  /* footer */

  /* foot_top start */

  var swiper = new Swiper(".notice", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      reversdirection: true,
    },
    speed : 2500,
  });

  /* footer_top end */

  let topBtn = $('.main_link').offset().top;
  
  $(window).scroll(function(){
    let scrollBar = $(window).scrollTop();
    if (scrollBar >= topBtn){
      $('.top_btn').fadeIn();
    } else if (scrollBar == 0){
      $('.top_btn').fadeOut();
    }
  })

  $('.top_btn').click(function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  })

})//script end