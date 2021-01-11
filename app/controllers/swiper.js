import Controller from '@ember/controller';

Controller.extend({
  myOptions: { 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    } 
  }
});
