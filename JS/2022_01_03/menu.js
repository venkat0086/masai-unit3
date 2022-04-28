let display = document.getElementById("display");
async function start() {
  try {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
    );
    let data = await response.json();
    showItems(data.meals);
    console.log(data.meals);
  } catch (error) {
    console.log(error);
  }
}
start();

function showItems(data) {
  data.map(function (ele) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.strMealThumb;

    let price = document.createElement("h2");
    price.innerHTML = "Rs. " + Math.floor(Math.random() * (500 - 100) * 1);

    let btn = document.createElement("button");
    btn.innerHTML = "Add To Cart";

    btn.addEventListener("click", function () {
      cartPage(ele);
    });

    div.append(img, price, btn);
    display.append(div);
  });
  let arr = JSON.parse(localStorage.getItem("EvalcartItems")) || [];
  document.getElementById("span").innerText = arr.length;
  function cartPage(ele) {
    let name = ele.strMeal;
    let img = ele.strMealThumb;
    let obj = {
      name: name,
      img: img,
    };
    arr.push(obj);
    localStorage.setItem("EvalcartItems", JSON.stringify(arr));
    document.getElementById("span").innerText = arr.length;
  }
}
