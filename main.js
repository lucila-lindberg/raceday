let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;

let runnerAge = 29;

if (runnerAge > 18 && registerEarly === true) {
    raceNumber += 1000;
};

if (runnerAge > 18 && registerEarly === true) {
    console.log(`This is your race number: ${raceNumber}. You will start at 9:30 AM.`);
} else if (runnerAge > 18 && registerEarly === false) {
    console.log(`This is your race number: ${raceNumber}. You will start at 11:00 AM.`);
} else if (runnerAge <= 18) {
    console.log(`This is your race number: ${raceNumber}. You will start at 12:30 PM.`);
}


console.log(raceNumber);
