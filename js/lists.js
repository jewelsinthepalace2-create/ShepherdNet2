fetchData("/members");

function fetchData(endpoint) {
  fetch(API_URL + endpoint)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");

      data.forEach(user => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <img src="../assets/avatar.png">
          <strong>${user.name}</strong>
        `;
        div.onclick = () => {
          window.location.href = `../profile/profile.html?id=${user.id}`;
        };
        list.appendChild(div);
      });
    });
}
