//Localizando Array de referência, que tem mais de 1 informação dentro de uma Array

const movies = [
  { id: 1, movieName: "Orgulho e preconceito" },
  { id: 2, movieName: "Opphenheimer" },
  { id: 3, movieName: "The Great Gatsby" },
];

console.log(movies);

//Procurar por algum filme

console.log(movies.includes({ id: 1, movieName: "Orgulho e preconceito" })); //False
//Includes nao consegue procurar valores dentro de uma array quando se trata de varias keys

console.log(
  movies.find(function (movies) {
    //retorna o movie name de movies se o valor passado for igual ao movieName
    return movies.movieName == "Orgulho e preconceito";
  })
); //Só funciona com 1 função dentro dele  -- Função para procurar e retornar o valor

//Array tipo Objeto = find
//Array primitiva não precisa do find
