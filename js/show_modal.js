var openBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modalOverlay");
var closeBtn = document.getElementById("closeModalBtn");
var cancelBtn = document.getElementById("cancelBtn");

openBtn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
};

cancelBtn.onclick = function() {
  modal.style.display = "none";
};

// Optional: Close modal when clicking outside
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};