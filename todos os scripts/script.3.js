function somatorioNumeros(){
    let soma = 0;
    let numero;

while (true){
numero = parseInt(prompt("Digite um numero positivo(ou 0 para sair):"));
if(numero===0)
    break;
soma += numero;
}
alert(" soma total:"+soma);
}