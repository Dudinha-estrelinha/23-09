function coletarDadosPessoas(){
    let continuar = true;
    let totalIdades =0;
    let quantidade = 0;
    let menorAltura = infinity;
    let maiorPeso = infinity;
    while (continuar){
     let altura= parseInt(prompt("digitea altura da pessoa:"));
     let peso=parseInt(prompt("digite o peso da pessoa:"));
     let idade= parseInt(prompt(" digite a idade da pessoa: "));

     totalIdades += idade;
     quantidade ++;

     if(altura < menorAltura){
        menorAltura = altura;
     }
    if (peso > maiorPeso){
        maiorPeso = peso;
    }
     continuar = confirm(" deseja adicionar mais uma pessoa?");

    }
    let mediaIdades = totalIdades/quantidade;

    alert(" Altura da pessoa mais jovem"+ menorAltura);
    alert("Peso da pessoa mais velha:"+maiorPeso);
    alert(" Media de idades:"+mediaIdades);
}
