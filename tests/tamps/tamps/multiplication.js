/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/

function multiplication(a, b) {
  // Vérifier le nombre d'arguments

  const result = a * b;
  return result === 0 ? 0 : result;


}
// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
