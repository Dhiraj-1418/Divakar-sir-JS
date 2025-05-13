const signUpForm = document.getElementById("signup");
const signupName = document.getElementById("name");
const signupEmail = document.getElementById("email");
const country = document.getElementById("country");
const telephone = document.getElementById("phone");
const signupPassword = document.getElementById("password");
const signInForm = document.getElementById("signin");
const signInName = document.getElementById("signin-name");
const signInEmail = document.getElementById("signin-email");
const signInPassword = document.getElementById("signin-password");

signUpDetails = [];

signUpForm.addEventListener("submit", (signUpEvent) => {
  signUpEvent.preventDefault();

  signUpDetailsObj = {
    name: signupName.value,
    email: signupEmail.value,
    country: country.value,
    telephone: telephone.value,
    password: signupPassword.value,
  };
  signUpDetails.push(signUpDetailsObj);
  console.log(signUpDetails);
  alert("Signup successful!");

  signupName.value = "";
  signupEmail.value = "";
  country.value = "";
  telephone.value = "";
  signupPassword.value = "";
});

signInDetails = [];

signInForm.addEventListener("submit", (signInEvent) => {
  signInEvent.preventDefault();

  signInDetailsObj = {
    name: signInName.value,
    email: signInEmail.value,
    password: signInPassword.value,
  };
  signInDetails.push(signInDetailsObj);
  console.log(signInDetails);
  alert("Signin successful!");

  signInName.value = "";
  signInEmail.value = "";
  signInPassword.value = "";
});
