import { useContext, useMemo, useState } from 'react';
import { COLUMNS } from '../help-classes/Columns';
import { FilmsContext } from '../help-classes/FilmsContext';
import { Planet } from '../help-classes/types';

import TableThinVertical from './TableThinVertical';
import TableWidthVertical from './TableWidthVertical';

interface Props {
  planetsIds: string[];
  movieId: string;
}

interface Data {
  planets: Planet[];
}

const ListOfPlanets = ({ planetsIds, movieId }: Props) => {
  const [isWidthScreen, setIsWidthScreen] = useState(window.screen.width > 680);

  const handleResize = () => {
    setIsWidthScreen(window.screen.width > 680);
  };

  //change table style when screen resize
  window.addEventListener('resize', handleResize);

  const columns = useMemo(() => COLUMNS, []);

  const { planets }: Data = useContext(FilmsContext);

  const filteredPlanets = planets.filter((planet) => {
    // sepreate string before being show in table
    if (!(typeof planet.climates === 'string')) {
      planet.climates = planet.climates.join('\n');
    }
    return planetsIds.includes(planet.id);
  });

  return (
    <>
      {isWidthScreen ? (
        <TableWidthVertical columns={columns} data={filteredPlanets} />
      ) : (
        filteredPlanets.map((planet) => (
          <TableThinVertical
            key={planet.id}
            planet={planet}
            movieId={movieId}
          />
        ))
      )}
    </>
  );
};

export default ListOfPlanets;
