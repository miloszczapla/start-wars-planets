export const arrayOfPlanetProperties: string[] = [
  'name',
  'rotationPeriod',
  'orbitalPeriod',
  'diameter',
  'climates',
  'surfaceWater',
  'population',
];

export const ObjectOfProperties = {
  name: 'Planet Name',
  rotationPeriod: 'Rotation period',
  orbitalPeriod: 'Orbital period',
  diameter: 'Diameter',
  climates: 'Climate',
  surfaceWater: 'Surface water',
  population: 'Population',
};

export const COLUMNS = [
  {
    Header: 'Planet Name',
    accessor: 'name', // accessor is the "key" in the data
  },

  {
    Header: 'Rotation period',

    accessor: 'rotationPeriod',
  },
  {
    Header: 'Orbital period',

    accessor: 'orbitalPeriod',
    // accessor is the "key" in the data
  },

  {
    Header: 'Diameter',

    accessor: 'diameter',
  },
  {
    Header: 'Climate',

    accessor: 'climates',
  },
  {
    Header: 'Surface water',

    accessor: 'surfaceWater',
    // accessor is the "key" in the data
  },

  {
    Header: 'Population',

    accessor: 'population',
  },
];
