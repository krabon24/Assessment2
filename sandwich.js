function countDown() {
    for (let i = 5; i > 0; i--) {
        console.log(i)
    }
} countDown(1, 2, 3, 4, 5);

function countUp(start, end) {
    const goingUp = [];
    for (const num of start && end) {
        if ()
    }
} countUp(1, 10)

function isLong(word) {
    if (word.length > 10) {
        return true;
    } else {
        return false;
    }
} console.log(isLong('prettyplease'));      console.log(isLong('slim'));

function whatWaterState(temperature) {
    
    if (temperature <= 32) {
        console.log('solid');
    } else if (temperature > 32 && temperature < 212) {
        console.log('liquid');
    } else {
        console.log('gas');
    }
} whatWaterState(212);      whatWaterState(21);     whatWaterState(200);

const sandwiches = [
    {type: 'italian', calories: 100, cost: 7.69, isVegetarian: false},
    {type: 'veggie', calories: 500, cost: 5.50, isVegetarian: true},
    {type: 'meatball', calories: 900, cost: 8.25, isVegetarian: false},
    {type: 'jackfruit', calories: 650, cost: 8.50, isVegetarian: true},
]

function makeSandwich(sandwichArray, type, calories, cost, isVegetarian) {
    let newSandwich = {type, calories, cost, isVegetarian};
    sandwichArray.push(newSandwich);
}   makeSandwich(sandwiches, 'peanutbutter', 150, 2.00, false);       console.log(sandwiches);

function findVegetarianSandwich(sandwichArray) {
    let findVeggySammy = sandwichArray.find(sammy => sammy.isVegetarian === true);
    return findVeggySammy;
} console.log(findVegetarianSandwich(sandwiches));

function findCheapestSandwich(sandwichArray) {
    let findCheapestSammy = sandwichArray.filter(cheap => cheap.cost < 5.00);
    return findCheapestSammy;
} console.log(findCheapestSandwich(sandwiches));