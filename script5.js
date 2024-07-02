let resposta = document.getElementById('resposta')

function codigo(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)


    
        if((num1 > num2) && (num1 > num3)){
            resposta.innerHTML =  num1 + ' é maior que '+ num2  +' e '+  num3
        }if((num2 > num1)&&(num2 > num3)){
            resposta.innerHTML = num2 + ' é maior que '+ num1  +' e '+  num3
        }if((num3 > num2)&&(num3 > num1)){
            resposta.innerHTML = num3 + ' é maior que '+ num2  +' e '+  num1
        }
        
    }