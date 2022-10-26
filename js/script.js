window.onload = function () {
  AOS.init();

  const snsMenuOpen = $('.sns-menu-list > i');
  const snsMenu = $('.sns-menu-list > ul');
  snsMenuOpen.click(function () {
    snsMenu.stop().slideToggle();
    if (snsMenuOpen.hasClass('fa-ellipsis-h')) {
      snsMenuOpen.removeClass('fa-ellipsis-h');
      snsMenuOpen.addClass('fa-times');
    } else {
      snsMenuOpen.addClass('fa-ellipsis-h');
      snsMenuOpen.removeClass('fa-times');
    }
  });

  // 위로가기
  let goTop = $('.go-top');
  goTop.click(function () {
    scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // 화면이동시 커서 유지
  let Section = $('section');
  let sectionH = [];
  let gnbLi = $('.gnb > li > a')
  
  $.each(Section, function (index) {
    let Wh = Math.ceil($(this).offset().top - 80);
    sectionH[index] = Wh
    new Waypoint({
      element: $(this),
      handler: function (direction) {
        if (direction == 'down') {
          gnbLi.removeClass('gnb-active');
          gnbLi.eq(index).addClass('gnb-active')
        } else if (direction == 'up') {
          let upIndex = index - 1;
          gnbLi.removeClass('gnb-active');
          gnbLi.eq(upIndex).addClass('gnb-active')
        }
      },
      offset: '50%',
    });
  });

  $.each(gnbLi, function (index) {
    $(this).click(function (event) {
      event.preventDefault();
      scrollTo({
        top: sectionH[index],
        left: 0,
        behavior: 'smooth',
      })
    })
  });

  // mywork누르면 portfolio로 
  const readMe = $('.readme');
  // const myWork = $('#portfolio')
  readMe.click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top - 80
    }, 2000);
  })

  new Swiper(".sw-about", {
    slidesPerView: 1,
    direction: "vertical",
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    loopFillGroupWithBlank: true,
  });


  // 프로필 페이지 도착시 프로그래스바 실행
  let profile = $('.skill');
  new Waypoint({
    element: profile,
    handler: function (direction) {
      barAni();
    },
    offset: '70%',
  });

  function makeLine(_id, _startColor, _endColor) {
    let bar = new ProgressBar.Line(_id, {
      color: "#777",
      strokeWidth: 10,
      trailWidth: 5,
      easing: "easeOut",
      duration: 2500,

      text: {
        autoStyleContainer: false,
      },
      from: {
        color: _startColor,
        width: 3,
      },
      to: {
        color: _endColor,
        width: 6,
      },
      step: function (state, line) {
        line.path.setAttribute("stroke", state.color);
        line.path.setAttribute("stroke-width", state.width);

        let value = Math.round(line.value() * 100);
        if (value === 0) {
          line.setText("");
        } else {
          line.setText(value + '%');
        }
      },
    });
    bar.text.style.fontFamily = "LeferiBase";
    bar.text.style.fontSize = "15px";
    bar.text.style.fontWeight = "500";
    bar.text.style.color = "#333";
    return bar;
  }

  let bar_html = makeLine(html, "#fafad2", "#e8a9a2");
  let bar_css = makeLine(css, "#fafad2", "#e8a9a2");
  let bar_js = makeLine(js, "#fafad2", "#e8a9a2");
  let bar_jquery = makeLine(jquery, "#fafad2", "#e8a9a2");
  let bar_scss = makeLine(scss, "#fafad2", "#e8a9a2");
  let bar_vue = makeLine(vue, "#fafad2", "#e8a9a2");
  let bar_figma = makeLine(figma, "#fafad2", "#e8a9a2");
  let bar_github = makeLine(github, "#fafad2", "#e8a9a2");
  let bar_notion = makeLine(notion, "#fafad2", "#e8a9a2");

  let barAni = () => {
    bar_html.animate(0.95);
    bar_css.animate(0.9);
    bar_js.animate(0.75);
    bar_jquery.animate(0.8);
    bar_scss.animate(0.8);
    bar_vue.animate(0.75);
    bar_figma.animate(0.88);
    bar_github.animate(0.85);
    bar_notion.animate(0.90);
  };


  // const progressbarText = $('.progressbar-text');
  // setTimeout(function () {
  //   progressbarText.css('left', 110 + '%');
  // }, 50)


  // let swPortfolio = new Swiper(".sw-portfolio", {
  //   slidesPerView: 5,
  //   spaceBetween: 5,
  //   slidesPerGroup: 1,
  //   centeredSlides: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 3100,
  //   },
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  // });

  // let portfolio = $('.sw-portfolio')
  // portfolio.hover(function () {
  //   swPortfolio.autoplay.stop()
  // }, function () {
  //   swPortfolio.autoplay.start()
  // });


  // 라이프 슬라이드
  const swLife = new Swiper('.sw-life', {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
    },
  });

  swLife.on("slideChange",function(){
    const activeLife = swLife.realIndex;
    tagList.removeClass('active');
    tagList.eq(activeLife).addClass('active');
  })

  // life 탭메뉴 효과
  const tagList = $('.tag-list');
  tagList.eq(0).addClass('active');
  $.each(tagList,function(index){
    $(this).click(function(e){
      e.preventDefault();
      tagList.removeClass('active');
      tagList.eq(index).addClass('active');
      swLife.slideTo( index + 1 , 500 , false );
      swLife.autoplay.start();
    })
  })
  

}