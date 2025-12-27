function login() {
  // TEMP login (later replaced with real auth)
  const user = {
    id: "demo-id",
    role: "shepherd"
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "dashboard.html";
}
