//Task1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function userAge(){
    const age = parseInt(document.getElementById("age").value);

    if (age <= 0 || isNaN(age) ){
        document.getElementById("rez").innerHTML = `<span style="color:red">Введіть коректне цифрове значення</span>`
    } else if (age > 0 && age <= 11) {
        document.getElementById("rez").innerHTML = `Користувач - дитина`
    }
     else if (age >= 12 && age <= 17) {
        document.getElementById("rez").innerHTML = `Користувач - підліток`
    }
     else if (age >=18 && age <= 59) {
        document.getElementById("rez").innerHTML = `Користувач - дорослий`
    } 
     else {
        document.getElementById("rez").innerHTML = `Користувач - пенсіонр`
    }     
}

//Task2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д)

function symbol(){
    const keyNum = parseInt(document.getElementById("symbol").value);
    const result = document.getElementById("rez2");

 switch( keyNum){
    case 1 :
        result.innerText = `Ваш символ : !`;
        break;
    case 2 :
        result.innerText = `Ваш символ : @!`;
        break;
    case 3 :
        result.innerText = `Ваш символ : #`;
        break;
    case 4 :
        result.innerText = `Ваш символ : $`;
        break;
    case 5 :
        result.innerText = `Ваш символ : %`;
        break;
    case 6 :
        result.innerText = `Ваш символ : ^`;
        break;
    case 7 :
        result.innerText = `Ваш символ : &`;
        break;
 
    case 8 :
        result.innerText = `Ваш символ : *`;
        break;
 
    case 9 :
        result.innerText = `Ваш символ : (`;
        break;
 
    case 0 :
        result.innerText = `Ваш символ : )`;
        break;
    
    default : 
        result.innerHTML = `<span style="color:red">Введіть коректне цифрове значення</span>`
 
 }
}

//Task 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function sum(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

   
    if (num1 > num2) {
        const tempNum = num1
        num1 = num2
        num2 = tempNum
    } 

    let sum = 0

    for ( let i=num1; i<=num2; i++) {   
        sum += i
    }

    document.getElementById("rez3").innerText = `Сума всіх чисел = ${sum}`

}

//Task 4. Запитай у користувача 2 числа і знайдинайбільший спільний дільник.

const divider =  ()=> {
    let num3 = +(document.getElementById("num3").value);
    let num4 = +(document.getElementById("num4").value);
    let commonD = 0;
    if( isNaN(num3) || isNaN(num4)){
        document.getElementById("rez4").innerHTML = `<span style="color:red">Введіть коректне цифрове значення</span>`
    }

    for( let i = 1; i <= Math.min( num3, num4); i++){
        if (num3 % i === 0 &&  num4 % i === 0){
            commonD = i
        }
        }
    
    document.getElementById("rez4").innerHTML = `Найбільший спільний дільник = ${commonD}`

}

//Task 5. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const isPalindrom = ()=>{
    let numStr = document.getElementById("num5").value;    
    const digit1 = +numStr % 10
    const digit2 = Math.trunc(+numStr % 100 / 10)
    const digit3 = Math.trunc(+numStr % 1000 / 100)
    const digit4 = Math.trunc(+numStr % 10000 / 1000)
    const digit5 = Math.trunc(+numStr / 10000)
    result5 = `${digit1}${digit2}${digit3}${digit4}${digit5}`
    if (numStr.length !== 5 || isNaN(+numStr)){
        document.getElementById("rez5").innerHTML =`<span style="color:red">Введіть корекнте п’ятирозрядне число</span>`
    } else if( numStr === result5){
        document.getElementById("rez5").innerHTML =`Ваше число паліндром`
    } else {
        document.getElementById("rez5").innerHTML =`Ваше число НЕ паліндром`
    }  
}

/*Task 6. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

const discount = ()=> {
    const userSum =  +(document.getElementById("sumDiscount").value);
    const result6 =  document.getElementById("rez6")    
    switch (true){
        case (isNaN(userSum) || userSum < 0 ):
            result6.innerHTML =`<span style="color:red">Введіть суму покупки</span>`
            break;
        case( userSum < 200):
          result6.innerHTML =`Сума до сплати ${userSum}грн.`;
          break;
        case( userSum >= 200 && userSum < 300):
          result6.innerHTML =`Ваша знижка 3%. Сума до сплати ${userSum - (userSum * 0.03)}грн.`;
          break;
        case( userSum >= 300 && userSum < 500):
          result6.innerHTML =`Ваша знижка 5%. Сума до сплати ${userSum - (userSum * 0.05)}грн.`;
          break;
        case( userSum >= 500 ):
          result6.innerHTML =`Ваша знижка 7%. Сума до сплати ${userSum - (userSum * 0.07)}грн.`;
          break;
    }     
}
/*Task 7. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/

const whatNum = ()=> {
    let positive = 0,
        negative = 0,
        nill = 0,
        paired = 0,
        notPaired = 0;    

    for (let i = 0; i < 10; i++ ) {
        const num6 = +(prompt('Потрібно вводити числа'))

        if (isNaN(num6)){ 
            alert("Введіть число") ;
            i -= 1;   
            break;      
        }

        switch (true){            
            case (num6 === 0) :
                nill += 1;
                paired += 1; 
                break;
            case (num6 < 0 && num6 % 2 === 0) :
                negative += 1;
                paired += 1; 
                break;
            case (num6 < 0 && num6 % 2 !== 0) :
                negative += 1;
                notPaired += 1; 
                break;
            case (num6 > 0 && num6 % 2 === 0) :
                positive += 1;
                paired += 1; 
                break;
            case (num6 > 0 && num6 % 2 !== 0) :
                positive += 1;
                notPaired += 1; 
                break;                      
        }       
    }
    alert(
        `Ви ввлеи: ${positive} додатніх, ${negative} від'ємних чисел та ${nill} нулів, серед них ${paired} парних, ${notPaired} непарних чисел`
    )  
}

//Task 8. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const weekDay = () => {    
    const day = new Date()
    const whichDay = day.getDay()  
    let  dayCount = whichDay

    while (true) {
        switch (dayCount) {
            case 0:
                alert('Неділя');
                break;
            case 1:
                alert('Понеділок');
                break;
            case 2:
                alert('Вівторок');
                break;
            case 3:
                alert('Середа');
                break;
            case 4:
                alert('Четвер');
                break;
            case 5:
                alert("П'ятниця");
                break;
            case 6:
                alert('Субота');
                break;                     
        }

        const nextDay = confirm("Хочеш побачити наступний день?");
        if (!nextDay) { break };

        dayCount > 6 ? dayCount = 0 : dayCount++;       
        // if (dayCount > 6){
        //     dayCount = 0;
        //  } else {
        //     dayCount += 1;
        //  }; 
    }
}

// Task 9.Гра «Вгадай число».
const guessNum = ()=> {
    confirm('Загадай число від 0 до 100')
    
   let  minRange = 0,
        maxRange = 100,
        tempRange = 50;

    for (let i = 0; i < 100; i++ ){
        let N = prompt(`Якщо ваше число менше ${tempRange} введіть символ <, якщо більше символ >, якщо ваше число 50 ввдіть =`)

        if (N === "=") {
            alert(`Ви загадали число ${tempRange}`);
            break;
        }else if (N === ">" && tempRange === 99){ 
            alert(`Ви загадали число 100`);
            break;   
        } else if (N === ">"){
            minRange = tempRange;
            tempRange = Math.trunc((minRange + maxRange)/2)
        }else if (N === "<"){
            maxRange = tempRange;
            tempRange = Math.trunc((minRange + maxRange)/2);        
        }else if (N === null){
            alert('Виходимо з гри');
            break;    
        } else {
            alert(`Ви ввели некореткний симвло, потрібно ввести < або > або = `)
        }
    }    
}

// Task 10.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

const multTable = ()=>{
    let html = '';
    for(let i = 2; i <= 9; i++){
        html += `<div>Таблиця множення на ${i} :</div><ul>`
        for (let j = 1; j <= 10; j++){
            html += `<li>${i} x ${j} = ${i * j} </li>`
        }
        html += '</ul>'
    }
    // console.log(html);
    document.getElementById('rez10').innerHTML = html    
}

// Task 11.Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік. 

const calenderDay = ()=> {
    const userInput =  document.getElementById("userDate").value;
    const isCorrect = /^\d{2}-\d{2}-\d{4}$/; // регулярниий вираз загуглив.

    if( !isCorrect.test(userInput) ){
        document.getElementById("rez11").innerHTML =`<span style="color:red">Введіть дату в коректному форматі ДД-ММ-РРРР</span>`;
        return;
    } 
    // !isCorrect.test(userInput) - рішення від чатGPT томущо userInput !== isCorrect не працює.
    
    const userDate = userInput.split('-')
    
    let maxDays = 0,
        maxMonth = 12,
        day = +userDate[0],
        month = +userDate[1],
        year = +userDate[2];

    // console.log(`вся дата: ${userDate}`);
    // console.log(`день: ${day}  `);
    // console.log(`месяц:${month}` );
    // console.log(`год:  ${year}` );

    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDays = 31;
            break;
            case 1:
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break
        case 2:
            year % 4 === 0 ? maxDays = 28 : maxDays = 29;
            break;
    }

    day++;

    if (day > maxDays ){  
        day = 1;      
        month++;
    };

    if( month > maxMonth){
        month = '01';
        year++;
    }

    const formattedDay = String(day).padStart(2, '0'); // рішення від чатGPT
    const formattedMonth = String(month).padStart(2, '0'); // рішення від чатGPT

     document.getElementById("rez11").innerHTML =`Наступна дата: ${formattedDay}-${formattedMonth}-${year}`
}