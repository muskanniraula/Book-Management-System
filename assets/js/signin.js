 export const user_detail = [
  { email: "LunaStar92@gmail.com", password: "H@ppyP@sswrd" },
  { email: "TechGeek42@gmail.com", password: "Secur1ty#P@ss" },
  { email: "CrystalEagle@gmail.com", password: "3x@mpl3P@ss" },
  { email: "JazzMan123@gmail.com", password: "P@ssw0rd#123" },
  { email: "MidnightGamer@gmail.com", password: "L0ngP@ssw0rd" },
  { email: "NatureExplorer@gmail.com", password: "W1nn3rP@ss!" },
  { email: "PizzaLover88@gmail.com", password: "P@ssC0d3#12" },
  { email: "AdventureSeeker@gmail.com", password: "9u1ckP@ssw0" },
  { email: "Songbird17@gmail.com", password: "5t3@1thyP@ss" },
  { email: "QuantumCoder@gmail.com", password: "L0ngP@ssw0rd" },
  { email: "RainbowNinja@gmail.com", password: "P@ssw0rdXyz" },
  { email: "CoffeeAddict99@gmail.com", password: "B3@chSun5et" },
  { email: "MoonlightDreamer@gmail.com", password: "$3cur3P@ssw0" },
  { email: "CodeWizard77@gmail.com", password: "F1r3w@llP@ss" },
  { email: "BookwormGirl@gmail.com", password: "Ch0c0lat3#C@ke" },
  { email: "OceanExplorer2@gmail.com", password: "P@ssw0rd123" },
  { email: "DragonRider13@gmail.com", password: "$tr0ngP@ss!" },
];

const submit = document.getElementById("signin");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const arr = user_detail.filter((user) => {
    return (email.value == user.email && password.value == user.password);
  });
  if(arr.length===0)
  {
    console.log("user doesnot exists");
  }
  else
  {
    console.log("user exists");
  }

//   console.log(arr.empty);
});

// export {user_detail};