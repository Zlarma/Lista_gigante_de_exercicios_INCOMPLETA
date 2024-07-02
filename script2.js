let resposta3 = document.getElementById('resposta3')

function functionHAIL(){
    let frasco = 55
    let raio = 2.5
    let altura = 22
    let volume = 3.1415 * (raio * raio) * altura
    console.log(volume)
    let detergente = volume * 55      
    let dia = detergente * 16
    let mes = dia * 30 
    console.log(mes)       
    resposta3.innerHTML = "O volume de produção em um mês é de " + mes
    resposta3.style.position = 'relative'
    resposta3.style.top = '30px'
    
}