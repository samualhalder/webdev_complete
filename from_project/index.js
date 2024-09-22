const messageDiv = document.createElement("div");
const cardDiv = document.querySelector(".card");
const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const gender = e.target.gender.value;
  const age = e.target.age.value;
  if (!name || !email || !password || !gender || !age) {
    messageDiv.style.cssText += "border:1px solid red;padding:5px;color:red";
    messageDiv.innerText = "Pls Enter all the fileds";
  } else if (password.length < 6) {
    messageDiv.style.cssText += "border:1px solid red;padding:5px;color:red";
    messageDiv.innerText = "password length should at least 6";
  } else {
    messageDiv.style.cssText +=
      "border:1px solid green;padding:5px;color:green";
    messageDiv.innerText = "User saved successfully";
    clearForm();
  }
  cardDiv.appendChild(messageDiv);
};

const clearForm = () => {
  const form = document.querySelector(".card");
   // Clear text inputs
   form.name.value = "";
   form.email.value = "";
   form.password.value = "";

   // Clear radio buttons
   form.gender.forEach(input => input.checked = false);

   // Reset select to first option
   form.age.selectedIndex = 0;
};
