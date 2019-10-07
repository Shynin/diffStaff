// var arr = [1,2,3,4,5];

// function getSum(arr) {

// var result = [];
// var getSum = arr.reduce(function(sum, current) {
//   result.push(sum)
//   return sum + current;
// });
// result.push(getSum);
// return result
// };
// // console.log( getSum(arr) );

// var result = arr.reduce(function(sum, current) {
//   return sum + current
// });

// let array = [1, "wqeq", 3, 4, 5];

// const countArrayLength = (array) => {
//  if(array){
//   let itemLength = array.map(name => name.toString().length )
//   console.log(itemLength);
//   console.log(array.length);
//  }
//  else{
//   console.log('No array ')
//  }
// }

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// countArrayLength(array);

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//   this.a = +prompt("a?", "0");
//   this.b = +prompt("a?", "0");
//   }
// };



// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
//   }
// };

// ladder.up().up();
// ladder.showStep()

let obj = {};
function A() { return obj }
function B() { return obj }

let a = new A;
let b = new B;

// alert( a == b ); // true


function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.read = function() {
        a = +prompt("a?", "0");
        b = +prompt("a?", "0");
    }
    this.sum = function() { return(a + b);}
    this.mul = function() { return(a * b);}
}

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("value?", "0");
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

function Cisla() {
    // let odin = +prompt("odin?", "");
    // let dva = +prompt("dva?", "");
    // return( odin + dva )
//     let i = 0;
// while (i != 10) {
//     i += 0.2;
// }
}

console.log(Cisla())