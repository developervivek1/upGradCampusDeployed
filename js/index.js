const wapp = document.querySelector('.whatsapp');

window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(() => {
    if(!wapp.classList.contains('active')){
      wapp.classList.add('active');
    }
  }, 5000);
  
  setTimeout(() => {
    if(wapp.classList.contains('active')){
      wapp.classList.remove('active');
    }
  }, 300000);
})


//owl carouse
$(document).ready(function () {
  $('.owl-one').owlCarousel({
    center: true,
    items: 4,
    loop: true,
    autoplay:true,
    autoplayTimeout: 2500,
    dots: false,
    autoplayHoverPause: true,
    margin: 20,
    smartSpeed: 500,
    responsive: {
      0: {
        stagePadding: 20,
        items: 1
      },
      600: {
        items: 2,
        autoplay:false,
      },
      700: {
        items: 3,
        autoplay:false,
      },
      1024: {
        items: 4,
      }
    }
  });
  $('.owl-two').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 2
      },
      1000: {
        items: 6
      }
    }
  });
});

// counter
const counters = document.querySelectorAll(".count");
  const speed = 50;
  const speed2 = 2;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      const increment2 = Math.trunc(target / speed2);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      }
      else {
        count.innerText = target;
      }
    };
    updateCount();
  });