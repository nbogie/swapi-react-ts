import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPeople } from './swapiAPI';
import { PagePicker } from './PagePicker';
import { Person } from './Person';
import { myQueryOptions } from './myQueryOptions';
export function People() {
    const [page, setPage] = useState<number>(1)

    const { data, status } = useQuery(["people", page], () => fetchPeople(page), myQueryOptions);
    return <div className="people">
        <h2>People</h2>
        <div>
            {
                status === "success" && data && data.results.map((person: any) =>
                    <Person key={person.name} person={person} />
                )
            }
        </div>
        <PagePicker setPage={setPage} />
    </div>;
}
