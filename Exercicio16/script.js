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