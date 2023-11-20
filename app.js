const changeType = () => {
  const password = document.getElementById("password");
  const box = document.getElementById(`box`);
  box.checked ? (password.type = `text`) : (password.type = `password`);
};

function changeClass() {
  page = document.getElementById("logIn");
  button = document.getElementById("button");
  page.classList.toggle("blackMode");
  button.classList.toggle("blackMode");
  if (page.classList.contains("blackMode")) {
    button.value = "LIGHT MODE";
    document.body.style.backgroundColor = "black";
    button.style.border = "0.2rem solid white";
  } else {
    button.value = "BLACK MODE";
    document.body.style.backgroundColor = "white";
    button.style.border = "0.2rem solid black";
  }
}
