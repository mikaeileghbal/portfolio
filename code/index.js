const App = (function () {
  const menu = document.querySelector(".menu-container");

  menu.addEventListener("click", slideMenu);

  function slideMenu(event) {
    event.stopPropagation();
    menu.classList.toggle("change");
    if (menu.classList.contains("change")) {
      document.querySelector(".topnav").style.right = "0";
    } else {
      document.querySelector(".topnav").style.right = "-100%";
    }
  }

  document.body.addEventListener(
    "click",
    (e) => {
      if (menu.classList.contains("change")) {
        slideMenu(e);
      }
    },
    false
  );

  const logo = document.getElementById("logo");
  //logo.addEventListener("mouseover", rotateLogo);

  function rotateLogo(event) {
    event.target.animate(
      [
        {
          transform: "rotateY(0deg)",
        },
        { transform: "rotateY(180deg" },
      ],
      {
        duration: 5000,
        iterations: Infinity,
      }
    );
  }
})();
