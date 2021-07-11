export interface JsonData {
  films: Film[];
  planets: Planet[];
}

export interface Film {
  id: string;
  title: string;
}

export interface Planet {
  id: string;
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climates: string[] | string;
  surfaceWater: number;
  population: number;
  filmConnection: {
    films: {
      id: string;
    }[];
  };
}
