export let movies = [
  {
    id: 0,
    name: 'Mad Max',
    score: 10,
  },
  {
    id: 1,
    name: 'Black Widow',
    score: 9,
  },
  {
    id: 2,
    name: 'Paddington',
    score: 8,
  },
  {
    id: 3,
    name: 'Never I Have Ever',
    score: 8,
  },
];

export const getMovies = () => movies;

export const getByid = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
