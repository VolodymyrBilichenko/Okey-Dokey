import React from 'react';
import {MainHero} from "./components/MainHero/MainHero";
import {MainTariffs} from "./components/MainTariffs/MainTariffs";
import {MainAboutUs} from "./components/MainAboutUs/MainAboutUs";
import {MainOurTeachers} from "./components/MainOurTeachers/MainOurTeachers";
import {MainLeaveApplication} from "./components/MainLeaveApplication/MainLeaveApplication";
import {MainProgramms} from "./components/MainProgramms/MainProgramms";
import {MainLevelEnglish} from "./components/MainLevelEnglish/MainLevelEnglish";

export const Main = () => {
    return (
        <>
            <MainHero/>

            <MainTariffs/>

            <MainAboutUs/>

            <MainOurTeachers/>

            <MainLeaveApplication/>

            <MainProgramms/>

            <MainLevelEnglish/>
        </>
    );
}
