import React, {useEffect, useState} from 'react';
import {MainProgramsListItem} from "../MainProgrammsListItem/MainProgramsListItem";
import axios from "axios";

export const MainProgramsList = () => {

    const [programs, setPrograms] = useState([])

    useEffect(() =>{
        axios
            .get('http://45.150.67.25:1248/api/course/')
            .then(({data}) => {
                setPrograms(data);
            })
    }, [])

    return (
        <ul className="programs__list">
            {programs.map((program) => (
                <MainProgramsListItem key={program.name} program={program} />
            ))}
        </ul>
    );
}
