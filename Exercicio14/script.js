
window.onload = () => loadPrompt()

function loadPrompt() {
	const MS_TO_DAYS = (1000 * 60 * 60 * 24)
	const WEEK_DAYS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

	const nome = prompt("Digite seu nome:")

	const dia = prompt("Digite o dia do seu nascimento:")
	const mes = prompt("Digite o mes do seu nascimento:")
	const ano = prompt("Digite o ano do seu nascimento:")

	const nascimento = new Date(ano, (mes-1), dia)
	const agora = new Date()
	const diasDeVida = (agora.getTime() - nascimento.getTime()) / MS_TO_DAYS

	const dataFormatada = (nascimento.getDate()) + "/" + (nascimento.getMonth() + 1) + "/" + (nascimento.getFullYear())

	let mensagem = `Meu nome é ${nome.toLocaleUpperCase()} e nasci em ${dataFormatada} <br>`
	mensagem += `Tenho ${diasDeVida.toFixed(0).toLocaleString()} dias de vida. <br>`
	mensagem += `Nasci na(o) ${WEEK_DAYS[nascimento.getDay()]}.`

	const tagH1 = document.createElement("h1")
	tagH1.innerHTML = mensagem

	const tagBody = document.getElementById("root")
	tagBody.appendChild(tagH1)
}
