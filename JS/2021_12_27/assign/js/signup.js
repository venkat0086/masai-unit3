document.querySelector("form").addEventListener("submit", signup);
var userData = JSON.parse(localStorage.getItem("signupData")) || [];

function signup(e) {
  e.preventDefault;
  var email = document.querySelector("#email").value;
  var user = document.querySelector("#user").value;
  var password = document.querySelector("#password").value;
  var contact = document.querySelector("#contact").value;

  var userCred = {
    emailAdd: email,
    userName: user,
    pass: password,
    contact: contact,
  };
  userData.push(userCred);
  localStorage.setItem("signupData", JSON.stringify(userData));
  window.alert("You are Successfully Registered.!");
}
