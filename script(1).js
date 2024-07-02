let resposta = document.getElementById('resposta')

function functionCalcular(){


    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)
    let num6 = Number(document.getElementById('num6').value)
    let num7 = Number(document.getElementById('num7').value)

    let soma = 0
    let meno = 0
    contador = 0
    contador2 = 0
    if((num1 >= 6) &&(num1 <=10)){
             soma += num1
             contador += 1
    }
    if((num2 >= 6) &&(num2 <=10)){
            soma += num2
             contador += 1
    }
    if((num3 >= 6) &&(num3 <=10)){
            soma += num3
             contador += 1
    }
    if((num4 >= 6) &&(num4 <=10)){
            soma += num4
             contador += 1
    }
    if((num5 >= 6) &&(num5 <=10))
    {
            soma += num5
             contador += 1
    }
    if((num6 >= 6) &&(num6 <=10)){
            soma += num6
             contador += 1
    }
    if((num7 >= 6) &&(num7 <=10)){
            soma += num7
             contador += 1
    }
    
    if((num1 >= 0) &&(num1 <6)){
             meno += num1
             contador2 += 1
    }
    if((num2 >= 0) &&(num2 <6)){
            meno += num2
             contador2 += 1
    }
    if((num3 >= 0) &&(num3 <6)){
            meno += num3
             contador2 += 1
    }
    if((num4 >= 0) &&(num4 <6)){
            meno += num4
             contador2 += 1
    }
    if((num5 >= 0) &&(num5 <6))
    {
            meno += num5
             contador2 += 1
    }
    if((num6 >= 0) &&(num6 <6)){
            meno += num6
             contador2 += 1
    }
    if((num7 >= 0) &&(num7 <6)){
            meno += num7
             contador2 += 1
    }
    let mediaMaiorQueSeis = soma / contador
    let mediaMenorQueSeis = meno / contador2
    console.log(mediaMaiorQueSeis)
    console.log(mediaMenorQueSeis)
    resposta.innerHTML = "A média dos números maiores que 6 é de " + mediaMaiorQueSeis + "<br> E a média dos números menores que 6 é de " + mediaMenorQueSeis


  



}
 