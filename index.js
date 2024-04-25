document.querySelectorAll(".nav-link").forEach((x) => {
	x.addEventListener("click", function () {
		const prefix = x.querySelector(".prefix");
		if (x.nextElementSibling.classList.contains("nav-tree")) {
			if (x.nextElementSibling.classList.contains("show")) {
				x.nextElementSibling.classList.remove("show");
				prefix.classList.remove("minus");
				prefix.classList.add("plus");
			} else {
				prefix.classList.add("minus");
				prefix.classList.remove("plus");
				x.nextElementSibling.classList.add("show");
			}
		}
	});
});
