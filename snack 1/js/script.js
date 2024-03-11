//Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
const numbers =[];
console.log(numbers)
for(let i = 0; i < 5; i++) {
    //chiedere all'utente un numero
    const userNumbers = parseInt(prompt('dimmi un numero'));
    
    
    if(numbers.includes(userNumbers) === false) {
        numbers.push(userNumbers);
    }

}