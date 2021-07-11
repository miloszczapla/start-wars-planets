import {
  arrayOfPlanetProperties,
  ObjectOfProperties,
} from '../help-classes/Columns';
import { Planet } from '../help-classes/types';

const PlanetInfo = (planet: Planet) => {
  const entriesOfPlanet = Object.entries(planet);
  console.log(planet);

  return (
    <div className='table-of-planets'>
      {entriesOfPlanet.map(([key, value]) => {
        if (arrayOfPlanetProperties.includes(key)) {
          return (
            <div className='row-of-table' key={planet.id}>
              <h2 className='flex-1'>
                {
                  //@ts-ignore
                  ObjectOfProperties[key]
                }
              </h2>
              <p className='flex-1'>{value}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PlanetInfo;
