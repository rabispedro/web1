const h1 = document.getElementById("titulo")
h1.innerHTML = `Meu nome é Pedro`

const divs = document.getElementsByClassName("minha-div")

//	Primeira div
divs[0].style.height = "40px"
divs[0].style.backgroundColor = "red"
divs[0].style.border = "1px solid black"

//	Segunda div
divs[1].style.height = "40px"
divs[1].style.backgroundColor = "blue"

//	Terceira div
divs[2].style.height = "40px"
divs[2].style.backgroundColor = "yellow"

const imagem = document.getElementById("imagem")
imagem.src = "./assets/imagens/linux.png"
imagem.alt = "o pinguim do Linux sentado"
imagem.title = "Linux"


function alteraCor(id, cor) {
	const tag = document.getElementById(id)
	tag.style.color = cor
}

const divsBlocos = document.getElementsByClassName("blocos")

divsBlocos[0].addEventListener("mouseover", () => {
	divsBlocos[0].style.backgroundColor = "red"
})

divsBlocos[0].addEventListener("mouseout", () => {
	divsBlocos[0].style.backgroundColor = "transparent"
})

divsBlocos[1].addEventListener("click", () => {
	if (divsBlocos[1].style.backgroundColor === "" || divsBlocos[1].style.backgroundColor === "gray") {
		divsBlocos[1].style.backgroundColor = "blue"
	} else if (divsBlocos[1].style.backgroundColor === "blue") {
		divsBlocos[1].style.backgroundColor = "gray"
	}
})

function criaQuadrado() {
	const article = document.getElementById("exericio-6")

	const quadrado = document.createElement("div")
	quadrado.style.display = "inline-block"
	quadrado.style.backgroundColor = "red"
	quadrado.style.width = "50px"
	quadrado.style.height = "50px"
	quadrado.style.margin = "10px"

	article.appendChild(quadrado)
}

function contaCaracteres(elemento) {
	const span = elemento.nextElementSibling
	span.innerHTML = `Quantidade de caracteres: ${elemento.value.length}`
}

function focaBorda(elemento) {
	elemento.style.border = "1px solid red"
}

function desfocaBorda(elemento) {
	elemento.style.border = "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))"
}
