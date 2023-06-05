function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}
// tag function digunakan untuk menghidari sql injection

test("tag function", () => {
  const firstName = "Mustajib";
  const lastName = "Aja";
  tagFunction`Hello ${firstName} ${lastName}, how are you?`;
  tagFunction`Bye ${firstName} ${lastName}, see you later?`;
});

test("tag function sql", () => {
  const name = "Mustajib";
  const age = 25;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
