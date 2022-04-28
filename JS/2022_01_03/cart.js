let main = document.getElementById("cart");

let arr = JSON.parse(localStorage.getItem("EvalcartItems")) || [];

arr.map(function (ele) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = ele.img;

  let name = document.createElement("h3");
  name.innerText = ele.name;

  let remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.addEventListener("click", function (ele) {
    let re = ele.target.parentNode.remove();
  });

  div.append(img, name, remove);
  main.append(div);
});
