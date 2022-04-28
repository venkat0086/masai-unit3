//Objects in LocalStorage

// [
//   {
//       "choose": "French Fries",
//       "image": "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg"
//   },
//   {
//       "choose": "Chicken McNuggets",
//       "image": "https://manofmany.com/wp-content/uploads/2020/04/1-How-to-make-chicken-mcnuggets-at-home.jpg"
//   },
//   {
//       "choose": "Chocolate Shake",
//       "image": "https://i.ytimg.com/vi/EA4yMzlHo9U/sddefault.jpg"
//   },
//   {
//       "choose": "Big Mac",
//       "image": "https://www.investopedia.com/thmb/4coJ365Q3FTfw6ou5xj22Wd6sL4=/1024x616/filters:fill(auto,1)/GettyImages-1011819170-325ad98660ad429694c6c0aca0e08895.jpg"
//   },
//   {
//       "choose": "Premium Asian Salad",
//       "image": "https://canadify.com/wp-content/uploads/2017/05/McDonald%E2%80%99s-Canada-Introduces-New-Asian-Sesame-Fusion-Salad-678x381.jpg"
//   },
//   {
//       "choose": "Strawberry Banana Smoothie",
//       "image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/640x569/gallery-1501619154-screen-shot-2017-08-01-at-23352-pm.png?resize=480:*"
//   }
// ];

let items = JSON.parse(localStorage.getItem("mcDdata")) || [];
function startOrder() {
  var choose = document.getElementById("choose").value;
  // var image = document.getElementById("image").value;

  // let obj = {
  //   choose: choose,
  //   image: image,
  // };
  // items.push(obj);
  // localStorage.setItem("mcDdata", JSON.stringify(items));

  // items.map(function (ele) {
  //   let div = document.createElement("div");
  //   let img = document.createElement("img");
  //   img.setAttribute("src", ele.image);
  //   div.append(img);
  //   document.querySelector("body").append(div);
  // });
  items.map(function (ele) {
    if (choose == ele.choose) {
      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve("Order Prepared");
        }, 5000);
      });

      promise.then(function (res) {
        //   alert(res);
        let mainDiv = document.querySelector("#orderDiv");
        let orderID = document.createElement("div");
        orderID.setAttribute("id", "orderID");
        orderID.innerHTML = order(1, 99999);
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = ele.choose;
        div.setAttribute("id", "itemDiv");
        let img = document.createElement("img");
        img.setAttribute("src", ele.image);
        div.append(h2, orderID, img);
        mainDiv.append(div);
      });
    }
  });
  function order(min, max) {
    return "OrderID #" + Math.floor(Math.random() * (max - min) + min);
  }
}
