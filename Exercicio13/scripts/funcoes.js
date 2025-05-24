function soma() {
	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	alert(parseInt(n1) + parseInt(n2))
}

function subtracao() {
	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	alert(parseInt(n1) - parseInt(n2))
}

function multiplicacao() {
	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	alert(parseInt(n1) * parseInt(n2))
}

function divisao() {
	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	if (parseInt(n2) !== 0)
		alert(parseInt(n1) / parseInt(n2))
	else
		alert("Divisão inválida")
}

function somaIntervalo() {
	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	let comeco = 0, fim = 0;
	if (parseInt(n1) > parseInt(n2)) {
		comeco = parseInt(n2)
		fim = parseInt(n1)
	} else {
		comeco = parseInt(n1)
		fim = parseInt(n2)
	}

	let soma = 0;
	for (let i = comeco; i <= fim; i++)
		soma += i

	alert(soma)
}

function fatorial() {
	const n1 = document.getElementById("n1").value

	if (parseInt(n1) < 0)
		alert(0)
	else {
		const n = parseInt(n1);

		let fat = 1;
		for (let i = 2; i <= n; i++)
			fat *= i

		alert(fat)
	}
}

function intervalo() {
	let resposta = []
	let lista = document.getElementById("lista")

	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	let comeco = 0, fim = 0;
	if (parseInt(n1) > parseInt(n2)) {
		comeco = parseInt(n2)
		fim = parseInt(n1)
	} else {
		comeco = parseInt(n1)
		fim = parseInt(n2)
	}

	for (let i = comeco; i <= fim; i++)
		resposta.push(i)

	lista.innerHTML = ""
	console.clear()
	resposta.forEach(numero => {
		console.log(numero)
		lista.innerHTML += `${numero} <br/>`
	})
}

function intervaloPares() {
	let resposta = []
	let lista = document.getElementById("lista")

	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	let comeco = 0, fim = 0;
	if (parseInt(n1) > parseInt(n2)) {
		comeco = parseInt(n2)
		fim = parseInt(n1)
	} else {
		comeco = parseInt(n1)
		fim = parseInt(n2)
	}

	for (let i = (comeco - comeco % 2); i <= fim; i += 2)
		resposta.push(i)

	lista.innerHTML = ""
	console.clear()
	resposta.forEach(numero => {
		console.log(numero)
		lista.innerHTML += `${numero} <br/>`
	})
}

function intervaloMultiplosCinco() {
	let resposta = []
	const lista = document.getElementById("lista")

	const n1 = document.getElementById("n1").value
	const n2 = document.getElementById("n2").value

	let comeco = 0, fim = 0;
	if (parseInt(n1) > parseInt(n2)) {
		comeco = parseInt(n2)
		fim = parseInt(n1)
	} else {
		comeco = parseInt(n1)
		fim = parseInt(n2)
	}

	for (let i = (comeco + 5 - comeco % 5); i <= fim; i += 5)
		resposta.push(i)

	lista.innerHTML = ""
	console.clear()
	resposta.forEach(numero => {
		console.log(numero)
		lista.innerHTML += `${numero} <br/>`
	})
}

function alertaTexto() {
	const texto = document.getElementById("texto").value

	if (texto.length >= 10)
		alert("Este texto tem 10 ou mais caracteres")
	else
		alert(texto)
}
