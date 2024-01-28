let number = parseInt(34.45);

console.log(number);

arColor = ["red","green","blue","yellow","];

console.log(arColor);

arColor.pop("red");

for (mynum =0, mynum <= 30, mynum++) {console.log(mynum);

    const pet = {
        name:"Boomer",
        species: "dog",
        owner:"John",
        lengthOfStay:6,
        activities :["running", "barking","sleeping"]
    };
        
    let numOfActivities = pet.activities.length;
    
    let favActivity = pet.activities.sort()[numOfActivities - 1];
    
    let speciesCapitalised = pet.species[0].toUpperCase() + pet.species.slice(1);
    
    let stayReport = `Dear ${pet.owner},
    
    ${pet.name} stayed at the Paws & Purrfection Palace luxury pet hotel for ${pet.lengthOfStay} days.
    While they were with us, we did ${numOfActivities} activities with them.
    Their favourite activity was ${favActivity}.
    
    They won ${speciesCapitalised} of the Week while they were with us, and we'd love to have them stay again.
    
    We hope you had a pawsome time while you were away, and you and ${pet.name} will visit us again soon!
    
    Isabella Whiskerwell
    Paws & Purrfection Palace`;
    
    console.log(stayReport);


    function showMessage() {
        console.log("start");
        console.log('Welcome to your first function!');
        
        
        console.log("start");
    }
    
    
    showMessage();
    
    console.log("End of Program");