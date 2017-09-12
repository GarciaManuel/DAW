function show(){
  $('.ui.modal')
      .modal('show');
      document.querySelector('#amount').value = "";
  }
var q1 = 2;
var q2 = 5;
var q3 = 20;
var Item_Name = "";
var Item_Price = 0;
var Item_Description ="";
var Item_Discount=0;
var iva = 0;
var total = 0;
var amount = 0;
var image ="";
var quantity;
var name ="";

function assign(btn){
  switch (btn) {
    case "button_1":

    Item_Name = "Razer Pro Blade";
    Item_Price = 1250;
    Item_Description ="New Razer Pro Blade 2018 <br> Best Laptop for gamming/programming <br> Super discount only for 3 days more <br> Buy it now, they'll go faster than you think";
    Item_Discount=.15;
    quantity = q1;

    image = "images/razer.png"
      break;
      case "button_2":
      Item_Name = "Kickstarter Clock Limited Edition";
      Item_Price = 175;
      Item_Description ="Kickstarter Clock just for Men <br> Top gamma of clacks in the market, the only one's in the world <br> Take it now or wait 2 years until being able to buy it again <br> They're the last one's in stock, hurry!";
      Item_Discount=.05;
      quantity = q2;

        image = "images/clock.png"

        break;
      case "button_3":
      Item_Name = "iPhone 9 Plus";
      Item_Price = 276;
      Item_Description ="The prototype on sell of the next next iPhone <br> First time prototype sell <br> Believe it or not, it amazing you can see it  <br> Don't forgot to take all with you";
      Item_Discount=.10;
      quantity = q3;

        image = "images/iphone.png"

          break;
    default:

  }
}

function change(){
  let title = document.querySelector('#title');
  let image = document.querySelector('#image');
  let description = document.querySelector('#description');
  let cost = document.querySelector('#cost');
  let iva = document.querySelector('#iva');
  let total = document.querySelector('#total');

  title.textContent = Item_Name;
  switch (name) {
    case "button_1":
        image.src = "images/razer.png";
      break;
      case "button_2":
          image.src = "images/clock.png";
        break;
        case "button_3":
            image.src = "images/iphone.png";
          break;
    default:

  }
  description.innerHTML = Item_Description;
  cost.value = Item_Price;
  iva.value = iva;
  total.value = total;

}

// function view(){
//   let q = document.querySelector('#amount');
//   amount= q.value;
//   console.log(amount);
//   change();
//
// }
function values(){

  amount = document.querySelector('#amount').value;
  if(amount > quantity){
    alert("To much, we dont have that in stock");
  }
  else if (amount <0 ) {
    alert("You can't buy minus nothing");
  }
  else {
    iva = amount*(Item_Price-(Item_Price*Item_Discount))*.16;
    total= Item_Price*amount+iva;

    let ub_iva = document.querySelector('#iva');
    ub_iva.value = iva;

    let ub_total = document.querySelector('#total');
    ub_total.value = total;
    quantity = quantity-amount;


  }


}
function stock(){
  switch (name) {
    case "button_1":
      q1 = quantity;
      let b1 = document.querySelector('#q1');
      b1.textContent = q1;
      break;
      case "button_2":
      q2 = quantity+1;
      let b2 = document.querySelector('#q2');
      b2.textContent = q2;

        break;
        case "button_3":
          q3 = quantity+1;
          let b3 = document.querySelector('#q3');
          b3.textContent = q3;
          break;  amount = document.querySelector('#amount').value;
    default:

  }
}

$("#amount").on("change paste keyup", function() {
    values();
});

var buttons = document.querySelectorAll('.dele');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",function(btn){
    name = btn.srcElement.id;
    assign(name);
    change();
    show();

  });
}

var ratio = 1.5;
setInterval(function(){

    var ans = ratio + "em"
    document.querySelector('#tab').style.fontSize=ans ;
    ratio = 1;


}, 1000);

setTimeout(function(){
document.querySelector('#take').classList.remove('hidden');

}, 5000);


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
