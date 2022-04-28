document.querySelector("form").addEventListener("submit", signIn);
var regUser = JSON.parse(localStorage.getItem("signupData"));
function signIn(event) {
  event.preventDefault;
  var count = 0;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  for (var i = 0; i < regUser.length; i++) {
    if (regUser[i].emailAdd == email && regUser[i].pass == password) {
      count++;
    }
  }
  if (count > 0) {
    window.location.href = "home.html";
    window.alert("You Login Successful");
  } else {
    window.alert("Invalid Login Credentials");
  }
}
