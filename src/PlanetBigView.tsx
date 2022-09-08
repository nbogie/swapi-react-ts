
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { LoadingStatus } from './LoadingStatus';
import { myQueryOptions } from './myQueryOptions';
import { fetchPlanet } from './swapiAPI';


export function PlanetBigView() {
    let params = useParams();
    const planetId = params.id;

    const { data, status } = useQuery(["planet", planetId], () => fetchPlanet(planetId ?? "1"), myQueryOptions);

    if (planetId === undefined) {
        return <div>missing id for planet!</div>
    }

    return <div className="planet card">
        <h2>Planet: {data && data.name} ({planetId})</h2>

        {data &&
            <div className="propsTableRows">
                <>
                    <div>name</div><div>{data.name}</div>
                    <div>rotation_period</div><div>{data.rotation_period}</div>
                    <div>orbital_period</div><div>{data.orbital_period}</div>
                    <div>diameter</div><div>{data.diameter}</div>
                    <div>climate</div><div>{data.climate}</div>
                    <div>gravity</div><div>{data.gravity}</div>
                    <div>terrain</div><div>{data.terrain}</div>
                    <div>surface_water</div><div>{data.surface_water}</div>
                    <div>population</div><div>{data.population}</div>
                    <div>residents</div><div>{data.residents}</div>
                </>
            </div>
        }

        <LoadingStatus status={status} />

    </div >;
}
