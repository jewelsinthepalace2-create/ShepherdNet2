fetch (API_URL + "/members")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    data.forEach(u => {
      const d = document.createElement("div");
      d.className = "card";
      d.innerHTML = `<img src="../assets/avatar.png"><strong>${u.name}</strong>`;
      d.onclick = () => location.href = `../profile/profile.html?id=${u.id}`;
      list.appendChild(d);
    });
  });
