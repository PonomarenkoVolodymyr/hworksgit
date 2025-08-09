//Task 1.Напиши всі можливі варіанти створення функцій.
 function myFn () {
    console.log('hello world');        
 } 

const myFn2 = ()=>{
    console.log('hello world');
 }

const myFn3 =  ()=>{
    console.log('hello world');
 }
//Task 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.

function argSum(){
    console.log(arguments.length)
}
argSum('a', 2, true ) // 3

//Task 3.Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге; 
//1 - якщо перше число більше, ніж друге; 
//0 - якщо числа рівні.
const task3 = ()=>{    
    const num1 = +parseFloat(document.getElementById("num1").value);
    const num2 = +parseFloat(document.getElementById("num2").value);

    result = document.getElementById("rez")

    if( isNaN(num1) || isNaN(num2)){
         document.getElementById("rez3").innerHTML = `<span style="color:red">Введіть число</span>`
    } else {
        switch (true){
            case (num1 < num2):
                result.innerHTML = -1;
                break;
            case (num1 > num2):
                result.innerHTML = 1;
                break;
            case (num1 === num2):
                result.innerHTML = 0;
                break;
        }
    }
}

//Task 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
const findF = ()=>{
    const numF = +parseFloat(document.getElementById("numF").value);

    let rezF = 1
    
    for (let i = 1; i <= numF; i++){
        rezF = rezF * i;
    }

    document.getElementById("rez2").innerHTML = `Факторіал числа ${numF} = ${rezF}`
}

//Task 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
const convertNum = ()=>{
     const num3= +(document.getElementById("num3").value);
     const num4= +(document.getElementById("num4").value);
     const num5= +(document.getElementById("num5").value);    

     if (isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById("rez3").innerHTML = `<span style="color:red">Введіть число</span>`
    } else if (num3 < 0 || num4 < 0 || num5 < 0 ){
        document.getElementById("rez3").innerHTML = `<span style="color:red">Введіть додатне число</span>` 
    } else {
         converted = (num3 * 100) + (num4 * 10) + num5;
         document.getElementById("rez3").innerHTML =  `${converted}`
    } 
}

//Task 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
const area = ()=>{
    const length = +(document.getElementById("length").value);
    let width = +(document.getElementById("width").value);
    let calcArea = 0,
        isSquare = '';
        

    function calcSq (length, width){
        calcArea = length * width
        length === width ? isSquare = 'квадрату' : isSquare = 'прямокутнику'
    }
    
    if(!length){
         document.getElementById("rez4").innerHTML = `<span style="color:red">Введіть довжину</span>`
    } else if( !width) {
        width = length
        calcSq(length, width)
        document.getElementById("rez4").innerHTML =  `Площа ${isSquare}: ${calcArea}`
    } else {
        calcSq(length, width)
        document.getElementById("rez4").innerHTML =  `Площа ${isSquare}: ${calcArea}`
    }
}
//Task 7.Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

const num6 = +(document.getElementById("num6").value);
const isPerfect = (num6)=>{
    if( isNaN(num6) || num6 < 0){
        document.getElementById("rez5").innerHTML = `<span style="color:red">Введіть ціле додатнє число</span>`
        return;
    }

    let sum = 1

    for (let i = 2; i <= (num6 / 2); i++){
        if (num6 % i === 0){
            sum = sum + i
        } 
    }

   if( num6 === sum) {
        document.getElementById("rez5").innerHTML = `Число ${num6} - "досконале число"`
    } else {
        document.getElementById("rez5").innerHTML = `Число ${num6} - "Недосконале число"`
   }      
}




//Task 8.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const perfectNums = ()=>{
    const num7 = +(document.getElementById("num7").value);
    const num8 = +(documen.getElementById("num8").value);

    if( isNaN(num7) || num7< 0 || isNaN(num8) || num8 < 0){
        document.getElementById("rez6").innerHTML = `<span style="color:red">Введіть ціле додатнє число</span>`
        return;
    }
    const rezArr=[]

    for ( let j = num7; j < num8; j++ ){
        isPerfect(j)
    }    
}