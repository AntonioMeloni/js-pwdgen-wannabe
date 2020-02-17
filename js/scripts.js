var idNome = prompt('Inserisci il tuo nome');

var idCognome = prompt('Inserisci il tuo cognome');

var idColore = prompt('Inserisci il tuo colore preferito');

var data = new Date();

var annoCorrente = data.getFullYear();

var password = idNome + idCognome + idColore +  (annoCorrente - 2000);
document.getElementById('genera-password').innerHTML = password;

document.getElementById('container').setAttribute('class','visible');
