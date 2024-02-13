let myFunction = function (a: number, b?: number): number {
    if (typeof b !== "undefined") {
      return a + b + 5;
    } else {
      return a + 5;
    }
  };
  
  console.log(myFunction(1, 2));
  console.log(myFunction(3, 5));
  
  
  let guitarOne : [string, string, number];
  guitarOne = ['electric', 'Ibanez', 7];
  
  let guitarTwo : [string, string, number];
  guitarTwo = ['acoustic', 'Godin', 6];
  
  let guitarThree : [string, string, number];
  guitarThree = ['electric', 'EB Music Man', 6];
  
  console.log(guitarThree);

class Astronaut {
  name: string;
  constructor(firstName: string, lastName: string) {
    this.name = firstName + " " lastName;
  }
  greet () {
    return "Hello, " + this.name; 
  }
}
let bob = new Astronaut("Sally", "Ride");
