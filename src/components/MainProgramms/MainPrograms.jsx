import React from 'react';
import {MainProgramsList} from "./components/MainProgramsList/MainProgramsList";

export const MainPrograms = () => {
    return (
        <section className="programs container">
            <h2 className="programs__title section-title">
                Программы
            </h2>

            <MainProgramsList/>

            <div className="programs__footer">
                <a href="replace" className="programs__load-more circle-btn _accent">
                    Смотреть <br/> еще
                </a>
            </div>
        </section>
    );
}
