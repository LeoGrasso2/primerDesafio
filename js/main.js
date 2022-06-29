alert('Bienvenido al sistema de cálculo de cuotas.');

for(var i=0; i<1;i++){
    var opcion=prompt('Opcion 1: Monto sin interés.\nOpcion 2: Monto con interés ');
    opcion=Number.parseInt(opcion);
    menu(opcion);

}

function menu(opcion){
    let n1;
    let n2;
    switch(opcion){
        case 1:
            n1=Number.parseInt(prompt('Ingrese el monto total.'));
            n2=Number.parseInt(prompt('Ingrese la cantidad de cuotas a utilizar.'));
            alert('El monto total sería de $' + n1 + ', en ' + n2 + ' cuotas de $' + (n1/n2) +'.');
        break;
        case 2:
            n1=Number.parseInt(prompt('Ingrese el monto total.'));
            n2=Number.parseInt(prompt('Ingrese la cantidad de cuotas a utilizar.'));
            let n3=Number.parseInt(prompt('Ingrese el porcentaje de interés'));
            let extra=(n1*n3)/100;
            alert('El monto total sería de $' + (n1+extra) + ', en ' + n2 + ' cuotas de $' + ((n1+extra)/n2) +'.');
        break;
        default:
        alert('No ingresó un numero correcto. Volviendo al menu inicial...');
        i--;
        return;
  
} 
   let elec=prompt('Quiere hacer otro cálculo?\n1-Si.\n2-No (salir).');
   if(elec==1){
    i--;
   }
   else{
    document.write('<div style="text-align:center;font-family:sans-serif;font-size:3em;">Programa terminado.</div>');
   }
}        