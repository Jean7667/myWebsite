//fct 

// array for drinks 

drinkOptions = ["coke","water","Orange Juice","mint tea"];

// array for meal

mealOptions = ["potatoes","bins","meat","fish","carrot"];

// fct to randomly pick a meal and drink

// variable for the number of entries in each array
 
let maxNumberOfMealOptions = mealOptions.length;
console.log(maxNumberOfMealOptions)

let maxNumberOfDrinkOptions = drinkOptions.length;
console.log(maxNumberOfdrinkOptions)

function whatsForDinner () {
    //generate a random number no superior to the number of elements in the array
    let computerChoiceMeal = Math.floor(Math.random()*maxNumberOfMealOptions); 
    console.log(computerChoiceMeal);
    const chosenMeal = mealOptions [computerChoiceMeal];
    console.log(chosenMeal);

// same for drink options
    let computerChoiceDrink = Math.floor(Math.random()*maxNumberOfDrinkOptions); 
    console.log(computerChoiceDrink);
    const chosenDrink = drinkOptions [computerChoiceDrink];
    console.log(chosenDrink);

};
whatsForDinner ();

const message = `Enjoy your ${chosenMeal} and ${chosenDrink}!`;
// log the message
console.log(message);


localStorage