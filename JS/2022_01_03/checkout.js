document.querySelector("#btn").addEventListener("click", setTime);
function setTime() {
  alert("Your Order is Accepted");
  setTimeout(cooked, 3000);
  setTimeout(ready, 12000);
  setTimeout(outDel, 22000);
  setTimeout(Del, 34000);
}

function cooked() {
  alert("Your order is being cooked");
}
function ready() {
  alert("Your order is Reday");
}

function outDel() {
  alert("Your Order out for delivery");
}
function Del() {
  alert("Order delivered");
  window.location.href = "index.html";
}
