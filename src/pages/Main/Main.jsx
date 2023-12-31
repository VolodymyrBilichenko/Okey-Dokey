import React from 'react';
import {MainHero} from "./components/MainHero/MainHero";
import {MainTariffs} from "./components/MainTariffs/MainTariffs";
import {MainAboutUs} from "../../components/MainAboutUs/MainAboutUs";
import {MainOurTeachers} from "../../components/MainOurTeachers/MainOurTeachers";
import {MainLeaveApplication} from "../../components/MainLeaveApplication/MainLeaveApplication";
import {MainPrograms} from "../../components/MainProgramms/MainPrograms";
import {MainLevelEnglish} from "./components/MainLevelEnglish/MainLevelEnglish";
import {MainReviews} from "../../components/MainReviews/MainReviews";
import {MainFaq} from "./components/MainFaq/MainFaq";

export const Main = () => {
    return (
        <div className="main" >
            <MainHero/>

            <MainTariffs/>

            <MainAboutUs/>

            <MainOurTeachers/>

            <MainLeaveApplication/>

            <MainPrograms/>

            <MainLevelEnglish/>

            <MainReviews/>

            <MainFaq/>
        </div>
    );
}
