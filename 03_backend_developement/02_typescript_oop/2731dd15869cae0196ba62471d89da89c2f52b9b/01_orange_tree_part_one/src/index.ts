// Code the class here.
abstract class Tree {
  //propriete
  age: number;
  height: number;
  alive: boolean = true;

  //constructeur
  constructor(age: number) {
    this.age = age;
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
    this.height = height;
   
  }

  //methode
  abstract isAlive(): boolean;
  abstract ageOneYear(): void;

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };

// Le constructeur doit initialiser l'âge et la hauteur doit être calculée, par rapport à l'âge donné, en fonction des spécifications suivantes:
// 25 centimètres par an, de 1 à 9 ans (inclus).
// 10 centimètres par an, de 10 à 20 ans (inclus).
// Il devrait cesser de grandir après 20 ans.
// L'initialisation d'un arbre de 20 ans doit avoir une hauteur de 335 cm (225 cm de 0 à 9 ans + 110 cm de 10 à 20 ans).
