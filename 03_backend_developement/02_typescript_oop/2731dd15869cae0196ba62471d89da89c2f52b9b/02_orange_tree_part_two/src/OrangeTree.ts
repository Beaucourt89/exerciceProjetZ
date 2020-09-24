import { Tree } from "./Tree";
// Code your class here.
class OrangeTree extends Tree {
  oranges: string[];

  constructor(age: number, oranges: string[] = []) {
    super(age);
    this.oranges = oranges;
  }
  ageOneYear(): void {
    this.age = this.age + 1;
    if (this.alive === true) {
      this.growOranges();
    }
  }

  isAlive(): boolean {
    const randomBoolean: number = Math.random();
    if (this.age < 50) {
      this.alive = true;
      return true;
    } else if (this.age <= 65) {
      if (randomBoolean <= 0.2) {
        this.alive = false;
        return false;
      }
      return true;
    } else if (this.age <= 85) {
      if (randomBoolean <= 0.4) {
        this.alive = false;
        return false;
      }
      return true;
    } else if (this.age <= 99) {
      if (randomBoolean <= 0.8) {
        this.alive = false;
        return false;
      }
      return true;
    }
    return false;

  }

growOranges(): void {
    
        if(this.age >= 5 && this.age <= 10){
            this.oranges = [];
            this.oranges.push("🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊");
        } else if(this.age >= 11 && this.age <= 20){
            this.oranges = [];
            this.oranges.push("🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊");
        } else if(this.age >= 21 && this.age <= 40){
            this.oranges = [];
            this.oranges.push("🍊","🍊","🍊","🍊","🍊");
        } 
    }


  pickAnOrange(): void {
      
    console.log("tree");
  }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
