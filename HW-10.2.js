let coupone = prompt("Введите промокод");
const code = "скидка";
let massage = "Промокод не работает";
if (coupone.toLowerCase() === code) {
  massage = "Промокод применён";
}
alert(massage);