/***
ways to create objects!!
***/


/***
 Object literals
***/

// let circle = {
//     radius : 1,
//     location : {
//         x: 1,
//         y: 1
//     }, 
//     draw: function(){
//         console.log("drawing")
//     }
// }


// circle.draw()
// console.log(circle.radius)
// console.log(circle)


/***
 Factory functions 
***/

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("drawing factory functions within a circle")
//         }
//     }
// }


// const circle = createCircle(9)   
// circle.draw()
// console.log(circle.radius)
// console.log(circle)
// console.log(circle.constructor)


/***
Constructor functions
***/


function Circle(radius){
//   console.log(this)
  this.radius = radius
  this.draw = function(){
    console.log("drawing constructor functions")
  }
}

const another = new Circle(7)
console.log(another)
another.draw()
console.log(another.constructor)

//enumerate all keys and values in an object
// for (let each in another)
//    console.log(each, another[each])

// enumerate only methods of another object
// for (let key in another){
//     if(typeof another[key] === "function")
//       console.log(key, another[key]) 
// }


//enumerate all keys in an object
// console.log(Object.keys(another))


//check for presence of a member in an oibject i.e. a property or method
if("draw" in another)
    console.log("yes draw() is there")



/***
Innovative factory functions
***/

// function indoorGames(game,level){
//    return {
//     game,
//     levelInfo: () => {
//         console.log(`I am ${level} at ${game}`)
//     }
//    }
// }

// const mySport = indoorGames("tennis", "beginner")
// mySport.levelInfo()
// console.log(mySport)

/***
Innovative constructor functions
***/

// function Indoor(game,level){
//    this.game = game
//    this.level = function(){
//      console.log(`I am ${level} at ${game}`)
//    }
// }


// const Sunil = new Indoor("carrom","pro")
// console.log(Sunil)
// Sunil.level()
























