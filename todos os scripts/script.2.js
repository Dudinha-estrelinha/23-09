function tabuadaTodos(){
    let num=1;
    let resultado="";
    while(num<=9){
         let i= 1;
         console.log("Tabuada de", num+":");
         while(i<=10){
           console.log(num,"*",i,"=",num*i);
            i++;
         }
        console.log("");
        num++;
    }
       
}