//creao l'array di email dove vado a fare il cotrollo
let email = ['kevinsonda@gmail.com', 'giacomo@gmail.com', 'giuseppe@gmail.com']

//recupero il pulsante dal dom
const btn = document.getElementById('check')

//aggiungo l'evento click al pulsante
btn.addEventListener('click', function(){
    
    //recupero il vaolre del campo input
    let user_email = document.getElementById('email').value;

    //ciclo l'array
    for (let i = 0; i < email.length; i++){
        //confronto la mail inserita dall'utente con quelle attualmente nell'array
        if (emails[i] == user_email) {
            console.log('Benvenuto')
        }
    }
})