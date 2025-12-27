function login() {
  // TEMP ROLE SIMULATION (replace with real auth)
  const user = {
    id: "uuid",
    role: "master_admin" // change to test roles
  };

  localStorage.setItem("user", JSON.stringify(user));
  location.href = "dashboard.html";
}
