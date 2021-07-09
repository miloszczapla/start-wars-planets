export interface Data {
  films: {
    id: string;
    title: string;
  }[];
  planets: {
    id: string;
    name: string;
    rotationPeriod: number;
    orbitalPeriod: number;
    diameter: number;
    climates: string[];
    surfaceWater: number;
    population: number;
    filmConnection: {
      films: {
        id: string;
      }[];
    };
  }[];
}
