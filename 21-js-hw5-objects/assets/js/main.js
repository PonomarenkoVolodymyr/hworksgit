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







