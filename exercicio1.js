// Crie uma função onde ira receber como parametro "fruta" 
// se a fruta recebida for igual a banana imprima você pode fazer vitamina de banana,
// se for morango você pode fazer vitamina de morango e se não for nem uma das duas 
// favor escolha outra fruta.

var fruta = "Banana";


function verificarFruta(fruta){
    if(fruta === "Banana"){
        console.log("Você pode fazer vitamina de Banana.");
    } else if(fruta === "Morango"){
        console.log("Você pode fazer vitamina de Morango.");
    } else{
        console.log("Escolha outra fruta.");
    }
}

verificarFruta(fruta)
