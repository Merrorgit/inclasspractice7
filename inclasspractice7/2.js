function displayDateTime() {
    let now = new Date();

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = days[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let amOrPm = (hours >= 12) ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    let specialCase = '';
    if (hours === 12 && minutes === 0 && seconds === 0) {
        specialCase = amOrPm === 'AM' ? 'Midnight' : 'Noon';
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let currentTime = specialCase ? specialCase : `${hours} ${amOrPm} : ${minutes} : ${seconds}`;
    console.log(`Today is : ${dayOfWeek}.`);
    console.log(`Current time is : ${currentTime}`);
}

displayDateTime();
