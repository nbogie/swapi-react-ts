export interface IPlanet {
  name: string;
  url: string;
}
export function fetchPlanets() {
  console.log({ msg: "fetching planets", arguments });
  return fetch("https://swapi.dev/api/planets").then((res) => res.json());
}

export interface IPerson {
  name: string;
  gender: string;
  homeworld: string;
  url: string;
}

export function fetchPeople() {
  return fetch("https://swapi.dev/api/people").then((res) => res.json());
}
