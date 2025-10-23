/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
       if (typeof n !== 'number' || Number.isNaN(n)) {
        return null; // non numérique ou NaN
    }

    // Nombre entier → vérifier pair/impair
    if (Number.isInteger(n)) {
        return n % 2 !== 0;
    }

    // Nombre non entier → false
    return false;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
