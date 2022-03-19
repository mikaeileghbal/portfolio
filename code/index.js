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

		const scroll =
			document.documentElement.scrollTop || document.body.scrollTop;

		if (scroll > 20) {
			header.classList.add("slide");
		} else {
			header.classList.remove("slide");
		}
	}

	// Projects section
	let itemTemplate = document.createElement("template");
	let projectcontainer = document.querySelector(".project__container");

	// Array of project items
	let itemObjects = [
		{
			title: "calendar",
			desc: "Dynamic content",
			tags: ["html", "css", "scss", "javascript"],
			links: [
				{ text: "view project", href: "calendar-planner/index.html" },
				{ text: "view code", href: "#" },
			],
			src: "images/calendar.png",
		},
		{
			title: "weather",
			desc: "Calling public API",
			tags: ["html", "css", "scss", "javascript", "API"],
			links: [
				{ text: "view project", href: "#" },
				{ text: "view code", href: "#" },
			],
			src: "images/weather-01.png",
		},
		{
			title: "wordcounter",
			desc: "Regular Expressions",
			tags: ["html", "css", "scss", "javascript", "API"],
			links: [
				{ text: "view project", href: "wordcounter/index.html" },
				{
					text: "view code",
					href: "https://github.com/mikaeileghbal/wordcounter",
				},
			],
			src: "images/wordcounter.png",
		},
		{
			title: "worldclock",
			desc: "Web Components",
			tags: ["html", "css", "scss", "javascript", "API"],
			links: [
				{ text: "view project", href: "#" },
				{ text: "view code", href: "#" },
			],
			src: "images/calendar-2.png",
		},
	];
	// Template for project iotem
	itemTemplate.innerHTML = `<figure class="item">
                <img id="image" class="item__image" src="images/room4.jpg" alt="">
                <figcaption class="item__header">
                    <h3 id="title" class="item__title">Calendar</h3>
                    <p id="desc" class="item__desc">Dynamic content manipulating with javascript. Get elements of
                        document, create
                        template and clone
                        copy from template to create new elements.
                    </p>
                    <ul class="item__list" id="tags">
                        
                    </ul>
                    <ul class="item__list--links" id="viewlinks">
                        
                    </ul>
                </figcaption>
            </figure>`;

	// Iterate projects array and create each element
	for (let i = 0; i < itemObjects.length; i++) {
		createItem(itemObjects[i]);
	}

	// Create project items
	function createItem(item) {
		let newItem = itemTemplate.content.cloneNode(true);

		let image = newItem.querySelector("#image");
		let title = newItem.querySelector("#title");
		let desc = newItem.querySelector("#desc");
		let tags = newItem.querySelector("#tags");
		let viewlinks = newItem.querySelector("#viewlinks");

		image.src = item.src;
		title.textContent = item.title;
		desc.textContent = item.desc;
		for (let i = 0; i < item.tags.length; i++) {
			let li = document.createElement("li");
			li.innerText = item.tags[i];
			tags.append(li);
		}

		console.log(item.links[0].href);
		let li = `<li>
              <i class="fa fa-cube"></i><a class="link--case" href="${item.links[0].href}">live project</a>
            </li>
            <li>
              <i class="fa fa-github"></i><a class="link--case" href="${item.links[1].href}">view code</a>
            </li>`;

		viewlinks.innerHTML = li;
		projectcontainer.append(newItem);
	}
})();
