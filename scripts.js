bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    duration: 600,
    autoplaySpeed: 5000,
    breakpoints: [{ changePoint: 480, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 } ],
  });