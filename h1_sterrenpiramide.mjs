//het moet een diamantvorm krijgen
//verder afwerken, Ik loop er vast in

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Geef mij een hoogte in: '));
console.log('Dit is uw gekozen hoogte: ' + hoogte);

//Bovenste rij diamant
let bovensteRij = 1;

while(bovensteRij<=hoogte){
    let spatie = hoogte - bovensteRij;
    let aantalSterren = 2*bovensteRij - 1;
    let ster=' '.repeat(spatie) + '*'.repeat(aantalSterren);
    console.log(ster);
    bovensteRij++;
}

//Onderste rij diamant
let ondersteRij = 1;

while(ondersteRij < hoogte){
    let spatie = ondersteRij;
    let aantalSterren = 2*(hoogte-ondersteRij) -1;
    let ster = ' '.repeat(spatie) + '*'.repeat(aantalSterren);
    console.log(ster);
    ondersteRij++;
}

process.exit();