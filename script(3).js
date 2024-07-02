let resposta = document.getElementById('resposta')

function Comprar(){
    let cenora = Number(document.getElementById('cenora').value)
    let chu = Number(document.getElementById('chu').value)
    let tomate = Number(document.getElementById('tomate').value)
    let bata = Number(document.getElementById('bata').value)
    let ai = Number(document.getElementById('ai').value)
    let bolha = Number(document.getElementById('bolha').value)

    const Precocenora = 3.59
    const Precochu = 1.79
    const Precotomate = 5.35
    const Precobata = 4.43    
    const Precoai = 2.87
    const Precobolha = 3.32
    
    
    let compra = (Precocenora * cenora) + (Precochu * chu) + (Precotomate * tomate) + (Precobata * bata) + (Precoai * ai) + (Precobolha * bolha)
    compra.toFixed(2)
   
    console.log(compra)
    if(compra >= 10){
        resposta.innerHTML = 'Tu compraste R$' + compra + ' de verduras, mui bueno!'
        resposta.style.marginTop = '-200px'
        resposta.style.marginRight = '-200px'
    compra.toFixed(2)

    }else if(compra == 0){
            resposta.innerHTML = 'Tu não compraste nada, pô.'
        resposta.style.marginTop = '-200px'
        resposta.style.marginRight = '-200px'
    compra.toFixed(2)
        
    }else if(compra <= -1){
        resposta.innerHTML = 'Tu não podes vender verduras aqui, PÔ'
        resposta.style.marginTop = '-200px'
        resposta.style.marginRight = '-200px'
    compra.toFixed(2)
}

    else if(compra < 10){
    resposta.innerHTML = 'Tu compraste R$' + compra + ' de verduras, compra mais ai pô.'
    resposta.style.marginTop = '-200px'
    resposta.style.marginRight = '-200px'
    compra.toFixed(2)

    }
}