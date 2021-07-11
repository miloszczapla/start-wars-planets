import {
  arrayOfPlanetProperties,
  ObjectOfProperties,
} from '../help-classes/Columns';
import { Planet } from '../help-classes/types';
interface Props {
  planet: Planet;
  movieId: string;
}

const TableThinVertical = ({ planet, movieId }: Props) => {
  const entriesOfPlanet = Object.entries(planet);

  return (
    <div className='table-of-planets'>
      {entriesOfPlanet.map(([key, value]) => {
        if (arrayOfPlanetProperties.includes(key)) {
          return (
            <div className='row-of-table' key={movieId + planet.id + key}>
              <h2 className='flex-1'>
                {
                  //@ts-ignore
                  ObjectOfProperties[key]
                }
              </h2>
              <p className='flex-1'>{value}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TableThinVertical;
