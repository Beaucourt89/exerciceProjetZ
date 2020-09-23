class Bird {
  //propriete
  age: number;
  //constructor
  constructor(givenAge: number) {
    this.age = givenAge;
  }
  //methode
  sing(): void {
    console.log("Cui cui");
  }

  fly(second: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    }
    if (this.age > 1 && this.age <= 3) {
      const meter: number = second;
      console.log(`the bird should fly at a speed of ${meter}m/${second}s`);
    }
    if (this.age > 3) {
      const meter: number = 2 * second;
      console.log(`the bird should fly at a speed of ${meter}m/${second}s`);
    }
  }
}
const newBird = new Bird(15);
newBird.sing();
newBird.fly(1);

// Leave the line below for tests to work properly.
export { Bird };
