async function getTitle() {
  try {
    const response = await fetch("https://jsonplaceholder.org/posts");
    const data = await response.json();
    return data;
  } catch (err) {
    alert("Maaf terjadi sebuah error");
    console.log(err);
    return [];
  }
}

function renderListProduct(data) {
  const new_ul = document.createElement("ul");
  data.forEach((product, index) => {
    const new_li = document.createElement("li");
    // add new_li class "fw-bold"
    new_li.className = "fw-bold text-primary";
    new_li.innerText = `${index + 1}. ${product.title}`;
    new_ul.appendChild(new_li);
  });
  document.body.appendChild(new_ul);
}

getTitle().then((data) => {
  renderListProduct(data);
});
