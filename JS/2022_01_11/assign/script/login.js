async function login(event) {
  try {
    event.preventDefault();
    var login_data = {
      username: document.getElementById("username-login").value,
      password: document.getElementById("password-login").value,
    };
  } catch (error) {
    console.log(error);
  }
  login_data = JSON.stringify(login_data);

  let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

  let response = await fetch(login_url, {
    method: "POST",
    body: login_data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log(data);
  if (data.error == false) {
    alert(`Login Successful`);
    // window.location.href = "omdbApi.html";
  }

  let username = document.getElementById("username-login").value;

  getUser(username, data.token);
}
async function getUser(username, token) {
  let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
  let response = await fetch(api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  console.log(data);
  document.getElementById("click-login").innerHTML = data.name;
  window.location.href = "omdbApi.html";
}
