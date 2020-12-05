import $ from 'jquery';

const slider = () => {
  $('.discover-content__wrapper').slick({
    dots: true,
    arrows: false,
    dotsClass: 'discover-content__rectangle__box__bottom',
    appendDots: '.discover-content__wrapper',
  })
}

export { slider };
