import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPlanets, IPlanet } from './swapiAPI';
import { PagePicker } from './PagePicker';
import { myQueryOptions } from './myQueryOptions';
import { Planet } from './Planet';
export function Planets() {

    const [page, setPage] = useState<number>(1)
    const { data, status } = useQuery(["planets", page], () => fetchPlanets(page), myQueryOptions);

    return <div className="planets">
        <h2>Planets</h2>
        <div>
            {status === "success" && data && data.results.map((planet: IPlanet) => <Planet planet={planet} />)}
        </div>
        <PagePicker setPage={setPage} />
    </div>;
}
