// Nav bar

// const a = document.getElementById("nav")
const b = document.getElementById("change");
function navresponsive() {
  // a.classList.toggle("show")
  document.body.classList.toggle("overflow_hidden");
  b.classList.toggle("change");
}

// back-to-top//
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// preloader

setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";

  document.body.classList.remove("overflow-hidden");
}, 1500);

// Slider

$(".single_item").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".r_arrow"),
  nextArrow: $(".l_arrow"),
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  infinite: true,
  dot: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const playbtn = document.getElementById("video_play_btn");

const playVideo = () => {
  playbtn.classList.add("d-none");
  console.log(playbtn, "playbtn");
};
// aos
