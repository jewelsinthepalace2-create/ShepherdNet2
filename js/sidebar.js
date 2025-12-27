const user = JSON.parse(localStorage.getItem("user"));

const menu = {
  master_admin: [
    ["Chapels", "lists/chapels.html"],
    ["Chapel Leaders", "lists/leaders.html"],
    ["Pastors", "lists/pastors.html"],
    ["Shepherds", "lists/shepherds.html"],
    ["Members", "lists/members.html"]
  ],
  chapel_leader: [
    ["Pastors", "lists/pastors.html"],
    ["Shepherds", "lists/shepherds.html"],
    ["Members", "lists/members.html"]
  ],
  pastor: [
    ["Shepherds", "lists/shepherds.html"],
    ["Members", "lists/members.html"]
  ],
  shepherd: [
    ["Members", "lists/members.html"]
  ]
};

const sidebar = document.getElementById("sidebar");

menu[user.role]?.forEach(([label, link]) => {
  const a = document.createElement("a");
  a.href = link;
  a.textContent = label;
  sidebar.appendChild(a);
});
