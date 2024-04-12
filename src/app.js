/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
  const generateRandomNumber = () => {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * (numbers.length - 1));
    return numbers[indexNumbers];
  };

  const generateRandomSuit = () => {
    const suit = ["diamond", "heart", "club", "spade"];
    let indexSuit = Math.floor(Math.random() * (suit.length - 1));
    console.log(indexSuit);
    return suit[indexSuit];
  };

  const myBtn = document.querySelector(".button");
  myBtn.addEventListener("click", function() {
    document.querySelector(".card").innerHTML = generateRandomNumber();
    document.querySelector(".card").classList.add(generateRandomSuit());
    console.log(generateRandomSuit());
  });
};
