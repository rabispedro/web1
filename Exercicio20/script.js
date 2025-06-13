//	Sempre cria um id novo para cada usuário
let usuariosId = 0

function adicionaUsuario() {
	const inputNome = document.getElementById("novo-nome")
	const novoNome = inputNome.value

	const inputTelefone = document.getElementById("novo-telefone")
	const novoTelefone = inputTelefone.value

	if (!novoNome || novoNome.trim(" ").length === 0 || !novoTelefone || novoTelefone.trim(" ").length === 0) {
		alert("Não é possível adicionar um novo contato deixado os dados do atual em branco.")
		return false
	}

	const novoId = usuariosId++

	const novoUsuario = document.createElement("span")
	novoUsuario.id = `${"usuario-" + novoId}`
	novoUsuario.innerHTML = `
	<label for=${"nome-" + novoId}>Nome: </label>
	<input type="text" id=${"nome-" + novoId} value=${novoNome}>

	<label for=${"telefone-" + novoId}>Telefone: </label>
	<input type="text" id=${"telefone-" + novoId} value=${novoTelefone}>

		<button onclick="removeUsuario(${novoId})"><img src="./assets/images/lixeira.png"
			alt="Uma pequena lixeira preta"></button>
	`
	const listaUsuarios = document.getElementById("lista-usuarios")
	listaUsuarios.appendChild(novoUsuario)

	inputNome.value = ""
	inputTelefone.value = ""
}

function removeUsuario(id) {
	const listaUsuarios = document.getElementById("lista-usuarios")
	const span = document.getElementById(`usuario-${id}`)

	listaUsuarios.removeChild(span)
}
