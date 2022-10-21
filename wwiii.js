// variables
// data types 
// functions
// if, if else
// basic math
// arrays
// objects

const countryOneNameEl = document.getElementById('country1name')
const countryTwoNameEl = document.getElementById('country2name')
let countryOneName = 'Russia'
let countryTwoName = 'USA'
countryOneNameEl.innerHTML = countryOneName
countryTwoNameEl.innerHTML = countryTwoName
const soldierPower = 10
const planePower = 100
const tankPower = 75

const armyCountryOne = {
    soldiers : 0,
    planes : 0,
    tanks : 0
}

const armyCountryTwo = {
    soldiers : 0,
    planes : 0,
    tanks : 0
}

function fight() {
    let country1Power = armyCountryOne.soldiers * soldierPower + armyCountryOne.planes * planePower + armyCountryOne.tanks * tankPower
    let country2Power = armyCountryTwo.soldiers * soldierPower + armyCountryTwo.planes * planePower + armyCountryTwo.tanks * tankPower
    if (country1Power === country2Power) {
        let fightResult = 'Peace'
        document.getElementById('display-fight').innerHTML = fightResult
        document.getElementById("display-fight").style.color = "yellow";
    }
    if (country1Power > country2Power) {
        let fightResult = 'Russia Wins!'
        document.getElementById('display-fight').innerHTML = fightResult
        document.getElementById("display-fight").style.color = "red";
    }
    if (country1Power < country2Power) {
        let fightResult = 'USA Wins!'
        document.getElementById('display-fight').innerHTML = fightResult
        document.getElementById("display-fight").style.color = "blue";
    }
}

// display soldiers count
document.getElementById('country1soldiers').innerHTML = armyCountryOne.soldiers
document.getElementById('country2soldiers').innerHTML = armyCountryTwo.soldiers

// display planes count
document.getElementById('country1planes').innerHTML = armyCountryOne.planes
document.getElementById('country2planes').innerHTML = armyCountryTwo.planes

// display tanks count
document.getElementById('country1tanks').innerHTML = armyCountryOne.tanks
document.getElementById('country2tanks').innerHTML = armyCountryTwo.tanks

// buy army by incrementing the number of soldiers, planes and tanks
function buyArmySoldiers1() {
    armyCountryOne.soldiers += 1
    document.getElementById('country1soldiers').innerHTML = armyCountryOne.soldiers
}
function buyArmyPlanes1() {
    armyCountryOne.planes += 1
    document.getElementById('country1planes').innerHTML = armyCountryOne.planes
}
function buyArmyTanks1() {
    armyCountryOne.tanks += 1
    document.getElementById('country1tanks').innerHTML = armyCountryOne.tanks
}
function buyArmySoldiers2() {
    armyCountryTwo.soldiers += 1
    document.getElementById('country2soldiers').innerHTML = armyCountryTwo.soldiers
}
function buyArmyPlanes2() {
    armyCountryTwo.planes += 1
    document.getElementById('country2planes').innerHTML = armyCountryTwo.planes
}
function buyArmyTanks2() {
    armyCountryTwo.tanks += 1
    document.getElementById('country2tanks').innerHTML = armyCountryTwo.tanks
}