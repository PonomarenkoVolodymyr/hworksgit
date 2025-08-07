//task 1. 0.1+0.2  
function calc(){
    const firstNum = parseFloat(document.getElementById("first-num").value);
    const secondNum = parseFloat(document.getElementById("second-num").value);     
    const result = parseFloat((firstNum + secondNum).toFixed(1));    
    
    if (firstNum!==0.1 || secondNum!==0.2 ){
        document.getElementById("rez").innerHTML = `<span style="color:red">Введіть коректні значення для полів</span>`
    } else {
        document.getElementById("rez").innerHTML = `Cума = ${result}`
    }
}

//task 2. "1"+2

function rez2(){
    const num1 = "1";
    const num2 = 2;
    const result2 = +num1 + num2;
    document.getElementById("rez2").innerHTML = `Cума = ${result2}`
}

//task 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

function filesAmount(){
    const flashVolume = parseInt(document.getElementById("flash-volume").value) 

    if (isNaN(flashVolume)){
        document.getElementById("rez3").innerHTML = `<span style="color:red">Введіть ціле цифрове значення в Гігабайтах</span>`
    } else {
        const result3 = Math.trunc(flashVolume * 1024 / 820);
        document.getElementById("rez3").innerHTML = `На Вашу флешку поміститься максимум <b>${result3}</b>  файли(ів) розміром 820 Мб`
    }
}

//task 4. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

function chocoAmount(){     
    const cash = parseFloat(document.getElementById("cash").value);
    const price = parseFloat(document.getElementById("choco-price").value);

    if (isNaN(cash) || isNaN(price)) {
         document.getElementById("rez4").innerHTML =  `<span style="color:red">Введіть цифрове значення в грн.</span>`
    } else if ( cash === 0 || price ===0 )
        { document.getElementById("rez4").innerHTML =  `<span style="color:red">Введіть значення більше 0</span>`
    } else if (price > cash)
        {document.getElementById("rez4").innerHTML =  `<span style="color:red">У Вас недостатньо коштів</span>`
        } else { 
        const result4 = Math.trunc(cash / price)
        const change = (cash % price).toFixed(2)
        document.getElementById("rez4").innerHTML = `Ви можете придбати ${result4} шт., та ще залишится решта ${change} грн.`
    }
}

// task 5. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

function reverseNum(){
    const userNum = parseInt(document.getElementById("num3digt").value);

    // const result51 = userNum.toString().split('').reverse().join('')
    // console.log(result51)

    const digit1 = parseInt(userNum%10)
    const digit2 = Math.trunc(userNum%100/10)
    const digit3 = Math.trunc(userNum/100)
    const result5 = `${digit1}${digit2}${digit3}`
    if (userNum < 100 || userNum > 999 || isNaN(userNum)) {
        document.getElementById("rez5").innerHTML =  `<span style="color:red">Введіть значення між 100 та 999</span>`
    } else {
        document.getElementById("rez5").innerHTML =  `Результат - ${result5}`
    }

}

//task 6. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

function deposit(){
    const depValue = parseFloat(document.getElementById("dep-value").value);
    const result6 = (depValue*0.05/6).toFixed(2)

    if (isNaN(depValue)) {
        document.getElementById("rez6").innerHTML =  `<span style="color:red">Введіть сумму депозиту в грн</span>`
    } else {
        document.getElementById("rez6").innerHTML =  `Сума нарахованих відсотків через 2 місяці буде складати:  ${result6} грн.`
    }
   
}

/*task 7. Що повернуть вирази:

2 && 0 && 3   // поверне: 0

2 || 0 || 3  // поверне: 2

2 && 0 || 3    // поверне: 3
*/