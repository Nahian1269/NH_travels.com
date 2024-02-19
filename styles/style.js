let add = [];
let total_price = 0;
let t_seat = 40;
let num = 0;

function realme(name, name2, price) {
  add.push({ name, name2, price });
  total_price += price;

  reload();
}

function reload() {
  const cartelement = document.getElementById("itmes");
  const totalprice = document.getElementById("price");
  totalprice.textContent = total_price;
  cartelement.innerHTML = "";
  add.forEach((item) => {
    const li = document.createElement("li");
    li.style.listStyle="none";
    li.textContent = `${item.name}---------------------${item.name2}-----------------$${item.price}`;
    cartelement.appendChild(li);
  });

  let counter = num++;
  let caller = document.getElementById("cc");
  caller.textContent = num;

  if(num>4){
    alert("can't Purches more than 4");
    const took = document.getElementById("btn-2"); 
    took.style.display="none" ;
  }

  let calc = --t_seat;
  let must = document.getElementById("XL");
  must.textContent = calc + " Seat left";

  if (t_seat == 0) {
    alert("No seat availabe");
    let dis = document.getElementById("count");
  }

  // let cat = document.getElementById("del"); 
  // cat.addEventListener('click', () => {
  //   const listIt = document.getElementById("li") ; 
  //   const lastitem = listIt.lastElementChild ; 
  //   listIt.removeChild(lastitem);
  // });
  
  pricer();
}

function pricer() {
  let price1 = total_price;
  let call = document.getElementById("Gp");
  call.textContent = "BDT" + price1;
  Cuppon();
  ripper();
  couple();
}

function Cuppon() {
  let take = total_price;
  if (take >= 2000) {
    let cut = parseInt(take * 0.2);
    let final = take - cut;
    document.getElementById("Gp").textContent = final;
  }
}

document.getElementById('btn-2').addEventListener('click', function() {
  document.getElementById('success').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('success').style.display = 'none';
});

function clickme(){
  document.getElementById("press").style.display="none"
  document.getElementById("cns").style.display="none"
  document.getElementById("lol").style.display="none"
  document.getElementById("tot").style.display="none"
}

function pres(){
  document.getElementById("press").style.display="block"
  document.getElementById("cns").style.display="block"
  document.getElementById("lol").style.display="block"
  document.getElementById("tot").style.display="block"
}

function ripper(){

  document.getElementById('roundup').addEventListener('click', function() {
    var couponInput = document.getElementById('box').value;
    var validCoupon ="NEW15";
    var validCoupon2="Couple20" ;
    
    if (couponInput === validCoupon) {
      let take = total_price;
      let cut = parseInt(take * 0.15);
      let final = take - cut;
      document.getElementById("Gp").textContent = final;
    } 
 

  });  


  

}


function couple(){

  document.getElementById('roundup').addEventListener('click', function() {
    var couponInput = document.getElementById('box').value;
    var validCoupon2="Couple20" ;
    
    if (couponInput === validCoupon2) {
      let take = total_price;
      let cut = parseInt(take * 0.2);
      let final = take - cut;
      document.getElementById("Gp").textContent = final;
    } 


  });  

}



 

