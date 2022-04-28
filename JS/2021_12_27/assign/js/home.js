//Switch Navigation
function goHome() {
  window.location.href = "home.html";
}
function goLogin() {
  window.location.href = "login.html";
}
function goSignUp() {
  window.location.href = "signup.html";
}

// Sliding Images

// let images = [
//   "https://in.bmscdn.com/promotions/cms/creatives/1640601536172_xmas.jpg",
//   "https://in.bmscdn.com/promotions/cms/creatives/1637323134871_divinepunyapaaptour_webshowcase_1240x300.jpg",
//   "https://in.bmscdn.com/promotions/cms/creatives/1639378314392_revisedbanner2.jpg",
// ];

let id;

function start() {
  let main = document.querySelector("#slideMain");
  let div = document.createElement("div");
  div.setAttribute("id", "slide");
  div.innerHTML = "";

  let images = JSON.parse(localStorage.getItem("images"));

  let img = document.createElement("img");
  img.setAttribute("id", "slideImg");
  img.src = images[0];
  div.append(img);

  let i = 1;
  id = setInterval(function () {
    if (i == images.length) {
      i = 0;
    }
    img.src = images[i];
    div.append(img);
    i++;
  }, 3000);
  main.append(div);
}

//Movie-Data Append

let mDetails = JSON.parse(localStorage.getItem("movieDetails")) || [];

displayMovie(mDetails);
function displayMovie(mDetails) {
  document.querySelector("#contain").innerHTML = "";
  mDetails.map(function (ele) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", ele.imgUrl);

    let name = document.createElement("h2");
    name.textContent = ele.name;

    let rDate = document.createElement("h3");
    rDate.textContent = "Release Date: " + ele.date;

    let rate = document.createElement("h4");
    rate.textContent = "IMDb. " + ele.rate;

    let btn = document.createElement("button");
    btn.textContent = "Book Now";

    div.append(img, name, rDate, rate, btn);
    document.querySelector("#contain").append(div);
  });
}

//Sort Function

var sort = document.querySelector("#sort");

var span = document.createElement("span");
span.textContent = "Sort By Ratings:";

var lowBtn = document.createElement("button");
lowBtn.addEventListener("click", low);
lowBtn.setAttribute("id", "low");
lowBtn.textContent = "Low to High";

var highBtn = document.createElement("button");
highBtn.addEventListener("click", high);
highBtn.setAttribute("id", "high");
highBtn.textContent = "High to Low";

sort.append(span, lowBtn, highBtn);

function low() {
  mDetails.sort(function (a, b) {
    return Number(a.rate) - Number(b.rate);
  });
  displayMovie(mDetails);
}
function high() {
  mDetails.sort(function (a, b) {
    return Number(b.rate) - Number(a.rate);
  });
  displayMovie(mDetails);
}
