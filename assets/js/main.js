/* 
---Mail
----------Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
---Gioco dei dadi
----------Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
document.querySelector("#start").addEventListener("click", function (event) {
  event.preventDefault();

  //Chiedere all'utente la mail
  const email = document.getElementById("emailForm").value;

  console.log(email);

  //Controllare che sia nella lista
  const emailVerified = ["admin@gmail.com", "root@gmail.com"];
  console.log(emailVerified);
  if (emailVerified.includes(email)) {
    //Generare un numero random da 1 a 6 per il giocatore
    const numberGamer = Math.floor(Math.random() * 6) + 1;
    console.log(numberGamer);

    //Cenerare un numero random da 1 a 6 per il computer
    const numberComputer = Math.floor(Math.random() * 6) + 1;
    console.log(numberComputer);
    //Vedere quale dei due numeri è più alto
    if (numberGamer >= numberComputer) {
      document.getElementById("result").innerHTML = "Hai vinto";
    } else if (numberComputer >= numberGamer) {
      document.getElementById("result").innerHTML =
        "Hai perso, Il computer ha vinto";
    } else if (numberComputer == numberGamer) {
      //Stabilire il vincitore

      document.getElementById("result").innerHTML = "Pareggio";
    }
  } else {
    document.getElementById("result").innerHTML =
      "ERRORE NELL'INSERIMENTO DELLA MAIL";
  }
  document.getElementById("resultContainer").classList.remove("d-none");
});
document.querySelector("#reset").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("resultContainer").classList.add("d-none");
  document.getElementById("emailForm").value = "";
});
