function checkSundaysInJanuary() {
    let sundayYears = [];

    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1); 
        if (date.getDay() === 0) { 
            sundayYears.push(year);
        }
    }

    
    console.log(`${sundayYears.length} times 1st January is being a Sunday`);
    sundayYears.forEach(year => {
        console.log(`1st January is being a Sunday in ${year}`);
    });
}

checkSundaysInJanuary();
