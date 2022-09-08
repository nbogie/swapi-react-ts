export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export function fetchPlanets(page: number) {
  console.log({ msg: "fetching planets", page });
  return fetch(`https://swapi.dev/api/planets?page=${page}`).then((res) =>
    res.json()
  );
}

export function fetchPlanet(planetId: string) {
  console.log({ msg: "fetching one planet", planetId });
  return fetch(`https://swapi.dev/api/planets/` + planetId).then((res) =>
    res.json()
  );
}

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: never[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export function fetchPeople(page: number) {
  return fetch("https://swapi.dev/api/people?page=" + page).then((res) =>
    res.json()
  );
}

export function fetchPerson(personId: string) {
  return fetch("https://swapi.dev/api/people/" + personId).then((res) =>
    res.json()
  );
}
