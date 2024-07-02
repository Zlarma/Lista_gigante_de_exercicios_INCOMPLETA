let resposta = document.getElementById('resposta')

function functionCalcular(){
    let area = Number(document.getElementById('area').value)
    console.log(area)
    let total = area * area 
    console.log(total)

    resposta.innerHTML = 'A área da base do triângulo é de ' + total + 'm²'
    resposta.style.position = 'relative'
    resposta.style.top = '30px'


}
let resposta2 = document.getElementById('resposta2')

function functionCalcular2(){
    let comp = Number(document.getElementById('comp').value)
    console.log(comp)
    let alt = Number(document.getElementById('alt').value)
    console.log(alt)
    let total2 = (comp * alt) / 2        
    console.log(total2)

    resposta2.innerHTML = 'A área da base do triângulo é de ' + total2 + 'm²'
    resposta2.style.position = 'relative'
    resposta2.style.top = '30px'
    


}