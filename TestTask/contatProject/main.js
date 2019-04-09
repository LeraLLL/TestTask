
document.addEventListener("DOMContentLoaded", start);

function start(){
  var btn = document.querySelector('button'),
      name = document.querySelector('input[name="name"]'),
      title = document.querySelector('input[name="title"]'),
      mail = document.querySelector('input[name="mail"]'),
      comment = document.querySelector('textarea[name="comment"]');

  if(!!btn){
    btn.addEventListener('click', function(){
      checkForFullnes(title)
      checkForFullnes(name)
      checkForFullnes(comment)
      checkForFullnes(mail)
      if(!document.querySelector('.error')){

          alert('Данные заполнены!')
        }
    })
  }
}

function checkForFullnes(elem){
  if(!!elem){
    if(elem.value === ''){
      elem.classList.add('error');
      return false;
    }else {
      elem.classList.remove('error');
      return true;
    }
  }
}

function validateMail(mail){
  if(!!mail){
    if(!mail.value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) || !mail.value!==''){
      mail.classList.add('error');
      return false;
    }else {
      mail.classList.remove('error');
      return true;
    }
  }
}
