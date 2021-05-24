console.log("Let's roll some dice, baby!");
console.log("---------------------------");

let Roll =() => {
    for( let i = 0; i <= 12; i++) {
    let diceone = Math.floor(Math.random() * 6) + 1
    let dicetwo = Math.floor(Math.random() * 6) + 1
    if (diceone === dicetwo) {
        console.log(`${diceone} + ${dicetwo} == ${diceone + dicetwo} DOUBLES!`)
    }
    else {
        console.log(`${diceone} + ${dicetwo} == ${diceone + dicetwo}`)
    }
}}

Roll()