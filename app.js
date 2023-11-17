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
  page.classList.contains("blackMode")
    ? (button.value = "LIGHT MODE")
    : (button.value = "BLACK MODE");
}
