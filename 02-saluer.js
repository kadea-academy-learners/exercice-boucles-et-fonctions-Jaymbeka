function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) return undefined;

  // Vérifier les types
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;

  // Retourner le résultat
  return a * b;
}

module.exports = { multiplication };
