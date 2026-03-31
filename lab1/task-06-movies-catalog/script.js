const movies = [
  { title: "Inception", category: "sci-fi", rating: 8.8, watched: true },
  { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: true },
  { title: "Joker", category: "drama", rating: 8.4, watched: false },
  { title: "Parasite", category: "drama", rating: 8.5, watched: true },
  { title: "The Mask", category: "comedy", rating: 6.9, watched: true },
  { title: "Superbad", category: "comedy", rating: 7.6, watched: false }
];

console.log(`Lista nieobejrzanych filmów: \n${displayUnwatched(movies)}`);

console.log(`Lista filmów z oceną powyżej 8.0: \n${displayGoodMovies(movies)}`);

const category = "Drama"

console.log(`Lista filmów z kategorii ${category}:\n${findByCategory(movies, category).join("\n")}`);

console.log()

function displayUnwatched(listOfMovies) {
    const unwatched = listOfMovies
        .filter(movie => !movie.watched)
        .map((movie, index) => `${index + 1}. ${movie.title}`)
        .join("\n");
    return unwatched;
}

function displayGoodMovies(listOfMovies) {
    const goodMovies = listOfMovies
        .filter(movie => (movie.rating >= 8.0))
        .map((movie, index) => `${index + 1}. ${movie.title}`)
        .join("\n");

        return goodMovies;
}

function findByCategory(listOfMovies, category) {
    const moviesByCategory = listOfMovies
        .filter(movie => (movie.category.toUpperCase() === category.toUpperCase()))
        .map(movie => movie.title)

        return moviesByCategory;
}