//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
const numbers =[];
for(let i = 0; i < 6; i++) {
    //chiedo all'utente di inserire sei numeri
    const userNumbers = parseInt(prompt('dammi un numero'))
    //se i numeri sono dispari li metto nell'array
    if(userNumbers % 2 !== 0) {
        numbers.push(userNumbers)
    }
    console.log(numbers)
}
