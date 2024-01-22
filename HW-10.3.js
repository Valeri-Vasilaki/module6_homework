let name = prompt("Введите свое имя");
let year = prompt("Введите свой год рождения");
if (0 < parseInt(year)) {
  let executeDate = new Date();
  let age = executeDate.getFullYear() - parseInt(year);
  alert(`${name}:${age}`);
}else{
    alert("Год должен быть числом!");
}
