import React from 'react';
import {MainAboutUsItem} from "./MainAboutUsItem";

export const MainAboutUsList = () => {
    return (
        <ul className="about-us-hero__grid">
            <MainAboutUsItem/>

            <MainAboutUsItem/>

            <MainAboutUsItem/>

            <MainAboutUsItem/>
        </ul>
    );
}
