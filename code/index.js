const App = (function () {
	const menu = document.querySelector(".menu-container");

	function closeSideMenu() {
		document.querySelector(".topnav").style.right = "0";
	}

	function openSideMenu() {
		document.querySelector(".topnav").style.right = "-100%";
	}

	menu.addEventListener("click", slideMenu);
	menu.addEventListener("click", animateMenu);
	function slideMenu(e) {
		e.stopPropagation();
		menu.classList.toggle("change");
		if (menu.classList.contains("change")) {
			closeSideMenu();
		} else {
			openSideMenu();
		}
	}
	function animateMenu() {}

	document.body.addEventListener("click", bodyClick, false);
	function bodyClick(e) {
		if (menu.classList.contains("change")) {
			slideMenu(e);
		}
	}

	window.addEventListener("resize", resize);
	function resize(e) {
		if (menu.classList.contains("change") && window.innerWidth >= 768) {
			slideMenu(e);
		}
	}

	window.addEventListener("scroll", windowScroll);
	function windowScroll(e) {
		const header = document.getElementById("header");
		if (document.documentElement.scrollTop > 20) {
			header.classList.add("slide");
		} else {
			header.classList.remove("slide");
		}
	}
})();
