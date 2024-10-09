function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9+(32*5))/5
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (5*(fahrenheit-32))/9
    console.log(`${fahrenheit}°F is ${celsius}°C`);
}


let fahrenheit = celsiusToFahrenheit(60);

let celsius = fahrenheitToCelsius(45);
