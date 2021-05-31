

// function myFunction(num: number) {
//   return num * 2;
// }

// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt)
// var y = x.map(Math.sqrt)
// // console.log(myFunction(2));

// console.log(myFunction(4));
// console.log(x);

function Car(make: string, model: string, year: number, color: string): any {
  // console.log(make = make);
  // console.log(model = model);
  // console.log(year = year);
  // console.log(color = color);
  // the above will return a class object Car.

  let aCar = [];
  // aCar = [];
  aCar.push([make, model, year, color]);
  return aCar;

};

let aCar = Car('Hondaz', 'Accordz', 19980, 'redz');
// let auto = new (Car('Honda', 'Accord', 1998, 'red') as any);

// console.log(aCar);
// console.log(auto instanceof Car);
// console.log(auto instanceof Object);

console.log(aCar instanceof Car);
// console.log(aCar instanceof Array);
