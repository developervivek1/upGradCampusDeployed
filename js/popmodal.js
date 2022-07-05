let setOfevents = ['mousemove','mousedown','scroll','click','dblclick','mouseleave','mouseenter','resize'];

setOfevents.forEach((e)=>{
  window.addEventListener(e, detecttype);
})

function detecttype(event) {
  // if (event===undefined) event= window.event;
  // let target= 'target' in event? event.target : event.srcElement;
  if(setOfevents.includes(event.type)){
    clearTimeout(setTimeforPop);
    setTimeforPop = setTimeout(dispSubscribe, 15000);
  }
}

let setTimeforPop = setTimeout(dispSubscribe, 15000);

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