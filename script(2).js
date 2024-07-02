let resposta = document.getElementById('resposta')

function analiseFunction(){
    let nome = document.getElementById('nome').value
    let age = Number(document.getElementById('age').value)
    console.log(age)
    
    if(age < 16){
        resposta.innerHTML = nome + ' não é permitido votar, pois sua idade é de ' + age + ' anos'
         resposta.style.position = 'relative'
    resposta.style.top = '30px'
        }else{
            resposta.innerHTML = nome + ' é permitido votar, pois sua idade é de ' + age + ' anos'
             resposta.style.position = 'relative'
    resposta.style.top = '30px' 
            
    }
    
}