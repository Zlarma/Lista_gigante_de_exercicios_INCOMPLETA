let resposta = document.getElementById('resposta')

function calcular(){

      let preco = Number(document.getElementById('preco').value)
      let porcem = Number(document.getElementById('porcem').value)
      let final = (porcem / 100) * preco
    console.log(final)

    resposta.innerHTML = 'O preço final é de R$' + final
}