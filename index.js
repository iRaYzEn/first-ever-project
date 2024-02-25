const icon = document.querySelector(".icon");
const barCenter = document.querySelector(".icon__bar-center");
const ul = document.querySelector(".links__list");

console.log(barCenter.style);

icon.addEventListener("click", () => {
	if (ul.style.display === "none") {
		ul.style.display = "block";
		barCenter.style.width = "100%";
	} else {
		ul.style.display = "none";
        barCenter.style.width = "60%"
	}
});
