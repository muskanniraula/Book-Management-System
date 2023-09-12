 export const user_detail = [
  { email: "LunaStar92@gmail.com", password: "H@ppyP@sswrd" , firstName:"Emma", lastName:"Johnson"},
  { email: "TechGeek42@gmail.com", password: "Secur1ty#P@ss" , firstName:"Ethan", lastName:"Smith"},
  { email: "CrystalEagle@gmail.com", password: "3x@mpl3P@ss" , firstName:"Olivia", lastName:"Brown"},
  { email: "JazzMan123@gmail.com", password: "P@ssw0rd#123" , firstName:"Liam", lastName:"Davis"},
  { email: "MidnightGamer@gmail.com", password: "L0ngP@ssw0rd" , firstName:"Sophia", lastName:"Wilson"},
  { email: "NatureExplorer@gmail.com", password: "W1nn3rP@ss!" , firstName:"", lastName:""},
  { email: "PizzaLover88@gmail.com", password: "P@ssC0d3#12" , firstName:"", lastName:""},
  { email: "AdventureSeeker@gmail.com", password: "9u1ckP@ssw0" , firstName:"", lastName:""},
  { email: "Songbird17@gmail.com", password: "5t3@1thyP@ss" , firstName:"", lastName:""},
  { email: "QuantumCoder@gmail.com", password: "L0ngP@ssw0rd" , firstName:"", lastName:""},
  { email: "RainbowNinja@gmail.com", password: "P@ssw0rdXyz" , firstName:"Lucas", lastName:"Clark"},
  { email: "CoffeeAddict99@gmail.com", password: "B3@chSun5et" , firstName:"Mia", lastName:"Thomas"},
  { email: "MoonlightDreamer@gmail.com", password: "$3cur3P@ssw0" , firstName:"Aiden", lastName:"Taylor"},
  { email: "CodeWizard77@gmail.com", password: "F1r3w@llP@ss" , firstName:"Ava", lastName:"Anderson"},
  { email: "BookwormGirl@gmail.com", password: "Ch0c0lat3#C@ke" , firstName:"Noah", lastName:"Martinez"},
  { email: "OceanExplorer2@gmail.com", password: "P@ssw0rd123" , firstName:"Harper", lastName:"Baker"},
  { email: "DragonRider13@gmail.com", password: "$tr0ngP@ss!" , firstName:"Samuel", lastName:"White"},
];
 
 
 
 

 
Isabella Garcia
James Walker
Charlotte Lewis
Benjamin Allen
 
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