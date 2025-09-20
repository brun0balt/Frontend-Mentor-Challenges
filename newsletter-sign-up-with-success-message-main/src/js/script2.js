const emailLocal = localStorage.getItem("email");
const inputEmail = document.querySelector(".email");
if (emailLocal) {
  inputEmail.innerHTML = emailLocal;
}
