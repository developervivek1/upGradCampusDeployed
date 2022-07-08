const wapp = document.querySelector('.whatsapp');
const allImg = document.querySelectorAll('img');

allImg.forEach(img => {
  img.setAttribute('loading','lazy');
});

// whatsapp Pop
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

// popup modal
let setOfevents = ['mousemove','mousedown','scroll','click','dblclick','mouseleave','mouseenter','resize'];
let setTimeforPop;

setOfevents.forEach((e)=>{
  window.addEventListener(e, detecttype);
})

function detecttype(event) {
  if(setOfevents.includes(event.type)){
    clearTimeout(setTimeforPop);
    setTimeforPop = setTimeout(dispSubscribe, 15000);
  }
}

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(dispSubscribe, 15000);
})

function dispSubscribe(){
  let modal = document.querySelector('#subscribeModal');
  let overlay = document.querySelector('.overlay');
  modal.classList.add('show');
  overlay.classList.add('active');
  modal.addEventListener('click',()=>{
    if(modal.classList.contains('show')){
      modal.classList.remove('show');
      overlay.classList.remove('active');
    }
  })
}