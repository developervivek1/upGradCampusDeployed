const select = document.querySelectorAll(".form-elem .custom-select .box p");
const inserror = document.querySelector('#insError');
const proerror = document.querySelector('#proError');
const form = document.querySelector('#contactForm');
const btnValidate = document.querySelector('form .form-check > button');
const username = document.querySelector('form #firstName');
const email = document.querySelector('form #email');
const phone = document.querySelector('form #phoneNumber');
const insname = document.querySelector('form #institution');
let usernameVal;

btnValidate.addEventListener('click', (e) => {
  e.preventDefault();
  validate();
  validateselect();
});


// for final data validation
const successmsg = (usernameVal) => {
  let formcon = document.querySelectorAll('.form-elem');
  if (Array.from(formcon).every(form => form.classList.contains('success'))) {
    swal("Welcome! " + usernameVal, "Your response has been recorded");
    // location.href=`demo.html?username=${usernameVal}`;
  }
  else {
    return false;
  }
}

const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1)
    return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2)
    return false;
  if (dot === emailVal.length - 1)
    return false;

  return true
}

//define the validate function
const validate = () => {
  usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const insnameVal = insname.value.trim();

  //validate username
  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank");
  }
  else if (usernameVal.length < 2) {
    setErrorMsg(username, "Username must be minumum of 2 character");
  }
  else {
    setSuccessMsg(username);
  }

  //validate email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  }
  else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Provide valid email");
  }
  else {
    setSuccessMsg(email);
  }

  //validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone number cannot be blank");
  }
  else if (phoneVal.length != 10) {
    setErrorMsg(phone, "Phone number must contain 10 number");
  }
  else {
    setSuccessMsg(phone);
  }

  //validate institution
  if (insnameVal === "") {
    setErrorMsg(insname, "Institute/Organization name cannot be blank");
  }
  else if (insnameVal.length < 2) {
    setErrorMsg(insname, "Institute/Organization name must be minumum of 2 character");
  }
  else {
    setSuccessMsg(insname);
  }
  successmsg(usernameVal);
}

const setErrorMsg = (input, errormsgs) => {
  const FormControl = input.parentElement;
  const small = FormControl.querySelector('.invalid-feedback');
  FormControl.className = 'form-elem error';
  small.innerText = errormsgs;
}

const setSuccessMsg = (input) => {
  const FormControl = input.parentElement;
  const small = FormControl.querySelector('.invalid-feedback');
  FormControl.className = 'form-elem success';
  small.innerText = '';
}
form.addEventListener('click', (e) => {
  e.preventDefault();
});


function validateselect() {
  let selcount = 0;
  for (let i = 0; i < select.length; i++) {
    if (select[i].innerText === "Institute/Organization type*") {
      inserror.innerText = "Please Select Institute";
      selcount++;
    }
    else if (select[i].innerText === "Which Product you are Interested in*") {
      proerror.innerText = "Please Choose Product";
      selcount++;
    }
    else {
      let parent = select[i].closest('.form-elem');
      parent.classList.add('success');
      let span = select[i].closest(".form-elem").parentNode.querySelector("span.selerror");
      span.innerText = "";
    }
  }

  if (selcount === 1 || selcount === 2) {
    return false;
  }
  else {
    successmsg(usernameVal);
  }
}

// custom select

const boxTrigger = document.querySelectorAll('.form-elem .box');
const boxContent = document.querySelectorAll('.form-elem .box p');
const options = document.querySelectorAll('.form-elem .option-container .option');
const optOverlay = document.querySelector('.formoverlay');

boxTrigger.forEach((box, ind) => {
  box.addEventListener('click', (e) => {
    pindex = ind;
    let optContainer = e.target.closest('.custom-select').querySelector('.option-container');
    let boxImg = e.target.closest('.custom-select').querySelector('.box img');
    if (!optContainer.classList.contains('active')) {
      boxImg.style.transform = 'rotate(180deg)';
      optOverlay.classList.add('active');
      optContainer.classList.add('active');
    }
    else {
      boxImg.style.transform = 'rotate(0deg)';
      optOverlay.classList.remove('active');
      optContainer.classList.remove('active');
    }
  })
})
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    e.stopPropagation();
    let containerClose = e.target.closest('.option-container');
    let boxImg = e.target.closest('.custom-select').querySelector('.box img');
    optOverlay.classList.remove('active');
    boxImg.style.transform = 'rotate(0deg)';
    boxContent[pindex].innerText = e.target.innerText;
    containerClose.classList.remove('active');
  })
})

optOverlay.addEventListener('click', function () {
  let activeoption = document.querySelector('.option-container.active');
  let boxImg = activeoption.closest('.custom-select').querySelector('.box img');
  boxImg.style.transform = 'rotate(0deg)';
  activeoption.classList.remove('active');
  this.classList.remove('active');
})
