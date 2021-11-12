class Animal {
    constructor(type, name) {
        this.type = type,
        this.name = name,
        this.age = 0,
        this.hunger = 10,
        this.thirst = 10,
        this.happiness = 10,
        this.clean = 10
    }
    feed(){
        this.hunger += 5
        this.thirst -= 1
        this.happiness -= 1
        this.clean -= 1
    }
    water(){
        this.thirst += 5
        this.hunger -= 1
        this.happiness -= 1
        this.clean -= 1
        }
    play(){
        this.thirst -= 1
        this.hunger -= 1
        this.happiness += 5
        this.clean -= 1
    }
    wash(){
        this.clean += 5
        this.thirst -= 1
        this.happiness -= 1
        this.hunger -= 1
    }
}

class Cat extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveCatnip () {
        this.happiness += 4
    }
}

class Dog extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveSqueakyToy () {
        this.happiness += 4
    }
}

// let cat = new Cat("cat", "fluffy")

// console.log(cat)

let pet

let selectedOption = "wash"
let selectedPet = {
    type: "Dog", 
    name: "Ruby"
}
// selectedOption is absolutely fine to be a static value 
// for the purpose of creating the logic and the cyberPet functionality. 
// We will make this dynamic later on this week

const gameLoop = () => {
    // check the values at the start

    // Animal.hunger = pet.hunger
    // Animal.play = pet.play
    // Animal.water = pet.water
    // Animal.feed = pet.feed

    if (pet.hunger <= 0) {
        console.log(`${pet.name} has died - too hungry`)
        return
    } else if(pet.thirst <= 0) {
        console.log(`${pet.name} has died - too thirsty`)
        return
    } else if(pet.happiness <= 0) {
        console.log(`${pet.name} has died - too sad`)
        return
    } else if(pet.clean <= 0) {
        console.log(`${pet.name} has died - too dirty`)
        return
    }
    

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
}


const init = () => {
    // do some stuff like get initial input
    // e.g. if(selectedPet === "cat")
    pet = new Animal(selectedPet.type, selectedPet.name)
    console.log(pet)
    // now do:
    gameLoop()
}

init()
const { Animal, Cat, Dog, Snake, Rabbit } = require("./classes")          
const { initQs } = require("./questions")

// const gameLoop = () => {

//     if (pet.hunger <= 0) {
//         console.log(`${pet.name} has died - too hungry`)
//         return
//     } else if(pet.thirst <= 0) {
//         console.log(`${pet.name} has died - too thirsty`)
//         return
//     } else if(pet.happiness <= 0) {
//         console.log(`${pet.name} has died - too sad`)
//         return
//     } else if(pet.clean <= 0) {
//         console.log(`${pet.name} has died - too dirty`)
//         return
//     }
    

//     if (selectedOption === "play") {
//         pet.play()
//         console.log(`${pet.name} is happier`)
//     } else if (selectedOption === "feed") {
//         pet.feed()
//         console.log(`${pet.name} is fuller`)
//     }else if (selectedOption === "water") {
//         pet.water()
//         console.log(`${pet.name} is less thirsty`)
//     }else if (selectedOption === "wash") {
//         pet.wash()
//         console.log(`${pet.name} is cleaner`)
//     }
//     // Continue in this ^ vein for the rest of the game

//     console.log(pet)
//     // At the end of this 'loop'
//     gameLoop()
//     // This will run the function again
// }

// const init = () => {
//     // do some stuff like get initial input
//     // e.g. if(selectedPet === "cat")
//     pet = new Animal(selectedPet.type, selectedPet.name)
//     console.log(pet)
//     // now do:
//     gameLoop()
// }

// init()
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
init()
