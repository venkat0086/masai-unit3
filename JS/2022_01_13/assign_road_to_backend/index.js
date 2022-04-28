addProduct = async () => {
  try {
    let data = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
    };
    data = JSON.stringify(data);

    let response = await fetch(`http://127.0.0.1:3100/api/products`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await response.json();
    console.log(res);
    alert("Item Added");
  } catch (error) {
    console.log("error:", error);
  }
};
deleteProduct = async () => {
  try {
    let del = document.getElementById("delete_id").value;
    let data = await fetch(`http://127.0.0.1:3100/api/products/${del}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await data.json();
    console.log("res:", res);
    alert("Item Deleted");
  } catch (error) {
    console.log("error:", error);
  }
};
getProduct = async () => {
  try {
    let response = await fetch("http://127.0.0.1:3100/api/products");
    let data = await response.json();
    console.log("data:", data);
    showProduct(data);
  } catch (error) {
    console.log("error:", error);
  }
};

showProduct = (data) => {
  let main_div = document.getElementById("watchProd");
  data.map(({ id, name, price }) => {
    let div = document.createElement("div");
    let pName = document.createElement("h2");
    pName.innerHTML = name;

    let pId = document.createElement("div");
    pId.innerHTML = `ID: ${id}`;

    let pPrice = document.createElement("h3");
    pPrice.innerHTML = `Price: ${price}`;

    div.append(pId, pName, pPrice);
    main_div.append(div);
  });
};

updateProduct = async () => {
  try {
    let data = {
      name: document.getElementById("uName").value,
      price: document.getElementById("uPrice").value,
    };
    data = JSON.stringify(data);

    let up = document.getElementById("update_id").value;
    let response = await fetch(`http://127.0.0.1:3100/api/products/${up}`, {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log("res:", res);
    alert("Item Updated");
  } catch (error) {
    console.log("error:", error);
  }
};
getProduct();
