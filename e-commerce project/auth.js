function clickSignup() {
  const container = document.getElementById("container");
  container.classList.add("right-panel-active");
}

function clickSignin() {
  const container = document.getElementById("container");
  container.classList.remove("right-panel-active");
}

function signup() {
  const name = document.forms["signupForm"]["name"].value;
  const email = document.forms["signupForm"]["email"].value;
  const password = document.forms["signupForm"]["password"].value;
  if (name === "" && email === "" && password === "") {
    alert("please fill all values");
  } else {
    window.location.href = "services.html";
  }
}

function signin() {
  const email = document.forms["signinForm"]["email"].value;
  const password = document.forms["signinForm"]["password"].value;
  if (email === "" && password === "") {
    alert("please fill all values");
  } else {
    window.location.href = "services.html";
  }
}
