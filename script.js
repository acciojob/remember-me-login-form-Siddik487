// Keys for localStorage
const USER_KEY = "remember_username";
const PASS_KEY = "remember_password";

const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// ✅ Check saved credentials on load
function checkExistingUser() {
  const savedUser = localStorage.getItem(USER_KEY);
  const savedPass = localStorage.getItem(PASS_KEY);

  if (savedUser && savedPass) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
}

// ✅ Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // save credentials
    localStorage.setItem(USER_KEY, username);
    localStorage.setItem(PASS_KEY, password);
  } else {
    // remove credentials
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PASS_KEY);
  }

  checkExistingUser();
});

// ✅ Existing user login
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem(USER_KEY);
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});

// ✅ Initial state
checkExistingUser();