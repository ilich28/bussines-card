$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.Background').toggleClass('lock');
  });
});
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  loop:true,
   autoplay: {
    delay: 3000,
    disableOnInteraction:false,    
  },

});