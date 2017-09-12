 document.querySelector("#r").classList.toggle('error');
function validate(){
  let xx = document.querySelector('#good');
  let yy = document.querySelector('#bad');
  if(xx.classList.contains('hidden'))
      xx.classList.toggle('hidden');
      if(yy.classList.contains('hidden'))
          yy.classList.toggle('hidden');

  var password = document.querySelector('#pass1');
  var confirm = document.querySelector('#pass2');
  if(password.value == confirm.value){
    var x = document.querySelector("#bad")
    x.classList.toggle('hidden');
obtain();


  }
  else {
    var x = document.querySelector("#good")
    x.classList.toggle('hidden');

  }
}
document.querySelector('#name').addEventListener("click", function(){
  document.querySelector('#divhid').classList.add('hidden');
  document.querySelector('#msg').textContent="Name";
});
document.querySelector('#name').addEventListener("mouseout", function(){
  document.querySelector('#divhid').classList.remove('hidden');
});
document.querySelector('#tel').addEventListener("click", function(){
  document.querySelector('#divhid').classList.add('hidden');
  document.querySelector('#msg').textContent="Telephone";
});
document.querySelector('#tel').addEventListener("mouseout", function(){
  document.querySelector('#divhid').classList.remove('hidden');
});
document.querySelector('#email').addEventListener("click", function(){
  document.querySelector('#divhid').classList.add('hidden');
  document.querySelector('#msg').textContent="Email";
});
document.querySelector('#email').addEventListener("mouseout", function(){
  document.querySelector('#divhid').classList.remove('hidden');
});
document.querySelector('#pass1').addEventListener("click", function(){
  document.querySelector('#divhid').classList.add('hidden');
  document.querySelector('#msg').textContent="Password";
});
document.querySelector('#pass1').addEventListener("mouseout", function(){
  document.querySelector('#divhid').classList.remove('hidden');
});
var quest = document.querySelectorAll('.collection-item');
for (var i = 0; i < quest.length; i++) {
  quest[i].addEventListener("mouseover", function(q){
    q.srcElement.style.fontSize="1.5em";
  });
  quest[i].addEventListener("mouseout", function(q){
    q.srcElement.style.fontSize="1em";
  });
}




var name ="";
var email ="";
var cel ="";
var pass="";

function obtain(){
  name = document.querySelector('#name').value;
  cel = document.querySelector('#tel').value;
  email = document.querySelector('#email').value;
  pass = document.querySelector('#pass1').value;

  document.querySelector('#wn').textContent+=name;
  document.querySelector('#wc').textContent+=cel;
  document.querySelector('#we').textContent+=email;
  document.querySelector('#wp').textContent+=pass;

  $('.ui.basic.modal')
  .modal('show')
;
document.querySelector('#name').value = "";
document.querySelector('#tel').value = "";
document.querySelector('#email').value = "";
document.querySelector('#pass1').value = "";
}
