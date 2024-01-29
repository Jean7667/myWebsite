


//!to do add with random intervall point to each game 

// An array with objets

let players = [
    {
        name: 'John',
        NameGame: ['Fifa92', 'MarioBross', 'sonic', 'Lego'],
        results: {Fifa92: 5, MarioBross: 3, RallyOne: 4, Lego: 7},
    },
    {
        name: 'Emily',
        NameGame: ['sonic', 'Fifa92','MarioBross', 'Lego'],
        results: {sonic: 3, Fifa92: 5, MarioBross: 8, Lego: 5},
    },
    {
        name: 'Adam',
        NameGame: ['sonic', 'Fifa92', 'Lego', 'MarioBross'],
        results: {sonic: 6, Fifa92: 7, Lego: 9, MarioBross: 8},
    }
];

// display gamer name index 0 John

console.log(players[0].name);

// display game name index 2 of player number 2 index 1 -- Fifa92 

console.log(players[1].NameGame[2]);

// variable calculation of average point for a specific game

const playersAveragePerGame = (array, ChosenGame) => {
    let totalPointofTheGame = 0;
    let playerNumber = 0;
//for each player of my array (players)    
    for(let player of array) {
//if chosen game is MarioBross then        
      if(ChosenGame in player.results) {
//look for obj result where you have MarioBross
        totalPointofTheGame += player.results[ChosenGame];
//add each player points to get the total 
        playerNumber+=1;
      }
    }
    return totalPointofTheGame / playerNumber;
    console.log(totalPointofTheGame,playerNumber)
};

let averagePointMarioBrossGame = playersAveragePerGame(players, 'MarioBross');
console.log(averagePointMarioBrossGame) ;

let averagePointLegoGame = playersAveragePerGame(players, 'Lego');
console.log(averagePointLegoGame);











































//-----------------------------------------------------------------------------------------------
/* another example */
//------------------------------------------------------------------------------------------------


let weatherData = [
    {
        location: 'sandiego',
        temperature: 28,
        humidity: 60,
        windSpeed: 10,
        conditions: 'Clear',
        forecast: [
            { day: 'Monday', temperature: 30, conditions: 'Sunny' },
            { day: 'Tuesday', temperature: 29, conditions: 'Partly Cloudy' },
            { day: 'Wednesday', temperature: 28, conditions: 'Clear' }
        ]
    },
    {
        location: 'lasvegas',
        temperature: 22,
        humidity: 75,
        windSpeed: 15,
        conditions: 'Partly Cloudy',
        forecast: [
            { day: 'Monday', temperature: 25, conditions: 'Partly Cloudy' },
            { day: 'Tuesday', temperature: 24, conditions: 'Showers' },
            { day: 'Wednesday', temperature: 23, conditions: 'Cloudy' }
        ]
    },
    {
        location: 'chicago',
        temperature: 32,
        humidity: 50,
        windSpeed: 8,
        conditions: 'Sunny',
        forecast: [
            { day: 'Monday', temperature: 35, conditions: 'Sunny' },
            { day: 'Tuesday', temperature: 34, conditions: 'Clear' },
            { day: 'Wednesday', temperature: 33, conditions: 'Sunny' }
        ]
    }
];



/**function to calculate the average temperature of all the towns**  */

const averageTemperatureAllTowns  = (array, day) => {
    
    let  totalTemperature= 0;
    let  allTowns= 0;
    for(let towns of array) {
      if( day in towns.forecast.day ) {
        temperature += towns.day.temperature  ;
        allTowns+=1;
      }
    }  
    // calculation of average 
    return  totalTemperature / allTowns;
   
};
let averageTemp = averageTemperatureAllTowns (weatherData,'Wednesday');









let productData = [
    {
        name: 'Laptop',
        price: 1200,
        quantity: 50,
        description: 'Powerful laptop with high-performance features.',
    },
    {
        name: 'Smartphone',
        price: 800,
        quantity: 100,
        description: 'Feature-rich smartphone with advanced capabilities.',
    },
    {
        name: 'Headphones',
        price: 100,
        quantity: 200,
        description: 'High-quality headphones with noise-cancellation technology.',
    },
    {
        name: 'Coffee Maker',
        price: 150,
        quantity: 30,
        description: 'Automatic coffee maker for brewing delicious coffee.',
    }
];

