function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return console.log(`${year} is a leap year`);
    } else {
        return console.log(`${year} is not a leap year`);
    }
}




let yearToCheck1 = 2000;
let yearToCheck2 = 2016;
let yearToCheck3 = 1800;
isLeapYear(yearToCheck1);
isLeapYear(yearToCheck2);
isLeapYear(yearToCheck3);