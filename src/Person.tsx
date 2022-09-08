import React from 'react';
import { Link } from 'react-router-dom';
import { penultimate } from './penultimate';
import { IPerson } from './swapiAPI';

export function Person({ person }: { person: IPerson }): JSX.Element {
    const id = penultimate(person.url.split("/"))
    return (<div key={person.name}>
        <Link to={"/person/" + id}>{person.name}</Link >
    </div>);
}
