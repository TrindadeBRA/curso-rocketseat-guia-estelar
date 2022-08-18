const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on("help", () => {
    console.log(`Eu! o ${chapolin.name} colorado!`)
}) 

console.log("Quem irá me ajudar?")
chapolin.emit('help')
// const { EventEmitter } = require('events')

// const ev = new EventEmitter()

// //on() Sempre ligado ouvindo
// ev.on('say something!', (message) => {
//     console.log("Eu ouvi você: ", message)
// })

// //once() Ouvindo apenas uma vez
// ev.once('say something!', (message) => {
//     console.log("Eu ouvi você: ", message)
// })

// ev.emit('say something!', "Lucas")
// ev.emit('say something!', "João")

// console.log(ev)


