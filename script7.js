let resposta = document.getElementById('resposta')

function calcular(){

      let preco = Number(document.getElementById('preco').value)
        if(preco <= 50){
            let final = (35 / 100) * preco
            resposta.innerHTML = 'O preço final é de R$' +final

        }
        else if((preco > 50) && (preco < 100)){
            let final = (25 / 100) * preco
            resposta.innerHTML = 'O preço final é de R$' +final

        }
        else{
            let final = (15 / 100) * preco
            resposta.innerHTML = 'O preço final é de R$' +final

        }
    }