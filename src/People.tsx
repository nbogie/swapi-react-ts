import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPeople } from './swapiAPI';
export function People() {
    console.log("People re-renders")

    const { data, status } = useQuery(["people"], fetchPeople, { staleTime: 10000 });
    console.log({ data, status })
    return <div>People
        <div>
            {status === "success" && data && data.results.map((person: any) => <div key={person.name}>{person.name}</div>)}
        </div>
    </div>;
}
