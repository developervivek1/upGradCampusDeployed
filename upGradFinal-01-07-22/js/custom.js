const select = document.querySelectorAll("#institute");
const inserror = document.querySelector('#insError');
const proerror = document.querySelector('#proError');


/* ===== Logic for phone number ===== */
function phoneMask() { 
  var num = $(this).val().replace(/\D/g,''); 
  $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
}
$('[type="tel"]').keyup(phoneMask);


/* ===== Logic for Select Boxes (contact-form) ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});


/* ===== Logic for Form Validation ===== */

         (function() {
           window.addEventListener('load', function() {
             var forms = document.getElementsByClassName('needs-validation');
       
             var validation = Array.prototype.filter.call(forms, function(form) {
               form.addEventListener('submit', function(event) {
                  validateselect();
                 if (form.checkValidity() === false) {
                   event.preventDefault();
                   event.stopPropagation();
                 }
                 form.classList.add('was-validated');
               }, false);
             });
           }, false);
         })();
 
//=========================================================

function validateselect(){ 
   let selcount=0;
   for(let i=0;i<select.length;i++)
           {
              if(select[i].value==="Institute/Organization type*")
              {

                inserror.innerText="Please Select Institute";
                selcount++;
              }
              else if(select[i].value==="Which Product you're Interested in*")
              {
                proerror.innerText="Please Choose Product";
                selcount++;
              }
              else
              {
                let span=select[i].closest(".sel").querySelector("span.selerror");
                span.innerText="";
              }

           }

           if (selcount===1 || selcount===2) { 
            console.log("Hello")
            return false;
           }
}

