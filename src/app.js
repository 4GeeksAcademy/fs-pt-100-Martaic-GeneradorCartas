import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const randomMaker = (arr) => Math.floor(Math.random() * arr.length);
const valueExtract = arr => arr[randomMaker(arr)];

let tiempoRestante = 10;

const cardCreation = (arrPalos, arrValores = []) => {
  const palo = valueExtract(arrPalos);
  const valor = valueExtract(arrValores);

  const paloUp = document.getElementById("paloUp");
  const numero = document.getElementById("numero");
  const paloDown = document.getElementById("paloDown");
  const tiempoDisplay = document.getElementById("tiempo");

  paloUp.textContent = palo;
  numero.textContent = valor;
  paloDown.textContent = palo;

  if (palo === '♥' || palo === '♦') {
    paloUp.classList.add("rojo");
    paloDown.classList.add("rojo");
    numero.classList.add("rojo");
  } else {
    paloUp.classList.add("negro");
    paloDown.classList.add("negro");
    numero.classList.add("negro");
  }

  tiempoRestante = 10;
};

document.getElementById("generateCardButton").addEventListener("click", function() {
  cardCreation(palos, valores);
});

window.onload = function() {
  cardCreation(palos, valores);

  setInterval(() => {
    tiempoRestante--;
    document.getElementById("tiempo").textContent = `Nueva carta en: ${tiempoRestante}s`;

    if (tiempoRestante === 0) {
      cardCreation(palos, valores);
    }
  }, 1000);
};


