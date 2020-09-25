import { Tree } from "./Tree";

class OrangeTree extends Tree {
  protected _oranges: string[] = [];

  get age(): number {
    return this._age;
  }
  get height(): number {
    return this._height;
  }
  get alive(): boolean {
    return this._alive;
  }
  get oranges(): string[] {
    return this._oranges;
  }

  ageOneYear(): void {
    this.potentiallyDie();
    if (this._alive) {
      this._age += 1;

      if (this._age < 10) {
        this._height += 25;
      } else if (this._age >= 10 && this._age <= 20) {
        this._height += 10;
      }

      this.growOranges();
    }
  }

  private potentiallyDie(): void {
    this._alive = this._isAlive();
  }

  private handleOrangeGrowth(num: number): void {
    for (let i = 0; i < num; i++) {
      this._oranges.push("🍊");
    }
  }

  private growOranges(): void {
    this._oranges = [];

    let num = 0;

    if (this._age >= 5 && this._age <= 10) {
      num = 10;
    } else if (this._age > 10 && this._age <= 20) {
      num = 20;
    } else if (this._age > 20 && this._age <= 40) {
      num = 5;
    }

    this.handleOrangeGrowth(num);
  }

  pickAnOrange(): void {
    if (this._oranges.length > 0) {
      // Remove one orange from the tree.
      this._oranges.pop();
      console.log("You picked one 🍊.");
    } else {
      console.log("There is no 🍊.");
    }
  }

  protected _isAlive(): boolean {
    if (this._age < 50) {
      return true;
    }
    const dieProbability = (this._age - 50) / 50;
    // age 50 => chanceToDie ~ 0
    // age 75 => chanceToDie = 0.5
    // age 100 => chanceToDie = 1
    const isAlive = Math.random() > dieProbability;
    return isAlive;
  }

  seed(): void {
    super.seed();
    this._oranges = [];
  }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
