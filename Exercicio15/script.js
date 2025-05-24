const matriz = [1, 2, 3]
const objeto = [
	{
		nome: "João",
		idade: 50
	},
	{
		nome: "Ana",
		idade: 23
	}
]

const resMat = document.getElementById("res-mat")
const resObj = document.getElementById("res-obj")

atualizaMatriz()
atualizaObjeto()

function insereMatriz() {
	const mat = document.getElementById("mat").value
	matriz.push(parseInt(mat))
	atualizaMatriz()
}

function inserirObjeto() {
	const nome = document.getElementById("nome").value
	const idade = document.getElementById("idade").value
	objeto.push({ "nome": nome, "idade": parseInt(idade) })
	atualizaObjeto()
}

function atualizaMatriz() {
	resMat.innerHTML = `Matriz: ${matriz}`
}

function atualizaObjeto() {
	resObj.innerHTML = `Tamanho do Objeto: ${objeto.length}`
}
