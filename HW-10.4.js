let name = prompt("Введите свое имя");
let year = prompt("Введите свой год рождения");
if (0 < parseInt(year)) {
  let executeDate = new Date();
  let age = executeDate.getFullYear() - parseInt(year);
  let ageOption = "год";
  if (age % 10 > 1 && age % 10 < 5) {
    ageOption = "года";
  } else if (age % 10 > 4) {
    ageOption = "лет";
  }
  alert(`${name}:${age} ${ageOption}`);
} else {
  alert("Год должен быть числом!");
}
