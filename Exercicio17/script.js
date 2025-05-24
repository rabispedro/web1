const divs = document.getElementsByTagName("div")

divs[0].addEventListener("mouseover", () => {
	divs[0].style.backgroundColor = "red"
})

divs[0].addEventListener("mouseout", () => {
	divs[0].style.backgroundColor = "transparent"
})

divs[1].addEventListener("click", () => {
	if (divs[1].style.backgroundColor === "" || divs[1].style.backgroundColor === "gray") {
		divs[1].style.backgroundColor = "blue"
	} else if (divs[1].style.backgroundColor === "blue") {
		divs[1].style.backgroundColor = "gray"
	}
})
