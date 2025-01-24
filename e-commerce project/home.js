window.addEventListener("load", function () {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function showDiv(divId) {
  var divs = document.querySelectorAll(".section");
  divs.forEach(function (div) {
    div.style.display = "none";
  });
  document.getElementById(divId).style.display = "block";
}

function navigateServices() {
  window.location.href = "services.html";
}

function navigateAuth() {
  window.location.href = "auth.html";
}
