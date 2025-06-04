const movies = [
  { id: 1, movieName: "Orgulho e preconceito" },
  { id: 2, movieName: "Opphenheimer" },
  { id: 3, movieName: "The Great Gatsby" },
];

console.log(movies);

//Arrow Function
console.log(
  // Procurar o FileSystem, vai executar a função e procurar movie dentro de movieName
  movies.find((movies) => movies.movieName == "Orgulho e preconceito")
  //Movie está dentro de movieName e lá dentro exites orgulho e preconceito, se sim, ele retorna o objeto.
);
