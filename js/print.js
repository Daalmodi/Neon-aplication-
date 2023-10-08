// Función para mostrar el texto en tiempo real
const showText=(text="") => {
    // Obtener el valor del campo de entrada de texto
    
    const outputDiv = document.getElementById("outputText");
    
    if (text==""){
        outputDiv.innerHTML=" Your Text ";

    }
    else{
        outputDiv.innerHTML=text;
    }
 
}
