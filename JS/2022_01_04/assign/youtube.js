const API = "AIzaSyCXYyRKlFztCODWoGJx1HF2BQIyy7wqlv0";
let show_div = document.getElementById("show_div");
let results_div = document.getElementById("search_results");
let relate_div = document.getElementById("relate_div");
const trend = document.getElementById("trend");

const showPopular = async () => {
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API}`;
    let response = await fetch(url);
    let data = await response.json();

    let popular = data.items;
    console.log(data);
    showList(popular);
  } catch (error) {
    console.log(error);
  }
};
showPopular();

async function searchVideo() {
  relate_div.innerHTML = "";
  try {
    let video_query = document.getElementById("video").value;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=${API}&maxResults=20`
    );
    let data = await response.json();
    console.log(data);
    let videos = data.items;
    let head = document.createElement("h2");
    head.innerHTML = `showing results for "${video_query}"`;
    relate_div.append(head);

    appendVideos(videos);
  } catch (error) {
    console.log(error);
  }
}

const showList = (items) => {
  items.map((el) => {
    const { id } = el;
    console.log(id);

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.height = "315";
    iframe.width = "100%";
    iframe.setAttribute("allowfullscreen", true);

    show_div.append(iframe);
  });
};

const appendVideos = (items) => {
  results_div.innerHTML = null;
  show_div.innerHTML = null;
  trend.innerHTML = null;
  items.forEach((el) => {
    const {
      id: { videoId },
    } = el;
    console.log(videoId);

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.height = "215";
    iframe.width = "100%";
    iframe.setAttribute("allowfullscreen", true);

    results_div.append(iframe);
  });
};
