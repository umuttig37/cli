let movies = [];
let numMovies = parseInt(prompt("How many movies do you want to rate?"), 10);

for (let i = 0; i < numMovies; i++) {
  let title = prompt("Enter movie title:");
  let rating = parseInt(prompt("Enter movie rating (1-5):"), 10);
  movies.push({ title, rating });
}

movies.sort((a, b) => b.rating - a.rating);

let moviesContainer = document.createElement("div");
moviesContainer.textContent = "Movies sorted by rating:";
document.body.appendChild(moviesContainer);

movies.forEach(movie => {
  let movieElement = document.createElement("div");
  movieElement.textContent = `${movie.title} - Rating: ${movie.rating}`;
  moviesContainer.appendChild(movieElement);
});

let highestRatedMovieContainer = document.createElement("div");
highestRatedMovieContainer.textContent = `Highest-rated movie: ${movies[0].title} - Rating: ${movies[0].rating}`;
document.body.appendChild(highestRatedMovieContainer);
