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

//API
let base = "https://www.omdbapi.com/?t=";
let apiKey = "&apikey=5aad6871";

function search() {
  let mName = document.getElementById("name").value;
  let prod_div = document.getElementById("users");
  let sort = document.getElementById("sort");
  let contain = document.getElementById("contain");
  let slideMain = document.getElementById("slideMain");
  let url = base + mName + apiKey;
  // console.log(url);
  async function showResult() {
    try {
      let res = await fetch(url);
      let response = await res.json();

      if (response.Response == "False") {
        showError(response);
      } else {
        searchMovies(response);
      }
    } catch (err) {
      console.log(err);
    }
  }
  showResult();
  function searchMovies(user) {
    prod_div.innerHTML = "";
    sort.innerHTML = "";
    contain.innerHTML = "";
    slideMain.innerHTML = "";

    let div = document.createElement("div");
    let resultTag = document.createElement("h3");
    resultTag.innerHTML = `results for "${mName}"`;

    let img = document.createElement("img");
    img.setAttribute("id", "searchImg");
    img.src = user.Poster;
    let title = document.createElement("h2");
    title.innerText = user.Title;
    let release = document.createElement("h3");
    release.innerText = "Released Date: " + user.Released;

    let imdb = document.createElement("h4");
    imdb.innerText = "IMDb: " + user.imdbRating;
    imdb.style.width = "150px";
    release.style.width = "300px";

    let recommend = document.createElement("img");
    recommend.setAttribute("id", "recommend");
    if (user.imdbRating > 8.5) {
      recommend.src =
        "https://thumbs.dreamstime.com/b/recommend-icon-design-red-label-thumb-up-trendy-flat-style-vector-illustration-172065247.jpg";
      imdb.style.color = "red";
    }

    div.append(resultTag, img, title, release, imdb, recommend);
    prod_div.append(div);
  }

  function showError() {
    prod_div.innerHTML = "";
    sort.innerHTML = "";
    contain.innerHTML = "";
    slideMain.innerHTML = "";

    let div = document.createElement("img");
    div.setAttribute("id", "gif");
    div.src =
      "https://cdn.dribbble.com/users/308895/screenshots/2598725/no-results.gif";
    let resultTag = document.createElement("h3");
    resultTag.innerHTML = `no results for "${mName}"`;
    div.innerHTML = "Error";
    prod_div.append(resultTag, div);
  }
}
