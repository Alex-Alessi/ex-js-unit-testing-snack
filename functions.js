function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((s) => s !== "");
  return nome.charAt(0).toUpperCase() + "" + cognome.charAt(0).toUpperCase();
}

function createSlug(stringa) {
  if (!stringa) {
    throw new Error("Il titolo non è valido!");
  }
  return stringa.trim().toLowerCase().replaceAll(" ", "-");
}

function average(numbersArray) {
  let sum = 0;
  numbersArray.forEach((n) => (sum += n));
  return sum / numbersArray.length;
}

function isPalindrome(stringa) {
  const inverso = stringa.split("").reverse().join("");
  return stringa === inverso;
}

function findPostById(array, id) {
  if (isNaN(id)) {
    throw new Error(id + " non è un id");
  }
  array.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("l'array non ha un formato corretto");
    }
  });
  return array.find((p) => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
