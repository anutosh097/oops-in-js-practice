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


// function Circle(radius){
//  //members of the circle object
//   let defaultLocation = {
//     x: 0,
//     y: 0
//   }
//   this.radius = radius
//   this.draw = function(){
//     console.log("drawing constructor functions")
//   }
//   this.getDefaultLocation = function(){
//     return defaultLocation
//   }

  //getters and setters
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function(){
//         return defaultLocation
//     },
//     set: function(value){
//        defaultLocation = value
//     }
//   })
// }

// const another = new Circle(7)
// console.log(another)
// another.draw()
// console.log(another.constructor)

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
// if("draw" in another)
//     console.log("yes draw() is there")



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

/******************
Design a stopwatch 
*******************/

// function Watch() {
//     let startTime, stopTime, running, duration = 0;



//     this.start = function () {
//         if(running) {
//             throw new Error('Stopwatch has already started')
//         } else {
//             running = true;
//         }

//         startTime = new Date();
//     };


//     this.stop = function () {
//         if(!running) {
//             throw new Error('Stopwatch has already been stopped')
//         } else {
//             running = false;
           
//         }
//         stopTime = new Date();
//         const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };

//     this.reset = function () {
//         startTime = null;
//         stopTime = null;
//         running = 0;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() {
//             return duration;
//         }
//     })
// }
// const w = new Watch();
// w.start()
// w.stop()
// w.duration
// w.restart()

/**************************************************************************************************************************
 What is a prototype?
 -A prototype is just the parent of an object. It is a regular object. 
 What is protoypical inheritance?
 -Objects can inherit propertiers and methods from it's parent/prototype except the root object/object base. There can be single level inheritance and multiple level inheritance.
 For example lieral objects or objects created from constructor functions have single level of inheritance whereas arrays and functions have
 multiple level of inheritance.
 **************************************************************************************************************************/

//  let identity = {
//     name: "Anutosh",
//     place: "Bengaluru",
//     state: "Karnataka"
//  }

//  console.log(identity)
//  console.log(Object.getPrototypeOf(identity)) //get prototype of identity lieral object - single level inheritance - prototype is root object


//  let friends = ["Jagdish","Sunil", "Gautam"]
// console.log(friends)
// console.log(Object.getPrototypeOf(friends)) //get prototype of friends array 
// ObjectBase(root object) -> ArrayBase -> friends array - multi level inheritance

















