const readline = require('readline-sync')

let isAlive = true;                     // has not been killed
let hasWon = false;                     // still playing

function Enemy(name, hp, attack) {      //JS Object Constructor
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.killed = false;
}
let greed = new Enemy('Greed', 50, 10)   // create Enemy objects
let sloth = new Enemy('Sloth', 25, 20)
let wrath = new Enemy('Wrath', 10, 90)

const enemies = [greed, sloth, wrath]    // create enemies array


function Person(name, hp = 100) {        //JS Object Constructor
    this.name = name;
    this.hp = hp;
    this.attack = 30;
    this.killed = [];
}

let name = readline.question('Whom do I have the pleasure of escorting thru this Game? ')  //name = answer

const playerUno = new Person(name)                  //create playerUno

console.log(`Welcome to this game ${name}`)         //using object literals

while (isAlive && !hasWon) {            //while Alive & not hasWon
    let question = readline.keyIn('Would you like to walk? [y] to walk, [n] to end the Game ', {
        limit: 'yn'
    })
    if (question == 'y') {
        walk()                          //call function Walk w/in While loop
    } else if (question == 'n') {
        isAlive = false                 
        print ()                        //call function print - global
    }

    function walk() {
        let random = Math.floor(Math.random() * 3)
        if (random > 0) {
            console.log('You just walked')
        } else {
            encounter()
        }
    }
}

function encounter() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)] //takes from enemies Array
    console.log(`You have encountered ${enemy.name}`)
    let action = readline.keyIn('Would you like to run [r], or attack [a]?', {
        limit: 'ra'
    })
    if (action === 'r') {
        console.log('You ran away')
    } else {
        attack(enemy)    //call function attack(enemy)
    }
}

function generateAttack(playerUno) {
    return Math.floor(Math.random() * playerUno.attack)
}

function generateAttack(enemy) {
    return Math.floor(Math.random() * enemy.attack)
}

function attack(enemy) {     //called in func encounter
    while (playerUno.hp > 0 && enemy.hp > 0) {
        let enemyAttack = generateAttack(enemy)
        let heroAttack = generateAttack(playerUno)
        playerUno.hp -= enemyAttack // Subtraction Asssignment: result = result - expression  x-y=x
        console.log(`${enemy.name} attacked you!!, your hp is now ${playerUno.hp}`)
        enemy.hp -= heroAttack  // Subtraction Asssignment: result = result - expression  x-y=x
        console.log(`You hit ${enemy.name}! ${enemy.name} now has an hp of ${enemy.hp}`)
    }
    if (playerUno.hp <= 0) {
        console.log(' You have been overcome by Sloth, Greed or Wrath')
        isAlive = false
        print ()
    } else {
        console.log(`You killed ${enemy.name}  You are awarded the most coveted ${enemy.name} Killer Badge.`)
        playerUno.killed.push(enemy.name)
        enemies.splice(enemies.indexOf(enemy), 1)  //removes the enemy being fought index
    }
    if (enemies.length === 0) {
        console.log(`You WON the challenge`)
        hasWon = true
        print ()
    }
}

function print() {
    let print = readline.question('Would you like to see your Game Results? Type (print)', {
        limit: 'print'
    })
      if (print === 'print') {
        countKills()
    } else {
        console.log(`Thanks ${name} for playing. `)
    }
}

function countKills() {
    if (playerUno.killed >= [0]) {
       console.log(`${playerUno.name} has an HP of ${playerUno.hp} and has earned the ${playerUno.killed} Killer Badges`)
    } else {
        console.log('Sorry, you didn\'t do too well. Try again')
    }
}

