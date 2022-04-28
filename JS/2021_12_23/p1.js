document.querySelector("form").addEventListener("submit", toDo);
  let arr = JSON.parse(localStorage.getItem("contructFunc")) || [];
  document.querySelector("#count").textContent = arr.length;
  displayTask(arr);
  function toDo(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let res = new multipleTask(name);
    arr.push(res);

    localStorage.setItem("contructFunc", JSON.stringify(arr));
    window.location.reload();
  }
  function multipleTask(name) {
    this.name = name;
    this.date = new Date();
    this.status = false;
  }
  function displayTask() {
    arr.map(function (ele, index) {
      const div = document.createElement("div");
      const ul = document.querySelector("ul");
      const td1 = document.createElement("li");
      const td2 = document.createElement("li");
      const td3 = document.createElement("li");
      var done = document.createElement("button");
      done.textContent = "Done";
      var remove = document.createElement("button");
      remove.textContent = "Remove";

      td3.setAttribute("id", "status");
      done.setAttribute("id", "done");
      remove.setAttribute("id", "remove");

      td1.textContent = "Name of Task: " + ele.name;
      td2.textContent = "Date: " + ele.date;
      td3.textContent = "Status: " + ele.status;

      div.append(td1, td2, td3, done, remove);
      ul.append(div);
      // console.log(ul);

      remove.addEventListener("click", function (index) {
        del(index);
      });

      done.addEventListener("click", scratch);
    });
  }

  function toggle_task() {
    arr.map(function (ele) {
      if (ele.status == false) {
        ele.status = true;
        console.log(arr);
        document.querySelector("#status").textContent = "Status: " + ele.status;
      } else if (ele.status == true) {
        ele.status = false;
        console.log(arr);
        document.querySelector("#status").textContent = "Status: " + ele.status;
      }
    });
  }

  function del(index) {
    arr.splice(index, 1);
    localStorage.setItem("contructFunc", JSON.stringify(arr));
    window.location.reload();
  }

  function scratch(event) {
    var tar = event.target.parentNode;
    tar.style.textDecoration = "line-through";
    tar.style.color = "green";
  }