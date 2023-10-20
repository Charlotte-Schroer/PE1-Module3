import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//Controleer of een getal een priemgetal is

let getal = parseFloat(await userInput.question('Geef mij een getal: '));
let i;
if(getal == 1){
    console.log('Dit is een priemgetal');
}else {
    for(i = 2; getal%i != 0; i++){
    getal/i};
    if(getal==i){
    console.log('Dit is een priemgetal');
    }else{
    console.log('Dit is geen priemgetal');
    }
}


process.exit();