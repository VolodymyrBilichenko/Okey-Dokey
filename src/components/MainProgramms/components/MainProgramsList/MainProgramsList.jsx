import React, {useEffect, useState} from 'react';
import {MainProgramsListItem} from "../MainProgrammsListItem/MainProgramsListItem";
import {getAllPrograms} from "../../../../api/apiRequests";

export const MainProgramsList = () => {

    const [programs, setPrograms] = useState([])

    const fetchData = async () => {
        const programsData = await getAllPrograms();
        setPrograms(programsData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ul className="programs__list">
            {programs.map((program) => (
                <MainProgramsListItem key={program.name} program={program} />
            ))}
        </ul>
    );
}
