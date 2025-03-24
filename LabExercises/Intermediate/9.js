let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};


function sumSalaries(salaris) {    //function to sum all the salaries in the object
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}
console.log("Total Salaries: $" + sumSalaries(salaries));


function topEarner(salaries) {    //function to find the top earner in the object
    let maxSaalary = 0;
    let topEarner = "";

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSaalary) {
            maxSaalary = salary;
            topEarner = name;
        }
    }
    return topEarner;
}
console.log("Top Earner: " + topEarner(salaries));