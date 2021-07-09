import logo from './assets/LOGO.svg';

import PlanetsInMovieDetails from './component/PlanetsInMovieDetails';
import jsonFile from './assets/data.json';

const PlanetsByMovie = () => {
  // const [data, setData] = useState(jsonFile.data);
  const planets = jsonFile.data.planets;
  const films = jsonFile.data.films;

  planets.forEach((planet) => {
    planet.filmConnection.films;
  });
  return (
    <div className='mx-3 my-6 xs:mx-auto xs:my-10 p-4 bg-backgroundMain flex flex-col items-center gap-2 xs:max-w-lg rounded-lg'>
      <img
        src={logo}
        alt='Front-end Recruitment Task'
        className='m-4 max-h-10'
      />

      {films.map((film) => (
        <PlanetsInMovieDetails key={film.id} {...film} />
      ))}
    </div>
  );
};

export default PlanetsByMovie;
