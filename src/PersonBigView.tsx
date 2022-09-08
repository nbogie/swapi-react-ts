import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { LoadingStatus } from './LoadingStatus';
import { myQueryOptions } from './myQueryOptions';
import { fetchPerson } from './swapiAPI';


export function PersonBigView() {
    let params = useParams();
    const personId = params.id;

    const { data, status } = useQuery(["person", personId], () => fetchPerson(personId ?? "1"), myQueryOptions);

    if (personId === undefined) {
        return <div>missing id for person!</div>
    }

    return <div className="person card">
        <h2>Person: {data && data.name} ({personId})</h2>
        {data &&
            <div className="propsTableRows">
                <div>name</div><div>{data.name}</div>
                <div>height</div><div>{data.height}</div>
                <div>mass</div><div>{data.mass}</div>
                <div>hair_color</div><div>{data.hair_color}</div>
                <div>skin_color</div><div>{data.skin_color}</div>
                <div>eye_color</div><div>{data.eye_color}</div>
                <div>birth_year</div><div>{data.birth_year}</div>
                <div>gender</div><div>{data.gender}</div>
                <div>homeworld</div><div>{data.homeworld}</div>
                <div>films</div><div>{data.films}</div>

            </div>
        }
        <LoadingStatus status={status} />

    </div >;
}


