import { Link } from 'react-router-dom';
import { penultimate } from './penultimate';
import { IPlanet } from './swapiAPI';

export function Planet({ planet }: { planet: IPlanet }): JSX.Element {
    const id = penultimate(planet.url.split("/"))
    return (<div key={planet.name}>
        <Link to={"/planet/" + id}>{planet.name}</Link >
    </div>);
}

