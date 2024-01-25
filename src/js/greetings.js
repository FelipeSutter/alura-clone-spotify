const greetings = document.getElementById("greeting");

const currentHours = new Date().getHours();

const message =
  currentHours < 5
    ? "Boa madrugada!"
    : currentHours >= 5 && currentHours < 12
    ? "Bom dia!"
    : currentHours >= 12 && currentHours < 18
    ? "Boa tarde!"
    : "Boa noite!";

greetings.textContent = message;
