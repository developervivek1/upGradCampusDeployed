let setOfevents = ['mousemove','mousedown','scroll','click','dblclick','mouseleave','mouseenter','resize'];

function recursion(e){
  if(setOfevents.includes(e.type)){
      clearTimeout(dispSubscribe);
  }
  else{
    setTimeout(dispSubscribe, 15000);
    recursion(e);
  }
}
window.addEventListener('load', (e)=>{
  recursion(e);
});

setTimeout(dispSubscribe, 15000);
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