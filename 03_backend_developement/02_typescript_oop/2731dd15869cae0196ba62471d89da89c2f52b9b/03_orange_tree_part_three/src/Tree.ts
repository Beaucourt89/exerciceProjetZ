// Code the class here.
abstract class Tree {
    //PROPRIETE
    protected _age: number;
    protected _height: number;
    protected _alive: boolean = true;
  
    //CONSTRUCTEUR
    constructor(age: number) {
      this._age = age;
      let height = 0;
  
      if (age >= 1 && age <= 9) {
        height = age * 25;
      } else if (age >= 10 && age <= 20) {
        height = (age - 9) * 10 + 225;
      } else if (age > 20) {
        height = 110 + 225;
      } else {
        age = 0;
      }
      this._height = height;
     
    }
  
    //METHODE
    protected abstract _isAlive(): boolean;
    abstract ageOneYear(): void;
  
    seed(): void {
      this._age = 0;
      this._height = 0;
      this._alive = true;
    }
  }
  // Leave the line below for tests to work properly.
  export { Tree };
