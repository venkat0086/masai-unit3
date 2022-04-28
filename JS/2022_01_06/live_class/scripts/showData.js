async function getData(url) {
  try {
    let response = await fetch(url);

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

let appendData = (data, location) => {
  data.forEach(({ title, image }) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = title;
    let img = document.createElement("img");
    img.src = image;

    div.append(img, p);

    location.append(div);
  });
};

export { getData, appendData };
