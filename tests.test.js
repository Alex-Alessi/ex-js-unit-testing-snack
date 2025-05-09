const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./functions");

const posts = [
  { id: 1, title: "Ricetta lasagna", slug: "ricetta-lasagna" },
  { id: 2, title: "Ricetta pizza", slug: "ricetta-pizza" },
];

describe("Manipolazione di stringhe", () => {
  // snack 1
  test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials("Alex Alessi")).toBe("AA");
  });

  // snack 5
  test('La funzione "isPalindrome" verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("anna")).toBeTruthy();
  });
});

describe("Operazioni su array", () => {
  // snack 3
  test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
    expect(average([3, 7, 5, 9])).toBe(6);
  });

  // snack 7
  test('La funzione "findPostById" restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "Ricetta pizza",
      slug: "ricetta-pizza",
    });
    expect(findPostById(posts, 3)).toBe(null);
    expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id");
    expect(() => findPostById([12, 45], 2)).toThrow(
      "l'array non ha un formato corretto"
    );
  });
});

describe("Generazione di slug", () => {
  // snack 2
  test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug("StRInGa in minuscolo")).toBe("stringa-in-minuscolo");
  });

  // snack 4
  test('La funzione "createSlug" sostituisce gli spazi con -', () => {
    expect(createSlug("StringA iN MINuscolo")).toBe("stringa-in-minuscolo");
  });

  // snack 6
  test('La funzione "createSlug" lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug("")).toThrow("Il titolo non è valido!");
  });
});
