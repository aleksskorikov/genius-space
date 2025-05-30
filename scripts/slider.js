
    $(document).ready(function(){
        $('.logos-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 8000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
            }
        ]
        });
    });

    $(document).ready(function(){
        $('.running__line-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 8000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
            }
        ]
        });
    });

