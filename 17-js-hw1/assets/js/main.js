
function yourName() {
  const yourName = prompt("Вкажіть Ваше ім'я");
  alert(`Привіт, ${yourName}!`)    
} 

function yourBirthYear() {
  const yourBirthYear = prompt("Вкажіть Ваш рік народження");
  const age = 2025 - yourBirthYear;
  alert(`Цього року вам виповниться ${age} повних років!`)    
} 

function squarePerimeter() {
  const length = prompt("Вкажіть довжину сторони квадрату в мм");
  const preimeter =length*4;
  alert(`Периметр квадрату = ${preimeter} мм`)    
} 

function circleArea() {
  const radius = prompt("Вкажіть радіус круга в мм");
  const area = Math.PI * radius ** 2; 
  alert(`Площа кругу = ${area} мм кв.`)    
}

function speed() {
  const distance = prompt("Вкажіть відстань в кілометрах");
  const time = prompt(`Вкажіть вкажіть час (в годинах) за який треба проїхати ${distance}км`);
  const speed = distance/time;
  alert(`Мінімальна швидкість = ${speed} км/год`)    
} 

function convert() {
  const usd = prompt("Вкажіть суму в долларах США (USD)");
  const euro = 41.78 / 49.09 * usd; 
  alert(`Сумма ${usd} долларів США еквівалентна  ${euro} євро`)    
} 