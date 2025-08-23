/* Task 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
1)Метод, який виводить на екран інформацію про автомобіль.
2)Додавання ім’я водія у список
3)Перевірка водія на наявність його ім’я у списку
4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
const el = (id)=>{
    return document.getElementById(id)
}

const car = {
    brand: 'Mercedes-Benz',
    model: 'GLE',
    type: 'SUV',
    color: 'white',
    year: 2020,
    seats: 4,
    maxSpeed: 350,
    avgSpeed: 120,
    rimSize: '19"',
    fuelConsumption: 11.5,
    bodyKit: 'AMG',
    options: {
        panoramicRoof: true,
        alcantara: true,
        view360: true,
        sportExhaust: false,
        stearingWheelHeating: true,
        
    },
    driver: 'Volodymyr',

    info: function(){
        let html = ""
        html += "<ul>"
        for (let key in this){
            if ( typeof this[key] === "string" || typeof this[key] === "number"){
            html += `<li> ${key}:  <b>${this[key]}</b></li>`        
            }

            if(key === "options"){
                html += "<h5>Options:</h5>"
                for( let optKey in this.options) {
                    html += `<li> ${optKey}:  <b>${(this.options[optKey]  === true)? "+" : "-"}</b></li>` 
                };
            }
        }    
        html += "</ul>"    
        el("rez").innerHTML = html
    },    

    addDriver: function (){
        let  diverName = el("diverName").value
        if (!diverName){
            el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
            return
        } else { this.driver = diverName  }      
    },

    isDriver: function (){
        let  diverName = el("diverName").value
        if (!diverName){
            el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
            return
        }
        if (this.driver === diverName){             
         el("rez2").innerHTML = `Так, водій ${diverName}`
        } else { el("rez2").innerHTML = `Ні, водій не ${diverName}`}
     },  
    
    
   
    roadCalc: function (){    
        const distance = el("distance").value
        if( isNaN(distance) || distance === "" ){
            el("rez3").innerHTML = `<span style="color:red">Введіть числове значення відстані в км</span>`
        } else {
            let time = distance / this.avgSpeed
            const stops = Math.trunc(time / 4)
            let rezTime = 0
            if( stops % 4 === 0 && stops > 0){
                 rezTime = time + stops - 1
                } else {rezTime = time + stops}
    
            const fuel = distance / 100 * this.fuelConsumption
    
            rezTime < 1 
                ? el("rez3").innerHTML = `На дорогу знадобиться ${(rezTime * 60).toFixed(0)} хвилин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
                : el("rez3").innerHTML = `На дорогу знадобиться ${rezTime.toFixed(2)} годин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
        }
    }
}
// function showInfo(){
//     let html = ""
//     html += "<ul>"
//     for (let key in car){
//         if ( typeof car[key] === "string" || typeof car[key] === "number"){
//          html += `<li> ${key}: ${car[key]}</li>`        
//         }
//         if(key === "options"){
//             html += "<h5>Options:</h5>"
//              for( let optKey in car.options) {
//                 html += `<li> ${optKey}:   ${(car.options[optKey] === true)? "+" : "-"}</li>`            
//             };
//      }
//     }
    
//     html += "</ul>"
    
//     el("rez").innerHTML = html
// }


// function isDriver(){
//     let  diverName = el("diverName").value
//     if (!diverName){
//         el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
//         return
//     }
//     if (car.driver === diverName){             
//      el("rez2").innerHTML = `Так, водій ${diverName}`
//     } else { el("rez2").innerHTML = `Ні, водій не ${diverName}`}
//  }


// function addDriver(){
//     let  diverName = el("diverName").value
//     if (!diverName){
//         el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
//         return
//     } else { car.driver = diverName  }      
// }

// function roadCalc(){    
//     const distance = el("distance").value
//     if( isNaN(distance) || distance === "" ){
//         el("rez3").innerHTML = `<span style="color:red">Введіть числове значення відстані в км</span>`
//     } else {
//         let time = distance / car.avgSpeed
//         const stops = Math.trunc(time / 4)
//         let rezTime = 0
//         if( stops % 4 === 0 && stops > 0){
//              rezTime = time + stops - 1
//             } else {rezTime = time + stops}

//         const fuel = distance / 100 * car.fuelConsumption

//         rezTime < 1 
//             ? el("rez3").innerHTML = `На дорогу знадобиться ${(rezTime * 60).toFixed(0)} хвилин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
//             : el("rez3").innerHTML = `На дорогу знадобиться ${rezTime.toFixed(2)} годин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
//     }
// }

/*Task 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї 
частини часу, може змінитися і інша. Наприклад: якщо до
часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15»,
а не «20:59:75». Також потрібно передбачити можливість того,
що користувач може передати 150 секунд, або 75 хвилин.*/

const time = {
    h:0,
    m:0,
    s:0
}

let timeInSec = 0
const rez4 = document.getElementById("rez4")


// const hours = +document.getElementById("hours").value
// const min = +document.getElementById("mins").value
// const sec = +document.getElementById("sec").value
 
function time2sec (time) {
     timeInSec = time.h*3600 + time.m*60 + time.s
}
    
function sec2time (timeInSec){
        time.h = Math.floor(timeInSec / 3600)
        time.m = Math.floor((timeInSec - time.h * 3600) / 60)
        time.s = timeInSec - (time.h * 3600 + time.m * 60)
}
 
function showTime(){
   return rez4.innerHTML = `${String(time.h).padStart(2, '0')}:${String(time.m).padStart(2, '0')}:${String(time.s).padStart(2, '0')}`

}

function changeTime(delta){
    if (isNaN(delta)){
        rez4.innerHTML = `<span style="color:red">Введіть ціле числове значення</span>`
    }  else {
        time2sec(time)
        timeInSec += delta
        sec2time(timeInSec)
        showTime()
    }
}
    
function addHour(){
       const hours = +document.getElementById("hours").value       
       changeTime(hours * 3600)
      
}    

function addMins(){
       const min = +document.getElementById("min").value
       changeTime(min * 60)


}

function addSec(){
       const sec = +document.getElementById("sec").value       
       changeTime(sec)     
}

function minusHour(){
       const hours = +document.getElementById("hours").value
       changeTime((-hours) * 3600)
       
}    

function minusMins(){
       const min = +document.getElementById("min").value       
       changeTime((- min) * 60)
       
}

function minusSec(){
       const sec = +document.getElementById("sec").value       
       changeTime(-sec)
}
      
/*Task 3.Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)*/

const fract1 = {
    chsl: "",
    znam: ""
}
const fract2 = {
    chsl: "",
    znam: ""
}

const rezFract = {
    chsl: 0,
    znam: 0    
}

const drib = {
    mult: multiplyDrib,
    divide: divideDrib,
    plus: addDrib,
    minus: minusDrib,
    nod: dividerNOD
}

function multiplyDrib (chsl1, znam1, chsl2, znam2){
    rezFract.chsl = chsl1 * chsl2
    rezFract.znam = znam1 * znam2
}

function divideDrib (chsl1, znam1, chsl2, znam2){
    rezFract.chsl = chsl1 * znam2
    rezFract.znam = znam1 * chsl2
}

function addDrib (chsl1, znam1, chsl2, znam2){
    rezFract.chsl = (chsl1 * znam2) + (chsl2 * znam1)
    rezFract.znam = znam1 * znam2
    
}

function minusDrib (chsl1, znam1, chsl2, znam2){
    rezFract.chsl = (chsl1 * znam2) - (chsl2 * znam1)
    rezFract.znam = znam1 * znam2
}

function dividerNOD(rezChsl, rezZnam) {
    let a = rezChsl,
        b = rezZnam;
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    } 

    rezFract.chsl = rezChsl / a
    rezFract.znam = rezZnam / a
}

function calcDrib(){
    const
        userOperator = document.getElementById("operator").value,
        rezEl = document.getElementById("rez5"),
        chsl1Val = +document.getElementById("chsl1").value, // числівник
        znam1Val = +document.getElementById("znam1").value, // знаменник
        chsl2Val = +document.getElementById("chsl2").value, // числівник
        znam2Val = +document.getElementById("znam2").value // знаменник
    
    if (!chsl1Val || !znam1Val || !chsl2Val || !znam2Val) {
        rezEl.innerHTML = `<span style="color:red">Введіть числові значення для дробів!</span>`;
        return;
    }
    if (chsl1Val < 0 || znam1Val <= 0 || chsl2Val< 0 || znam2Val <= 0) {
        rezEl.innerHTML = `<span style="color:red">Введіть додатні числа, знаменник не може бути нулем!</span>`;
        return;
    }

    fract1.chsl = chsl1Val
    fract1.znam = znam1Val
    fract2.chsl = chsl2Val
    fract2.znam = znam2Val    
        
    if (userOperator !== "*" && userOperator !== "/" && userOperator !== "-" && userOperator !== "+") {
        rezEl.innerHTML = `<span style="color:red">Введіть * для множення, / для ділення, - для віднімання або + для додавання</span>`;
      } else {
        rezEl.innerHTML = ""
    }  

    switch (userOperator){
        case "*":
            drib.mult(fract1.chsl, fract1.znam, fract2.chsl, fract2.znam)
            drib.nod(rezFract.chsl, rezFract.znam)
            break;
        case "/":
            drib.divide(fract1.chsl, fract1.znam, fract2.chsl, fract2.znam)
            drib.nod(rezFract.chsl, rezFract.znam)

            break;
        case "+":
            drib.plus(fract1.chsl, fract1.znam, fract2.chsl, fract2.znam)
            drib.nod(rezFract.chsl, rezFract.znam)
            
            break;
        case "-":
            drib.minus(fract1.chsl, fract1.znam, fract2.chsl, fract2.znam)
            drib.nod(rezFract.chsl, rezFract.znam)
            break;
        default:
            rezEl.innerHTML = `<span style="color:red">Введіть * для множення, / для ділення, - для віднімання або + для додавання</span>`;
            return;         
    }
    
    document.getElementById('rezChsl').innerText = rezFract.chsl
    document.getElementById('rezZnam').innerText = rezFract.znam
}
