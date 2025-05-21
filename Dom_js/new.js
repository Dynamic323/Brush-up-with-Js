const submitButton = document.getElementById("clicker");
const usernameInput = document.getElementById("inp_tag");

submitButton.addEventListener("click", function () {
  if (usernameInput.value.trim() === "") {
    alert("User Name cannot be empty");
    return;
  }

  const usernameParagraph = document.createElement("p");
  usernameParagraph.textContent = usernameInput.value;

  document.body.append(usernameParagraph);
  usernameInput.value = "";
});
