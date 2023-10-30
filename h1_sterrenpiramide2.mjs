/*We gaan de sterrenpiramide uit M2 aanpassen. 
Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, 
dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:
  *
 ***
*****
 ***
  *
*/
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Geef mij een hoogte in. Pas op dit moet een oneven getal zijn: "));
let teller = 1;
while(hoogte%2==0 && teller <3){
    console.log("Foutieve poging nummer: " + teller)
    hoogte = parseFloat(await userInput.question("Dit is geen even getal probeer opnieuw: "));
    teller++;
}
if(teller==3){
    console.log("3 foutieve pogingen FORCED EXIT");
} else {
let weergave = "";
//bovenste deel piramide
let helft = hoogte/2 +0.5;
for(let i = 0; i<helft; i++){
   weergave="";
    for(let j = 0; j<helft-i-1; j++){
        weergave += " ";
    }
    for(let j = 0; j<i*2+1; j++){
        weergave += "*";
    }
    console.log(weergave)
    }
//onderste deel piramide
for(let i = 1; i<helft; i++){
    weergave="";
     for(let j = 0; j<i; j++){
         weergave += " ";
     }
     for(let j = 0; j<hoogte-i*2; j++){
         weergave += "*";
     }
     console.log(weergave)
     }
    }
process.exit();