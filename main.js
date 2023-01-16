
let cityId = {
    Kyiv: 703448,
    Dnipro: 709930,
    Zaporizhia: 687700,
    Kharkiv: 706483,
    Odesa: 698740,
    Yalta: 688533,
}
let newSel = document.querySelector('.fearures__sel')
let newOp = document.createElement("option");
let btnOne = document.querySelector('.weather__btn');
function cityName() {
    for (let key in cityId) {
        newOp.innerHTML = key;
        newOp.setAttribute("value", `${key}`);
        newSel.append(newOp.cloneNode(true));
        
    }
}
cityName();

function getId() {
    let c = '';
    for (let key in cityId) {
        if (key == newSel.value) {
            c += `${cityId[key]}`
        }
    }
    return c;
}

// ======================================================================================================================
fetch(`https://api.openweathermap.org/data/2.5/weather?id=703448&appid=539d8d19922dec66595bbecace10ce4f`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        console.log(data);
        document.querySelector('.weather__city-name').textContent = data.name;
        document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp) - 273}${'&deg'}`;
        document.querySelector('.weather__coutry').innerHTML = data.sys.country;
        document.querySelector('.fearures__icon').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
        document.querySelector('.fearures__wind').textContent = `${'Швидкість вітру: '}${data.wind.speed}${' m/s'}`;
        document.querySelector('.fearures__humidity').innerHTML = `${'Відносна вологість: '}${data.main.humidity}${'&#37'}`;
        document.querySelector('.fearures__discription').textContent = `${'Опис: '}${data.weather[0].description}`;
        document.querySelector('.fearures__deg').innerHTML = `${'Напрям вітру: '}${data.wind.deg}${'&deg'}<img src = "./направление.png" >`;
        document.querySelector('.fearures__pressure').textContent = `${Math.round(data.main.pressure * 0.0075)}${' mm'}`;
    });


//======================================================================================================================
btnOne.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${getId()}&appid=539d8d19922dec66595bbecace10ce4f`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.weather__city-name').textContent = data.name;
            document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp) - 273}${'&deg'}`;
            document.querySelector('.weather__coutry').innerHTML = data.sys.country;
            document.querySelector('.fearures__icon').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`;
            document.querySelector('.fearures__wind').textContent = `${'Швидкість вітру: '}${data.wind.speed}${' m/s'}`;
            document.querySelector('.fearures__humidity').innerHTML = `${'Відносна вологість: '}${data.main.humidity}${'&#37'}`;
            document.querySelector('.fearures__discription').textContent = `${'Опис: '}${data.weather[0].description}`;
            document.querySelector('.fearures__deg').innerHTML = `${'Напрям вітру: '}${data.wind.deg}${'&deg'}<img src = "./направление.png" >`;
            document.querySelector('.fearures__pressure').textContent = `${Math.round(data.main.pressure * 0.0075)}${' mm'}`;
        })

});
