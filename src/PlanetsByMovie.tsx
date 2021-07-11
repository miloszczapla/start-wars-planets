import logo from './assets/LOGO.svg';

import PlanetsInMovieDetails from './component/PlanetsInMovieDetails';
import jsonFile from './assets/data.json';
import { FilmsContext } from './help-classes/FilmsContext';
import { Film } from './help-classes/types';
import { useMemo } from 'react';

interface Data extends Film {
  planetsIds: string[];
}

const PlanetsByMovie = () => {
  let planets = useMemo(() => jsonFile.data.planets, []);
  //make sure to add array of planets ids
  const movies: Data[] = useMemo(
    () =>
      jsonFile.data.films.map((movie) => {
        return { ...movie, planetsIds: [] };
      }),
    []
  );

  //FIXME: make it faster and more readable
  //add to every movie planets that are in them

  planets.forEach((planet) => {
    //be sure that if there is no value we show 'unknown'
    let property: keyof typeof planet;

    for (property in planet) {
      if (!planet[property]) {
        //@ts-ignore
        planet[property] = 'unknown';
      }
    }
    //change array of object with propery id to array of id value
    const arrayOfFilmsOnPlanet = planet.filmConnection.films.map(
      ({ id }) => id
    );

    //add ids of planets inside specific movie
    movies.forEach((movie) => {
      if (arrayOfFilmsOnPlanet.includes(movie.id)) {
        movie.planetsIds.push(planet.id);
      }
    });

    //alternative solution(with nested forEach)
    // planet.filmConnection.films.forEach(({ id }) => {
    //   movies.forEach((movie) => {
    //     if (movie.id === id) {
    //       movie.planetsIds.push(planet.id);
    //     }
    //   });
    // });
  });

  console.log(movies);

  return (
    <div className='mx-auto my-6  p-4 bg-backgroundMain flex flex-col items-center rounded-lg gap-2 xs:max-w-2xl  xs:my-10 '>
      <img
        src={logo}
        alt='Front-end Recruitment Task'
        className='my-1  mx-20 max-h-10'
      />

      <FilmsContext.Provider value={{ planets, movies }}>
        {movies.map((movie) => (
          <PlanetsInMovieDetails key={movie.id} {...movie} />
        ))}
      </FilmsContext.Provider>
    </div>
  );
};

export default PlanetsByMovie;
