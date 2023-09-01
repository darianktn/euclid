const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const body = document.body;
const navItems = nav?.querySelectorAll('a')

burger?.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  nav.classList.toggle('nav--active');
  burger?.classList.toggle('burger--active');

});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    nav.classList.remove('nav--active');
    burger?.classList.remove('burger--active');
  });
});
