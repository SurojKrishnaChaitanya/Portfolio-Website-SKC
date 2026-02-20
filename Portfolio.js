
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "To Light";
  } else {
    toggleBtn.textContent = "To Dark";
  }
});

