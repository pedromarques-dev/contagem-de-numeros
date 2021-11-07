function contar(){

let inicio = document.getElementById('Num1')
let fim = document.getElementById('Num2')
let passo = document.getElementById('Num3')
let res = document.getElementById('resultado')


if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] Faltam dados')
} else{
    res.innerHTML = 'Contando... <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f) {
    for(c = i; c <= f; c+=p){
        res.innerHTML += `${c} \u{1F449}`
    }
    } else if (f < i){
    for(c = i; c >= f; c-=p){
        res.innerHTML += `${c} \u{1F449}`
    }

    }  else {
        res.innerHTML = 'Contagem Impossivel.'
    } 

    res.innerHTML += `\u{1F3F4}`
}
}