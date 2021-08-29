
let valorMultiplicado = parseInt(prompt("Ingresa el numero del que deseas conocer su tabla de multiplicación: "));
let multiplicacion = 0;

for(let i=1;i<=10;i++){

    multiplicacion = valorMultiplicado*i;
    console.log(valorMultiplicado + " x " + i + " = " + multiplicacion);
}
