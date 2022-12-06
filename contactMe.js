const username = document.querySelector("#nameValue");
const useremail = document.querySelector("#emailValue");
const usermsg = document.querySelector("#msgValue");

const msgForm = document.querySelector("form");

msgForm.addEventListener("submit", handleSubmitBtn);

function handleSubmitBtn() {
  localStorage.setItem("name", username.value);
  localStorage.setItem("email", useremail.value);
  localStorage.setItem("msg", usermsg.value);
}
