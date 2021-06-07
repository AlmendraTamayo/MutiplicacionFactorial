
let num = prompt("Ingrese un número entero entre el 1 y el 20")
if (num<1 || num>20){
    alert("número fuera de rango")
} else{

    for (let i = 1; i<=num; i++){
        let resultadomulti = (mult) => num*i
        
        console.log(i+" x "+num +" = "+ resultadomulti(num))

    }

    for (let i = 1; i<=num; i++){
            var resultadofact = 1;
        for (let j =1; j<=i; j++){
            resultadofact=resultadofact*j
    
        }
        console.log("Factorial de "+i+" es: "+resultadofact)
    }

}



