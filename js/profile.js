const id = new URLSearchParams(location.search).get("id");

fetch(API_URL + "/profile/" + id)
  .then(res => res.json())
  .then(u => {
    profile.innerHTML = `
      <img src="../assets/avatar.png">
      <h2>${u.name}</h2>
      <p>${u.role}</p>

      <button onclick="attendance('present')">Present</button>
      <button onclick="attendance('absent')">Absent</button>

      <textarea id="notes" placeholder="Soul notes"></textarea>
      <input id="score" type="number" placeholder="Growth score">
      <button onclick="saveSoul()">Save</button>
    `;
  });

function attendance(status) {
  fetch(API_URL + "/attendance", {
    method: "POST",
    body: JSON.stringify({ user_id: id, status })
  });
}

function saveSoul() {
  fetch(API_URL + "/soul", {
    method: "POST",
    body: JSON.stringify({
      user_id: id,
      notes: notes.value,
      growth_score: score.value
    })
  });
}
