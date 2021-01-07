/**Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */
var utente=prompt('inserisci una parola');



var p=Pali(utente);

function Pali(text){
    if(text===text.split('').reverse().join('')){
        return alert(text+' questa è una parola palindroma');
            }
    
  return alert(text +' questa è una parola non palindroma');
}

/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

 //area UTENTE!!
var utenteGioco=prompt('scegli Pari o Dispari');
var NumeroUtente=parseInt(prompt('inserisci un valore da 1 a 5'));



//VALORI DELLA FUNZIONE
var min=1;
var max=5;
var rand=game(min, max)
console.log(rand);
var risult=NumeroUtente+rand

//VALORI DELLE CONDIZIONI
var pari='pari'
var disp='dispari'

var loop=false;
//controllo
while(loop===true){

    if (utenteGioco!== pari || NumeroUtente>5||NumeroUtente===0){
        alert('hai inserito degli elementi sbagliati')
    }
    else if(utenteGioco===pari && risult%2==0){
        alert("ha vinto l'utnete")
    }
    else if(utente===disp && risult%2!=0){
        alert("ha vinto l'utnete")
    }
    else{
        alert("ha vinto la macchina")
        
    }
 loop===true   
}

//FUNZIONE 
function game(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}