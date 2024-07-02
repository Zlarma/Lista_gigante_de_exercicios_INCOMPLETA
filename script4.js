let resposta = document.getElementById('resposta')

function termoLOL(){
    let fare = Number(document.getElementById('fare').value)
    let fim2 = (fare - 32) * 5 / 9
    console.log(fim2)
    resposta.innerHTML = fare + "F° convertido para celsius é " + fim2 + "°"
    resposta.style.position = 'relative'
    resposta.style.top = '30px'
}