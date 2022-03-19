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
	function slideMenu(event) {
		event.stopPropagation();
		menu.classList.toggle("change");
		if (menu.classList.contains("change")) {
			closeSideMenu();
		} else {
			openSideMenu();
		}
	}

	function animateMenu() {}

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

	window.addEventListener("scroll", slideHeader);
	function slideHeader(event) {
		const header = document.getElementById("header");
		if (
			document.documentElement.scrollTop > 20 ||
			document.body.scrollTop > 20
		) {
			header.classList.add("slide");
		} else {
			header.classList.remove("slide");
		}
	}
})();
