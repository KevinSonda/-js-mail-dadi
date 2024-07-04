//genero il numero random per l'utente
let user_number = Math.floor(Math.random() * 6 + 1);

//genero il numero random per il pc
let pc_number = Math.floor(Math.random() * 6 + 1);

const user_icon = document.getElementById('user-number')
const pc_icon = document.getElementById('pc-number')

if (user_number == 1){
    user_icon.classList.add('fa-dice-one')
}
else if (user_number == 2){
    user_icon.classList.add('fa-dice-two')
}
else if (user_number == 3){
    user_icon.classList.add('fa-dice-three')
}
else if (user_number == 4){
    user_icon.classList.add('fa-dice-four')
}
else if (user_number == 5){
    user_icon.classList.add('fa-dice-five')
}
else {
    user_icon.classList.add('fa-dice-six')
}

if (pc_number == 1){
    user_icon.classList.add('fa-dice-one')
}
else if (pc_number == 2){
    pc_icon.classList.add('fa-dice-two')
}
else if (pc_number == 3){
    pc_icon.classList.add('fa-dice-three')
}
else if (pc_number == 4){
    pc_icon.classList.add('fa-dice-four')
}
else if (pc_number == 5){
    pc_icon.classList.add('fa-dice-five')
}
else {
    pc_icon.classList.add('fa-dice-six')
}

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