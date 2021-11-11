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

class Snake extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveMouse () {
        this.happiness += 4
    }
}

class Rabbit extends Animal {
    constructor(type, name) {
        super(type, name)
    }
    giveCarrot () {
        this.happiness += 4
}    
}


module.exports = {
    Animal,
    Cat,
    Dog,
    Snake,
    Rabbit
}