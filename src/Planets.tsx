import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPlanets } from './swapiAPI';
export function Planets() {
    console.log("Planets re-renders")


    const [page, setPage] = useState<number>(1)
    console.log({ page })
    //failing
    //const { data, status } = useQuery(["planets", page], (_key, page) => fetchPlanets(page), { staleTime: 10000, refetchOnMount: false });
    const { data, status } = useQuery("planets", fetchPlanets, { staleTime: 10000, refetchOnMount: false });

    console.log({ data, status })
    return <div>
        <h2>Planets</h2>

        <div>
            {status === "success" && data && data.results.map((planet: any) => <div key={planet.name}>{planet.name}</div>)}
        </div>
        <div className="pagePicker">
            {[1, 2, 3, 4].map(ix => <button key={ix} onClick={() => setPage(ix)}>{ix}</button>)}


        </div>
    </div>;
}
