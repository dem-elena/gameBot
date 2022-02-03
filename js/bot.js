"use strict";
const gameBot = (findNumber, attemp) => {
  let rezult;
  function find() {
    if (attemp > 0) {
      let myNum = prompt("Угадай число от 1 до 100");
      if (myNum == undefined) {
        alert("Игра окончена");
        rezult = false;
      } else {
        if (isNaN(parseInt(myNum)) && !isFinite(myNum)) {
          alert("Введи число!");
          find();
        }
        myNum = parseInt(myNum);
        if (myNum !== findNumber) {
          attemp--;
          myNum > findNumber
            ? alert(`Загаданное число меньше, осталось попыток ${attemp}`)
            : alert(`Загаданное число больше, осталось попыток ${attemp}`);
          find();
        } else {
          rezult = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        }
      }
    } else {
      rezult = confirm("Попытки закончились, хотите сыграть еще?");
    }
  }
  find();
  return rezult;
};
const gameBotdop = () => {
  if (gameBot(parseInt(Math.random() * 100), 10) === true) {
    gameBotdop();
  }
};
gameBotdop();
