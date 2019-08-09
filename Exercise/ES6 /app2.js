//let and const
const bossName = "John"
let age = 101
let pets = ["cat", "dog"]
let petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            let name = "fluffy"
        } else {
            let name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()

// ES6 Arrow Functions - Task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

// ES6 Arrow Functions - Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}

// ES6 Arrow Functions - Task 3
function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}

// ES6 Arrow Functions - Task 4





// ES6 Arrow Functions - Task 5








// ES6 Arrow Functions - Template Literals