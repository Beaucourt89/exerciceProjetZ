function filter(array, str) {
  // Your code here
  const tabtab = [];
 

  for(let i = 0; i < array.length; i++){
    
    if(array[i] % 2 === 0 && str === "pair"){
  
      tabtab.push(array[i]);
      
    }else if(array[i] % 2 !== 0 && str === "impair"){

      tabtab.push(array[i]);
     
    }else{
      console.log("Une des deux conditions n'est pas respecté");
    }
  }
  console.log(tabtab);
  return array;

}
filter(([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), "pair");




// do not remove this line, it is for tests
module.exports = filter;
    

// ✕ Ne doit pas utiliser la fonction de filtre existante
//    Gestion des exceptions:
//      ✕ Devrait gérer les tableaux vides (4 ms)
//      ✕ Devrait gérer des chaînes étranges
//    Filtre correctement les nombres pairs:
//      ✕ Gère une liste des 5 premiers entiers
//      ✕ Gère une liste des 5 premiers entiers négatifs (1 ms)
//      ✕ Fonctionne s'il n'y a pas d'entiers pairs
//      ✕ Fonctionne s'il n'y a pas d'entiers impairs (1 ms)
//    Filtre correctement les nombres impairs:
//      ✕ Gère une liste des 5 premiers entiers
//      ✕ Gère une liste des 5 premiers entiers négatifs (1 ms)
//      ✕ Fonctionne s'il n'y a pas d'entiers impairs
//      ✕ Fonctionne s'il n'y a pas d'entiers pairs (1 ms)


// # Filtre

// ## Contexte et objectifs

// Les fonctions d'ordre élevé sont les fonctions les plus utilisées quotidiennement dans de nombreux langages de programmation!
// Découvrons pas à pas comment fonctionne `Array.filter`.

// Vous devrez le mettre en œuvre vous-même pour avoir une compréhension approfondie de son fonctionnement.

// ## Spécifications

// Vous devrez écrire quelques fonctions prenant deux paramètres pour ** filtrer les nombres pairs ou impairs d'un tableau d'entiers **.

// ### 1. Filtrage avec des chaînes

// Dans le fichier `04_filter / src / 01_filter_with_string.js`, écrivez une fonction appelée` filter` qui prend deux paramètres:

// - Un ** tableau d'entiers **;
// - Une chaîne étant soit "" impair "" soit "" pair "".

// Et renvoie un ** nouveau tableau ** avec seulement les entiers filtrés à gauche.
// ⚠️ L'utilisation de «Array.filter» est interdite.

// Par exemple.

// `` `javascript
// filtre ([1, 2, 3, 4, 5], "pair"); // [2, 4];
// filtre ([1, 2, 3, 4, 5], "impair"); // [1, 3, 5];
// ''

// ### 2. Filtrage avec des fonctions

// Dans le fichier `04_filter / src / 02_filter_with_function.js`, écrivez une fonction appelée` filter`, qui prend deux entrées:

// - Un ** tableau d'entiers **;
// - Une fonction qui prend un ** entier ** comme _paramètre_ et _returns_ un ** booléen ** si l'entier est pair ou impair.

// Et renvoie un ** nouveau tableau ** avec uniquement les entiers qui ont renvoyé true lorsqu'ils sont donnés en argument à la fonction.
// ⚠️ L'utilisation de `Array.filter` est interdite.

// Par exemple.

// `` `javascript
// filtre ([1, 2, 3, 4, 5], pickEvenNumbers); // [2, 4];
// ''

// ### 3. Filtrage à l'aide d'une fonction interne

// Dans le fichier `04_filter / src / 03_filter.js`, écrivez une fonction appelée` filter`, qui prend deux entrées:

// - Un ** tableau d'entiers **;
// - Une fonction qui prend un ** entier ** comme _paramètre_ et _returns_ un ** booléen ** si l'entier est pair ou impair.

// Et renvoie un ** nouveau tableau ** avec uniquement les entiers qui ont renvoyé true lorsqu'ils sont donnés en argument à la fonction.

// ✅ L'utilisation de `Array.filter` est obligatoire!
// Lisez la documentation de `filter` [ici] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

// Par exemple.

// `` `javascript
// filtre ([1, 2, 3, 4, 5], pickEvenNumbers); // [2, 4];
// ''