window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 2200); // matches loading bar animation
});
