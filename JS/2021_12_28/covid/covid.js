let queue = ["venkat", "vijay", "sammith", "yathi", "hari", "Ramu"];

function register() {
  let name = document.querySelector("#name").value;
  queue.push(name);
  let message = `${name} Your Registration is success`;
  alert(message);

  let myPromise = new Promise(function (resolve, reject) {
    setInterval(function () {
      if (queue[0] === name) {
        resolve(`${name} its your turn now`);
      }
    }, 2000);
  });

  myPromise.then(function (res) {
    alert(res);
  });
}

console.log(queue);
let id = setInterval(startVaccine, 3000);
let count = 4;
function startVaccine() {
  if (count > 0) {
    queue.shift();

    if (queue.length === 0) {
      clearInterval(id);
    }
    console.log(queue);
  }
  count--;
  let vaccinePromise = new Promise(function (resolve, reject) {
    if (count === 0) {
      reject(`Sorry ${queue[0]} Vaccine Out Of Stock Please Visit Tommorrow`);
    }
  });
  vaccinePromise.catch(function (err) {
    alert(err);
    let div = document.getElementById("remainH2");
    div.textContent = `There are Still ${queue.length} members in the queue`;
    document.querySelector("#contain").append(div);
  });
}
