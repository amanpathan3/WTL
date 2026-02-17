const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "👁";
  } else {
    password.type = "password";
    togglePassword.textContent = "👁";
  }
});

// Form Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("All Fields are Required..")
    return;
  }

  if (!email.value.includes("@")) {
    alert("Enter valid Email Id..")
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters!")
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Login successful";
});
