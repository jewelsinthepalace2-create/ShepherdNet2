const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(API_URL + "/profile/" + id)
  .then(res => res.json())
  .then(user => {
    document.getElementById("profile").innerHTML = `
      <img src="../assets/avatar.png">
      <h2>${user.name}</h2>
      <p><b>Hostel:</b> ${user.hostel}</p>
      <p><b>Level:</b> ${user.level}</p>
      <p><b>Course:</b> ${user.course}</p>
      <p><b>Role:</b> ${user.role}</p>
    `;
  });
