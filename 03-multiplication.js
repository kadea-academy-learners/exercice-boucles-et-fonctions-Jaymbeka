/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/

function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) {
    return undefined;
  }

  // Vérifier les types des arguments
  if (typeof a !== 'number' || typeof b !== 'number') {
    return undefined;
  }

  // Calculer le résultat
  const result = a * b;

  // Corriger le cas -0 pour retourner 0
  return Object.is(result, -0) ? 0 : result;
}

module.exports = { multiplication };
