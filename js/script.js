
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
  })

  // 화면이동시 커서 유지
  let Section = $('section');
  let sectionH = [];
  let gnbLi = $('.gnb > li > a')
  console.log(gnbLi)

  $.each(Section, function (index) {
    let Wh = Math.ceil($(this).offset().top-80);
    sectionH[index] = Wh
    console.log(sectionH)
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
  })


  new Swiper(".sw-about", {
    slidesPerView: 1,
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1000,
    },
    loopFillGroupWithBlank: true,
  });


  function makeCircle(_id, _str, _startColor, _endColor) {
    let bar = new ProgressBar.Circle(_id, {
      color: "#777",
      strokeWidth: 5,
      trailWidth: 5,
      easing: "easeOut",
      duration: 1400,

      text: {
        autoStyleContainer: false,
      },
      from: {
        color: _startColor,
        width: 5,
      },
      to: {
        color: _endColor,
        width: 5,
      },
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        let value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(_str + "<br>" + value + '%');
        }
      },
    });
    bar.text.style.fontFamily = "LeferiBase";
    bar.text.style.fontSize = "15px";
    bar.text.style.color = "#333";
    return bar;
  }

  let html = makeCircle(html, "HTML", "#fafad2", "#e8a9a2");
  let css = makeCircle(css, "CSS", "#fafad2", "#e8a9a2");
  let js = makeCircle(js, "JS", "#fafad2", "#e8a9a2");
  let jquery = makeCircle(jquery, "JQuery", "#fafad2", "#e8a9a2");
  let scss = makeCircle(scss, "SCSS", "#fafad2", "#e8a9a2");
  let vue = makeCircle(vue, "Vue.js", "#fafad2", "#e8a9a2");
  let figma = makeCircle(figma, "Figma", "#fafad2", "#e8a9a2");
  let github = makeCircle(github, "Github", "#fafad2", "#e8a9a2");
  let notion = makeCircle(notion, "Notion", "#fafad2", "#e8a9a2");

  
  let barAni = () => {
    html.animate(0.95);
    css.animate(0.91);
    js.animate(0.72);
    jquery.animate(0.78);
    scss.animate(0.8);
    vue.animate(0.7);
    figma.animate(0.9);
    github.animate(0.9);
    notion.animate(0.9);
  };

  barAni();



  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: ['책임감', '노력', '도전정신', '전문성', '의사소통'],
          datasets: [{
              label: 'possibility',
              data: [97, 90, 95, 93, 100],
              backgroundColor: [
                  'rgba(217, 217, 217, 0.2)',
              ],
              borderColor: [
                  'rgba(217, 217, 217, 1)',
              ],
              pointBackgroundColor: 'rgb(190, 163, 200)',
              borderWidth: 3
          }]
      },
      options: {
          responsive: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              r: {
                  pointLabels: {
                      font: {
                          size: 20,
                          family: 'GangwonEdu_OTFBoldA',
                      },
                      color: 'rgb(250, 206, 199, 0.7)'
                  },
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(222, 185, 146, 0.4)',
                },
                angleLines: {
                    color: 'rgba(222, 185, 146, 0.4)'
                },
              }
          },
          ticks: {
              suggestedMin: 0,
              suggestedMax: 100,
              stepSize: 5,
              maxTicksLimit: 10,
              display: false
          }
      }
  });



  let swPortfolio = new Swiper(".sw-portfolio", {
    slidesPerView: 3,
    spaceBetween: 100,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1000000000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  let portfolio = $('.sw-portfolio')
  console.log(portfolio)
  portfolio.hover(function() {
    swPortfolio.autoplay.stop()
  }, function() {
    swPortfolio.autoplay.start()
  })
}