async function Register(event) {
  try {
    event.preventDefault();
    var register_data = {
      name: document.getElementById("uname").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };
    register_data = JSON.stringify(register_data);
    console.log(register_data);
  } catch (error) {
    console.log(error);
  }

  let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
  let response = await fetch(reg_api, {
    method: "POST",
    body: register_data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log(data);

  if (data.error == false) {
    alert(`${data.message}`);
    window.location.href = "login.html";
  } else {
    alert(`${data.message}`);
  }
}
