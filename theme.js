(function () {
  var toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  function syncPressed() {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  syncPressed();

  toggle.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncPressed();
  });
})();

(function () {
  var cvButton = document.getElementById("cv-button");
  if (!cvButton) return;

  cvButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(cvButton.getAttribute("href"), "_blank");
    window.open(cvButton.getAttribute("data-cv-fr"), "_blank");
  });
})();
