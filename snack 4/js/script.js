//Calcola la somma e la media dei primi 10 numeri.
const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
//sommo tutti i numeri
for (let i = 0; i < numbers.length; i++ ) {
    sum += numbers[i];
    console.log(sum)
}
//calcolo la media, dividendo la somma per 10
