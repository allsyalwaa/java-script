function getForm() {
  const form = document.forms["create-post"];
  const title = form.title.value;
  const body = form.body.value;
  const user = form.user.value;
  const data = {
    title: title,
    body: body,
    user: user,
  };
  return data;
}

// fucntion create post
async function createPost(data) {
  // fetch('https://jsonplaceholder.typicode.com/posts'
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
    return { err };
  }
}

document.forms["create-post"].onsubmit = async function (e) {
  e.preventDefault();

  const data = getForm();
  console.log("loading");
  // run create post fucntion
  const create = await createPost(data);
  if (create["err"]) {
    alert("Maaf terjadi kesalahan");
  } else {
    alert("Berhasil membuat post");
    // redirect to main page
    window.location.href = "index.html";
  }
};
