/*=============== SHOW MENU ===============*/
const NAVMENU = document.querySelector('.nav-menu'),
NAVTOGGLE = document.querySelector('.nav-toggle'),
NAVCLOSE = document.querySelector('.nav-close'),
toggleMenu = () => NAVMENU.classList.toggle('open')

NAVTOGGLE.onclick = toggleMenu
NAVCLOSE.onclick = toggleMenu

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const NAVLINK = document.querySelectorAll('.nav-link').forEach(el => el.onclick = toggleMenu)

/*=============== ADD BLUR TO HEADER ===============*/
const HEADER = document.querySelector('.header')
const blurHeader = () => this.scrollY >= 50 ? HEADER.classList.add('blur') : HEADER.classList.remove('blur')

/*=============== SHOW SCROLL UP ===============*/ 
const SCROLLUP = document.querySelector('.scrollup')
const scrollUp = () => this.scrollY >= 350 ? SCROLLUP.classList.add('show') : SCROLLUP.classList.remove('show')

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const SECTIONS = document.querySelectorAll('section[id]')
const activeSections = () => {
  SECTIONS.forEach(el => {
    const sectionHght = el.offsetHeight,
    sectionTop = el.offsetTop -58,
    sectionId = el.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
    if(scrollY > sectionTop && scrollY < sectionTop + sectionHght) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}

/*=============== COMBINE ALL SCROLL FUNCTIONS ===============*/
const handleScroll = () => {
  blurHeader()
  scrollUp()
  activeSections()
};

/*=============== ASSIGN TO WINDOW ONSCROLL ===============*/
window.onscroll = handleScroll

/*=============== SWIPER OPTIONS ===============*/
let swiperFavorite = new Swiper('.favorite-swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  grabCursor: true,
  breakpoints: {
    768: {slidesPerView : 3,}
  }
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
