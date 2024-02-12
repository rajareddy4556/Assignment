var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.getElementById('loginbtn').click();
  document.getElementById("myBtn").click();
}

function loginContent() {
  document.getElementById("loginbtn").style.color="green";
  document.getElementById("signupbtn").style.color="black";
  document.getElementById("loginbtn").style.borderBottom = "2px solid green";
  document.getElementById("signupbtn").style.borderBottom = "none";
  document.getElementById("login-page").style.display = "block";
  document.getElementById("signup-page").style.display = "none";
}

function signupContent() {
  document.getElementById("loginbtn").style.color="black";
  document.getElementById("signupbtn").style.color="green"
  document.getElementById("signupbtn").style.borderBottom = "2px solid green";
  document.getElementById("loginbtn").style.borderBottom = "none";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "block";
}
function forgotPassword() {
  window.alert("Clicked ");
}
