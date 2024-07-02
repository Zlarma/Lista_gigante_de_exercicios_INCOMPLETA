let resposta = document.getElementById('resposta')

function functionHAIL(){
    let kg = 14.95
    let prato1 = 1.27
    let prato2 = 0.873
    let prato3 = 0.792 
    let prato4 = 0.559
    let prato5 = 0.672
    let prato6 = 0.714
    let prato7 = 0.623
    let buffet = prato1 + prato2 + prato3 + prato4 + prato5 + prato6 + prato7
    console.log(buffet)
    let meiahora = buffet * 2
    let umahora = buffet * 4
    let treshoras = buffet * 12
    let vintedoisdias = treshoras * 22
    let price = buffet * kg
    let receita = price * 30
    let receitatres = treshoras * kg

    resposta.innerHTML = "O valor total dos pratos em um mês foi de R$ " + receita +  "<br> O peso total dos pratos em um mês foi de " + vintedoisdias + "kg" + "<br> O valor dos pratos em três horas foi de R$" + receitatres
    resposta.style.position = 'relative'
    resposta.style.top = '30px'
}