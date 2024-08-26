alert ('Boas vindas ao nosso site')

/*let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 25;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);
nome = prompt('Insira seu nome');
idade = prompt ('Insira sua idade');
if(idade >= 18){
    alert('Já pode tirar a habilitação');
}

let dia = prompt('Que dia da semana é hoje?');

if(dia == 'sabado' || dia == 'domingo'){
    alert('Bom fim de semana');
}else{
    alert('Boa semana!');
}

let numero = prompt('Insira um número positivo ou negativo');

if(numero < 0){
    alert('Seu número é negativo');
}else{
    alert('Seu número é positivo');
}

let pontuacao = prompt('Insira a sua pontuação atual');
if(pontuacao > 100){
    alert('Você venceu!');
}else{
    alert('Continue tentando');
}

let saldo = 2522;
alert(`Seu saldo atual é ${saldo}`);

let nome = prompt('Insira seu nome');
alert('Boas vindas '+nome+'!');*/

let contador = 1;
while(contador <= 10 ){
    alert(contador);
    contador++
}alert('acabou')
let contadorDois = 10;
while(contadorDois >= 1 ){
    alert(contadorDois);
    contadorDois--
}
let numero = prompt('Insira um número para a contagem regressiva');
while(numero >= 1 ){
    alert(numero);
    numero--
}
let numeroPro = prompt('Insira um número para a contagem progressiva');
let inicio = 0;
while(numeroPro >= inicio ){
    alert(inicio);
    inicio++
}