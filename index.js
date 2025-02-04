/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person = {
  name: "Salem",
  age: 39,
  city: "Salwa",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "Eng.Salem@live.com";
// console.log(person);
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

function hasKey(object, key) {
  return object.hasOwnProperty(key);
}
// console.log(hasKey(person, "name"));
// console.log(hasKey(person, "age"));
// console.log(hasKey(person, "email"));
// console.log(hasKey(person, "plane"));
//---------------------------------------------------------------------------------------------//
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
// movies.forEach(function (movies) {
//   console.log(movies.title);
// });

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
const countKeys = movies.filter(function (movies) {
  return movies.year === 1994;
}).length;
// console.log(countKeys);
/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
movies.forEach((movies) => {
  if (movies.title == "The Dark Knight") return (movies.genre = "Action/Drama");
});
console.log(movies);
