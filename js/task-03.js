// Варіант 1
const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const newForm = event.target;

  const email = newForm.elements.email.value;
  const password = newForm.elements.password.value;
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(new Array(email, password));
  form.reset();
}

// // Варіант 2
// const form = document.querySelector(".login-form");
// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const formElement = event.currentTarget.elements;
//   const email = formElement.email.value;
//   const password = formElement.password.value;
//   const data = {
//     email: email.value,
//     password: password.value,
//   };
//   if (email === "" || password === "") {
//     return alert("Please fill in all the fields!");
//   }

//   event.currentTarget.reset();
//   console.log(data);
// }
