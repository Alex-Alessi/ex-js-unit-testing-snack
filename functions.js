function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((s) => s !== "");
  return nome.charAt(0).toUpperCase() + "" + cognome.charAt(0).toUpperCase();
}

function createSlug(stringa) {
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

module.exports = { getInitials, createSlug, average, isPalindrome };
