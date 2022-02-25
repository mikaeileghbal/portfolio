const app = (function () {
  const menu = document.querySelector(".menu-container");

  menu.addEventListener("click", (e) => {
    menu.classList.toggle("change");
    if (menu.classList.contains("change")) {
      document.querySelector(".sidenav").style.height = "100%";
    } else {
      document.querySelector(".sidenav").style.height = "0";
    }
  });
})();
