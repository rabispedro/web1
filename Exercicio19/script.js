const dados1 = [
	{
		"Nome": "Ana",
		"E-mail": "ana@hotmail.com"
	},
	{
		"Nome": "Maria",
		"E-mail": "maria@gmail.com"
	},
	{
		"Nome": "Pedro",
		"E-mail": "pedro@gmail.com"
	},
	{
		"Nome": "Marcos",
		"E-mail": "marcola@gmail.com"
	}
]

const artigo1 = document.getElementById("exemplo-1")

const tabela1 = document.createElement("table")

// Setup THeader
const thead1 = document.createElement("thead")
const thr1 = document.createElement("tr")
let ths = []

for (const key in dados1[0]) {
	const tag = document.createElement("th")
	tag.innerText = key

	ths.push(tag)
}

for (const th of ths) {
	thr1.appendChild(th)
}


// Setup TBody
const tbody1 = document.createElement("tbody")
let tbr1 = []

for (const key in dados1) {
	const tag = document.createElement("tr")

	for (const value in dados1[key]) {
		const dado = document.createElement("td")
		dado.innerText = dados1[key][value]

		tag.appendChild(dado)
	}

	tbr1.push(tag)
}

for (const tag of tbr1) {
	tbody1.appendChild(tag)
}

thead1.appendChild(thr1)
tabela1.appendChild(thead1)

tabela1.appendChild(tbody1)
artigo1.appendChild(tabela1)

const dados2 = [
	{
		"Nome": "Ana",
		"E-mail": "ana@hotmail.com",
		"Idade": 20
	},
	{
		"Nome": "Maria",
		"E-mail": "maria@gmail.com",
		"Idade": 30

	},
	{
		"Nome": "Pedro",
		"E-mail": "pedro@gmail.com",
		"Idade": 10
	}
]

const artigo2 = document.getElementById("exemplo-2")

const tabela2 = document.createElement("table")

// Setup THeader
const thead2 = document.createElement("thead")
const thr2 = document.createElement("tr")
let ths2 = []

for (const key in dados2[0]) {
	const tag = document.createElement("th")
	tag.innerText = key

	ths2.push(tag)
}

for (const th of ths2) {
	thr2.appendChild(th)
}


// Setup TBody
const tbody2 = document.createElement("tbody")
let tbr2 = []

for (const key in dados2) {
	const tag = document.createElement("tr")

	for (const value in dados2[key]) {
		const dado = document.createElement("td")
		dado.innerText = dados2[key][value]

		tag.appendChild(dado)
	}

	tbr2.push(tag)
}

for (const tag of tbr2) {
	tbody2.appendChild(tag)
}

thead2.appendChild(thr2)
tabela2.appendChild(thead2)

tabela2.appendChild(tbody2)
artigo2.appendChild(tabela2)