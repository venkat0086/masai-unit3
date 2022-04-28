async function getRandom(url) {
  try {
    let response = await fetch(url);

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

let appendItems = (data, location) => {
  data.map(({ strMeal, strMealThumb, strCategory, strArea, strYoutube }) => {
    let div = document.createElement("div");
    let p = document.createElement("h3");
    p.innerText = strMeal;
    let img = document.createElement("img");
    img.src = strMealThumb;

    let cate = document.createElement("div");
    cate.innerHTML = `Category: ${strCategory}`;

    let style = document.createElement("div");
    style.innerHTML = `Origin: ${strArea}`;

    let span = document.createElement("span");
    span.innerHTML = "Click Here to:";

    let video = document.createElement("a");
    video.innerHTML = "Watch On YouTube";
    video.href = strYoutube;

    span.append(video);

    div.append(img, p, cate, style, span);

    location.append(div);
  });
};
export { getRandom, appendItems };
