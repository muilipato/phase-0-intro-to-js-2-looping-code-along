// Code your solutions in this file
// Code your solutions in this file
const writeCards = (array, event) => {
    let myArray = []
    let name = "";

    for (name of array) {
        myArray.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return myArray

}

const countDown = (number) => {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}
