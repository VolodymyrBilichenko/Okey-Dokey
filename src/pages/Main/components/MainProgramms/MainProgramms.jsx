import React from 'react';
import {MainProgrammsListItem} from "./components/MainProgrammsListItem/MainProgrammsListItem";

export const MainProgramms = () => {
    return (
        <section className="programs container">
            <h2 className="programs__title section-title">
                Программы
            </h2>
            <ul className="programs__list">
                <MainProgrammsListItem/>

                <MainProgrammsListItem/>

                <MainProgrammsListItem/>
            </ul>
            <div className="programs__footer">
                <a href="#" className="programs__load-more circle-btn _accent">
                    Смотреть <br/> еще
                </a>
            </div>
        </section>
    );
}
