const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  // Code the function here.
  if( star.spectralClass !== "K" && star.spectralClass !== "M" || !planet.habitalZone || !planet.rotationStability || planet.radius >= 2.5 || planet.radius <= 0.5 || planet.mass >= 3 || (planet.mass < 0.5 && planet.radius < 1)){ 
    
    return false;
  }
  return true;
}

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;





// ✕ should not return 'undefined' (3 ms)
// ✕ should return a Boolean (4 ms)
// O should return false for stars with spectral class O, B, A, F, G.  (1 ms)
// ✕ should return true for suitable planets and stars with spectral class K, M.
// Planets' criteria with star of spectral classes K and M
// ✕ should return true for an Earth like planet (1 ms)
// ✕ should return false a planet outside an habitable zone
// ✕ should return false for a planet without a stable rotation (1 ms)
// ✕ should return false for a planet with a radius <= 0.5
// ✕ should return false for a planet with a radius >= 2.5 (1 ms)
// ✕ should return false for a planet with a mass >= 3
// ✕ should return false for a planet with a mass < 0.5 and a radius < 1 (1 ms)
// ✕ should return true for a planet with a mass < 0.5 and a radius > 1

// ✕ ne doit pas renvoyer 'indéfini' (3 ms)
// ✕ doit renvoyer un booléen (4 ms)
// O doit retourner faux pour les étoiles de classe spectrale O, B, A, F, G. (1 ms)
// ✕ doit retourner true pour les planètes et les étoiles appropriées de classe spectrale K, M.
// Critères des planètes avec étoile de classes spectrales K et M
// ✕ devrait retourner true pour une planète comme la Terre (1 ms)
// ✕ devrait renvoyer false une planète en dehors d'une zone habitable
// ✕ devrait retourner false pour une planète sans rotation stable (1 ms)
// ✕ doit retourner false pour une planète avec un rayon <= 0,5
// ✕ doit retourner false pour une planète avec un rayon> = 2,5 (1 ms)
// ✕ doit retourner false pour une planète de masse> = 3
// ✕ doit retourner false pour une planète de masse <0,5 et de rayon <1 (1 ms)
// ✕ doit retourner vrai pour une planète de masse <0,5 et de rayon> 1