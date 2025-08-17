/* Task 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
1)Метод, який виводить на екран інформацію про автомобіль.
2)Додавання ім’я водія у список
3)Перевірка водія на наявність його ім’я у списку
4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
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

    showInfo,
    addDriver,
    isDriver,
    roadCalc
}

const el = (id)=>{
    return document.getElementById(id)
}

function showInfo(){
    let html = ""
    html += "<ul>"
    for (let key in car){
        if ( typeof car[key] === "string" || typeof car[key] === "number"){
         html += `<li> ${key}: ${car[key]}</li>`        
        }
        if(key === "options"){
            html += "<h5>Options:</h5>"
             for( let optKey in car.options) {
                html += `<li> ${optKey}:   ${(car.options[optKey] === true)? "+" : "-"}</li>`            
            };
     }
    }
    
    html += "</ul>"
    
    el("rez").innerHTML = html
}


function isDriver(){
    let  diverName = el("diverName").value
    if (!diverName){
        el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
        return
    }
    if (car.driver === diverName){             
     el("rez2").innerHTML = `Так, водій ${diverName}`
    } else { el("rez2").innerHTML = `Ні, водій не ${diverName}`}
 }


function addDriver(){
    let  diverName = el("diverName").value
    if (!diverName){
        el("rez2").innerHTML = `<span style="color:red">Введіть ім'я водія</span>`
        return
    } else { car.driver = diverName  }      
}

function roadCalc(){    
    const distance = el("distance").value
    if( isNaN(distance) || distance === "" ){
        el("rez3").innerHTML = `<span style="color:red">Введіть числове значення відстані в км</span>`
    } else {
        let time = distance / car.avgSpeed
        const stops = Math.trunc(time / 4)
        let rezTime = 0
        if( stops % 4 === 0 && stops > 0){
             rezTime = time + stops - 1
            } else {rezTime = time + stops}

        const fuel = distance / 100 * car.fuelConsumption

        rezTime < 1 
            ? el("rez3").innerHTML = `На дорогу знадобиться ${(rezTime * 60).toFixed(0)} хвилин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
            : el("rez3").innerHTML = `На дорогу знадобиться ${rezTime.toFixed(2)} годин(и) та ${fuel.toFixed(1)} літри(ів) палива. Ви зробите ${stops} зупинки(ок)`
    }
}

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


const min = +document.getElementById("mins").value
const sec = +document.getElementById("sec").value
 
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
      






