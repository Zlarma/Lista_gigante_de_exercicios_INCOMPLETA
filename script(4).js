let resposta = document.getElementById('resposta')

function codigo(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const op = String(document.getElementById('op').value)

    console.log(op.charAt(0))

    if(op == "A"){
        let total = num1 + num2
        console.log(total)
        resposta.innerHTML = 'A operação foi de adição, o resultado foi de ' + total
    }else if(op == "S"){
        let total = num1 - num2
        console.log(total)
        resposta.innerHTML = 'A operação foi de subtração, o resultado foi de ' + total
    }else if(op == "M"){
        let total = num1 * num2
        console.log(total)
        resposta.innerHTML = 'A operação foi de multiplicação, o resultado foi de ' + total
    }else if(op == "D"){
        let total = num1 / num2
        console.log(total)
        resposta.innerHTML = 'A operação foi de divisão, o resultado foi de ' + total
    }
}   