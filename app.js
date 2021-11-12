const { Animal, Cat, Dog, Snake, Rabbit } = require("./classes")          
const { initQs } = require("./questions")
const inquirer = require('inquirer');

const init = () => {
    inquirer
        .prompt(initQs)
        .then((answers) => {
            pet = new Animal(answers.petType, answers.petName)

        })
        .then(() => gameLoop())
}



const gameLoop = () => {
    if (pet.hunger <= 0) {
     console.log(`${pet.name} has died - too hungry`)
     return
 } else if(pet
.thirst <= 0) {
     console.log(`${pet.name} has died - too thirsty`)
     return
 } else if(pet.happiness <= 0) {
     console.log(`${pet.name} has died - too sad`)
     return
 } else if(pet.clean <= 0) {
     console.log(`${pet.name} has died - too dirty`)
     return
 }
////// This is the section we were working o. I asked Ben and he recommended we aproach it like this bit below. This way, we can have a completely unique set of questions and options for each animal /////////

let q 

if (Animal.type === cat) {
    q = [{ 
            type: list,
            name: inputs,
            message:
        "What would you like to do",
            options: 
        ]}
} else if {}

inquirer.prompt(q)

///////// End of the section I asked Ben about /////////
     
if (selectedOption === "play") {
     pet.play()
     console.log(`${pet.name} is happier`)
 } else if (selectedOption === "feed") {
     pet.feed()
     console.log(`${pet.name} is fuller`)
 }else if (selectedOption === "water") {
     pet.water()
     console.log(`${pet.name} is less thirsty`)
 }else if (selectedOption === "wash") {
     pet.wash()
     console.log(`${pet.name} is cleaner`)
 }
 // Continue in this ^ vein for the rest of the game
    console.log(pet)
 // At the end of this 'loop'
 gameLoop()
 // This will run the function again

 const init = () => {
    // do some stuff like get initial input
    // e.g. if(selectedPet === "cat")
    pet = new Animal(selectedPet.type, selectedPet.name)
    console.log(pet)
    // now do:
    gameLoop()
}

init()
