import React from 'react';

import CardDecor from '../../../../assets/img/card-decor-image.svg'
import ProgramsCardDecor from '../../../../assets/img/index/programs/programs-card-decor.svg'
import {MainProgrammsVideoItem} from "../MainProgrammsVideoItem/MainProgrammsVideoItem";
export const MainProgramsListItem = ({program}) => {
  return (
      <li className="programs__card programs-card">
          <div className="programs-card__background" aria-hidden="true">
              <div className="programs-card__background--decor">
                  <img src={CardDecor} width="0" height="0" loading="lazy" alt=""/>
              </div>
              <div className="programs-card__background--decor">
                  <img src={ProgramsCardDecor} width="0" height="0" loading="lazy" alt=""/>
              </div>
          </div>
          <div className="programs-card__content">
              <h3>
                  {program.name}
              </h3>
              <p>
                  {program.subtitle}
              </p>
              <p>
                  {program.description}
              </p>
              <div className="programs-card__interviews">
                  <h4>
                      Интервью учеников
                  </h4>
                  <ul>
                      {program.interviews.map((interview) => (
                          <MainProgrammsVideoItem key={interview.url} interviews={interview}/>
                      ))}
                  </ul>
              </div>
              <a href="replace" className="programs-card__submit btn _min">
                  Записаться
              </a>
          </div>
      </li>
  );
}
