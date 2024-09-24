function tabuadaNumero(){
    let numero=parseInt(prompt("Digite um número para ver a tabuada:"));
    let i = 1;
    let resultado= "";

    while(i<=10){
        console.log(numero,"*",i,"=", numero*i);
        i++;
    }
}