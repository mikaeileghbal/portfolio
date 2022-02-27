const App = (function () {
  const menu = document.querySelector(".menu-container");

  function closeSideMenu() {
    document.querySelector(".topnav").style.right = "0";
  }

  function openSideMenu() {
    document.querySelector(".topnav").style.right = "-100%";
  }

  menu.addEventListener("click", slideMenu);

  function slideMenu(event) {
    event.stopPropagation();
    menu.classList.toggle("change");
    if (menu.classList.contains("change")) {
      closeSideMenu();
    } else {
      openSideMenu();
    }
  }

  document.body.addEventListener("click", bodyClick, false);

  function bodyClick(event) {
    if (menu.classList.contains("change")) {
      slideMenu(event);
    }
  }

  window.addEventListener("resize", resize);

  function resize(event) {
    if (menu.classList.contains("change") && window.innerWidth >= 768) {
      slideMenu(event);
    }
  }
})();
