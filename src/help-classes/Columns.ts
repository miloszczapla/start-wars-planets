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
  rotationPeriod: 'Rotation \n period',
  orbitalPeriod: 'Orbital\nperiod',
  diameter: 'Diameter',
  climates: 'Climate',
  surfaceWater: 'Surface\nwater',
  population: 'Population',
};

export const COLUMNS = [
  {
    Header: 'Planet Name',
    accessor: 'name', // accessor is the "key" in the data
  },

  {
    Header: 'Rotation\nperiod',

    accessor: 'rotationPeriod',
  },
  {
    Header: 'Orbital\nperiod',

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
    Header: 'Surface\nwater',

    accessor: 'surfaceWater',
    // accessor is the "key" in the data
  },

  {
    Header: 'Population',

    accessor: 'population',
  },
];
