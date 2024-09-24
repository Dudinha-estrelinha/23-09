function calcularFatorial(){
    let numero =parseInt(prompt("digite um numero:"));
    let fatorial = 1;
    let i = 1;

    while(i <= numero){
        fatorial *=i;
        i++;
    }
    console.log ("Fatorial:", fatorial);
}