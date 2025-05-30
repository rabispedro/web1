const estados = {
	"sao-paulo": ["Sao Paulo", "Cubatão", "Cravinhos"],
	"minas-gerais": ["Belho Horizonte", "Uberaba", "Araguari"],
	"rio-de-janeiro": ["Rio de Janeiro", "Rio Branco", "São João da Barra"],
	"espirito-santo": ["Vitória", "Pancas", "Colatina"]
}

function escolheEstado(elemento) {
	const cidades = document.getElementById("cidades")

	if (elemento.value === "inicial") {
		cidades.style.display = "none";
	} else {
		cidades.style.display = "block";
	}
}

function apresentaCidades(elemento) {
	const cidades = document.getElementById("cidades-2")
	cidades.replaceChildren()	

	if (elemento.value === "inicial") {
		cidades.style.display = "none";
	} else {
		cidades.style.display = "block";

		const inicial = document.createElement("option")
		inicial.value = "inicial"
		inicial.innerText = "Escolha uma Cidade"
		inicial.selected = true

		cidades.appendChild(inicial)

		estados[elemento.value].forEach(cidade => {
			const tag = document.createElement("option")
			tag.value = cidade.toLocaleLowerCase()
			tag.innerText = cidade

			cidades.appendChild(tag)
		})
	}
}
