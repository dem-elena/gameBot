"use strict";
const gameBot = (findNumber) => {
  function find() {
    let myNum = prompt("Угадай число от 1 до 100");
    if (myNum == undefined) {
      alert("Игра окончена");
    } else {
      if (isNaN(parseInt(myNum)) && !isFinite(myNum)) {
        alert("Введи число!");
        find();
      }
      myNum = parseInt(myNum);
      if (myNum !== findNumber) {
        myNum > findNumber
          ? alert("Загаданное число меньше")
          : alert("Загаданное число больше");
        find();
      } else alert("Угадал!");
    }
  }

  find();
};
gameBot(parseInt(Math.random() * 100));
