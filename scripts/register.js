const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

toggleConfirmPassword.addEventListener("click", () => {
  confirmPassword.type =
    confirmPassword.type === "password" ? "text" : "password";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    nameInput.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    errorMsg.style.color = "red";
    alert("All fields are required..")
    return;
  }

  if (!email.value.includes("@")) {
    errorMsg.style.color = "red";
    alert("Enter Valid email")
    return;
  }

  if (password.value.length < 6) {
    errorMsg.style.color = "red";
    alert("Password must be at least 6 characters!");
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMsg.style.color = "red";
    alert("Passwords do not match!");
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Registered successfully";
});
