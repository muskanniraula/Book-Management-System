// import data from "./data.json" assert { type: "json" };

// const { users } = data;

// function invalid_email(email)
// {
// document.getElementById("on");
// }

const submit = document.getElementById("signin");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // const arr = users.filter((user) => {
  //   return email.value == user.email && password.value == user.password;
  // });
  // if (arr.length === 0) {
  //   console.log("user doesnot exists");
  // } else {
  //   const { email, firstName, lastName } = arr[0];
  //   console.log("user exists");
  //   const User = {
  //     email: email,
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  //   console.log(User);
  //   sessionStorage.setItem("userDetails",JSON.stringify(User));
    window.location.href = "index.html";

  // }

});