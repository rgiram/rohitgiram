

function startNow(){
function chargebattery() {
  var a;
  a = document.getElementById("animation");
  a.innerHTML = "&#xf244;";
  document.getElementById("d1").innerHTML="Charging Started!!"
  setTimeout(function () {
    
    document.getElementById("d1").innerHTML="Charging Started!!"

  },500);

  setTimeout(function () {
    document.getElementById("a1").style.color="rgb(152, 41, 41)";
    document.getElementById("d1").innerHTML="Low Battery!!"

  },1000);

  setTimeout(function () {
    
      a.innerHTML = "&#xf243;";
	  
	  document.getElementById("a1").style.color="red";
    document.getElementById("d1").innerHTML="25% Done"
  

    }, 5000);

  setTimeout(function () {
      a.innerHTML = "&#xf242;";
	  document.getElementById("a1").style.color="#e7683e";
    document.getElementById("d1").innerHTML="50% Done";
    

    }, 10000);

  setTimeout(function () {
      a.innerHTML = "&#xf241;";
	  document.getElementById("a1").style.color="rgb(58, 223, 96)";
    document.getElementById("d1").innerHTML="75% Done";

    }, 15000);

  setTimeout(function () {
      a.innerHTML = "&#xf240";
	  document.getElementById("a1").style.color="green";
    document.getElementById("d1").innerHTML="Charge completed!";
    
    }, 20000);
}

chargebattery();
setInterval(chargebattery, 25000);
setInterval(showTime,10000);
}

function stopNow(){
  
  document.getElementById("a1").style.color="black";
  document.getElementById("a1").innerHTML="Charging Stopped!!";
  
}



