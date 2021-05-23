var user = prompt("Pick a number 1-5?");
document.body.querySelector(".message").innerHTML="User Damage: "+user;

var dragon = Math.ceil(Math.random()*user);
if (dragon > 5) Math.random()*3;
document.body.querySelector(".mess").innerHTML="Dragon Damage: "+dragon;

var outcome = ["win", "lose"];
for(var I=0; I<outcome; I++){
  createOutcome(outcome[I]);
}

function createOutcome(user, dragon){
  var ele=document.createElement("div");
  if(dragon===10){
  ele.innerHTML="win";
}else if(user===5){
  ele.innerHTML="lose"
}
  wrapperEle.appendChild(ele);
}

document.body.querySelector(".wrapper").innerHTML="You " +outcome;