import logo from './assets/LOGO.svg';

import PlanetsInMovieDetails from './component/PlanetsInMovieDetails';
import jsonFile from './assets/data.json';

// interface Response {
//   data: Data;
// }

const PlanetsByMovie = () => {
  // const [data, setData] = useState(jsonFile.data);
  // const planets = jsonFile.data.planets;
  const films = jsonFile.data.films;

  return (
    <div className=' mx-auto my-10 p-4 bg-backgroundMain flex flex-col items-center gap-2 sm:max-w-lg '>
      <img src={logo} alt='Front-end Recruitment Task' />

      {films.map((film) => (
        <PlanetsInMovieDetails key={film.id} {...film} />
      ))}
    </div>
  );
};

export default PlanetsByMovie;
