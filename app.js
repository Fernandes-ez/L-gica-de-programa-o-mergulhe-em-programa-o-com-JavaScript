alert('Boas vindas! Começou viu?');
let numeroMaximo = 5000; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);
let chute;
let tentativas = 1;
while ( chute != numeroSecreto){
    
    chute = prompt(`Digite um número entre 0 e ${numeroMaximo}`);
    if(numeroSecreto == chute){
        break;
    }else{
        if(chute > numeroSecreto){
            alert('O número secreto é menor do que '+chute);
        }else{
            alert('O número secreto é maior que '+chute);
        }
        tentativas++;
}
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você decobriu o número secreto! ${numeroSecreto} em `+tentativas+ ' '+palavraTentativa);

