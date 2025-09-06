
const el = (id)=>{
return document.getElementById(id)
}

wow = new WOW(
  {
      animateClass: 'animate__animated',
  }
)
wow.init();

// перемикаємо стилі моб меню
const toggleMenu = () => { 
  document.body.classList.toggle('open-menu') 
  if(document.body.classList.contains('open-menu')){
      document.getElementById('header').classList.add('scrolled')
  } else if(!document.body.classList.contains('open-menu') && (window.scrollY < 250 ||window.scrollY === 0) ) {
      document.getElementById('header').classList.remove('scrolled')
  }
}


window.addEventListener('resize', function () {
  if (window.innerWidth >= 992 && document.body.classList.contains('open-menu')) {
      document.body.classList.remove('open-menu')
  }
})



//Додаємо клас до хедеру при скролі
let isScrolled = false;


window.addEventListener("scroll", () => {
  if (!isScrolled && window.scrollY > 250) {
    header.classList.add("scrolled");
    isScrolled = true;
  } else if (isScrolled && window.scrollY < 250 && !document.body.classList.contains("open-menu")) {
    header.classList.remove("scrolled");
    isScrolled = false;
  }
});

// перемикаємо активний стиль в навігації
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const mobLinks = document.querySelectorAll(".mob-menu a");

const setActiveNav = (links, id) => {
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {           
        setActiveNav( navLinks, entry.target.id)
        setActiveNav( mobLinks, entry.target.id)        
      }
    });
  },
  { threshold: 0.5 } // якщо 50% елементу на сторінці - значить він активний
);

sections.forEach(section => observer.observe(section));



//jQuerry





$(document).ready(function() {
  const heroHeight = $('#hero').height();

  $('#hero-slider').lightSlider({
    item: 1,
    slideMargin: 0,
    vertical: true,
    mode: 'vertical',
    verticalHeight: heroHeight,
    pager: true,
    controls: false,
    loop: true,
    enableTouch: false, 
    enableDrag: false
  });


  $(window).on('resize', function () {
    const newHeight = $('#hero').height();
    $('#hero-slider').data('lightSlider').refresh({
      verticalHeight: newHeight
    });
  });

  
//News
    const slider = $("#slider").lightSlider({
        controls: false,
        slideMargin: 20,        
        item: 3,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 5, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1
                    
                }
            }
        ]
    });

    $(".btn.left").click (()=>{slider.goToPrevSlide()});
    $(".btn.right").click (()=>{slider.goToNextSlide()});    
    
});
//jQuerry

//Toast 
const sucsess = Toastify({
  text: "Message successfully  sent",
  duration: 3500,  
  newWindow: true,
  gravity: "top",
  position: 'left',
  close: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
})
const error = Toastify({
  text: "Unfortuently message not sended",
  duration: 3500,  
  newWindow: true,
  gravity: "top",
  position: 'left',
  close: true,
  style: {
    background: "linear-gradient(to right, #ff5f6d, #ffc371)",
  }
})


//TG sending
let formInProgress = false
const form = document.getElementById('customer-info')
form.onsubmit = async function(e){
  e.preventDefault()
  if(formInProgress){return}
  formInProgress = true

  const BOT_TOKEN = '8304509656:AAEhDG8ME06BOi1vv7RKbp2LVqw6P47v8j4'
  const CHAT_ID = '-4918528659'

  const userName = document.getElementById('name').value
  const userEmail = document.getElementById('email').value

 const message = `<b>User name:</b> ${userName}%0a` +
                  `<b>Email:</b> ${userEmail}`

  const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
  const answer = await resp.json()
  if(answer.ok){
    sucsess.showToast()
    form.reset()
  }else{
    error.showToast()
  }
  formInProgress = false
}


