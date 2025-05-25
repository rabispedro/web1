window.onload = () => {
	const input = document.getElementById("input-caracteres")
	contaCaracteres(input)
}

function validaTexto() {
	const input = document.getElementById("entrada-obrigatoria").value

	if (input === "") {
		alert("Campo de texto obrigatório!")
		return false
	}

	return true
}

function validaCpf() {
	const cpf = document.getElementById("cpf-obrigatorio").value

	if (!cpf || cpf == "" || cpf.length !== 11 || isNaN(cpf)) {
		alert("CPF inválido!")
		return false
	}

	return true
}

function contaCaracteres(elemento) {
	const span = elemento.nextElementSibling
	span.innerHTML = `${elemento.value.length}`
}

function manipulaTextos() {
	const textos = document.getElementById("input-textos").value.split(" ")

	if (textos.length <= 2) {
		alert("Deve ser informado um número superior de palavras!")
		return
	}

	const span = document.getElementById("span-inputs")

	textos.forEach((palavra) => {
		const input = document.createElement("input")
		input.disabled = true
		input.value = palavra

		span.appendChild(input)
	})
}

function validaFormulario() {
	let valido = true

	const nome = document.getElementById("nome").value
	const nascimento = document.getElementById("nascimento").value
	const quantidadeFilhos = document.getElementById("quantidade-filhos").value

	const dataNascimento = new Date(nascimento)
	const hoje = new Date()

	// Erros de Nome
	const errosNome = {
		campo: "Nome",
		lista: []
	}

	if (!nome || nome === "") {
		errosNome.lista.push("Campo não pode ser vazio")
	}

	if (nome.trim().length === 0) {
		errosNome.lista.push("Campo não pode conter apenas espaço")
	}

	if (nome.trim().length >= 40) {
		errosNome.lista.push("Campo não pode conter mais de 40 caracteres")
	}

	if (valido && errosNome.lista.length >= 1) {
		valido = false
	}

	// Erros de Nascimento
	const errosNascimento = {
		campo: "Data de Nascimento",
		lista: []
	}

	if (!nascimento || nascimento === "") {
		errosNascimento.lista.push("Campo não pode ser vazio")
	}

	if (dataNascimento.getFullYear() < 1910) {
		errosNascimento.lista.push("Campo não pode ser inferior a 1910")
	}

	if (dataNascimento.getFullYear() > hoje.getFullYear()) {
		errosNascimento.lista.push("Campo não pode ser superior ao ano atual")
	}

	if (valido && errosNascimento.lista.length >= 1) {
		valido = false
	}

	// Erros de Quantidade de Filhos
	const errosQuantidadeFilhos = {
		campo: "Quantidade de filhos",
		lista: []
	}

	if(!quantidadeFilhos || isNaN(quantidadeFilhos)) {
		errosQuantidadeFilhos.lista.push("Campo deve conter apenas valores numéricos")
	}

	if(Number(quantidadeFilhos) < 1 || Number(quantidadeFilhos) > 99) {
		errosQuantidadeFilhos.lista.push("Campo deve estar entre 1 e 99")
	}

	if (valido && errosQuantidadeFilhos.lista.length >= 1) {
		valido = false
	}

	console.clear()
	const erros = [errosNome, errosNascimento, errosQuantidadeFilhos]
	erros
		.filter(erro => erro.lista.length > 0) // Filtra somente os campos com erros
		.forEach(erro => { // Cria um alerta com o campo e os erros daquele campo
			let mensagem = `${erro.campo}:\n`
			erro.lista.forEach(item => mensagem += `- ${item}\n`)

			alert(mensagem)
			console.error(mensagem)
		})

	return valido
}