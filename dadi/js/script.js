//genero il numero random per l'utente
let user_number = Math.floor(Math.random() * 6 + 1);

//genero il numero random per il pc
let pc_number = Math.floor(Math.random() * 6 + 1);

//confronto i due numeri
if (user_number > pc_number){
    console.log('Hai vinto');
}
else if (user_number < pc_number){
    console.log('Hai perso');
}
else {
    console.log('Pareggio')
}