import React from 'react';

import CardDecor from '../../../../../../assets/img/card-decor-image.svg'
import ProgramsCardDecor from '../../../../../../assets/img/index/programs/programs-card-decor.svg'
import {MainProgrammsVideoItem} from "../MainProgrammsVideoItem/MainProgrammsVideoItem";
export const MainProgrammsListItem = () => {
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
                  I can sing English
              </h3>
              <p>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              </p>
              <p>
                  на латинице с начала XVI века.
              </p>
              <p>
                  В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул
              </p>
              <div className="programs-card__interviews">
                  <h4>
                      Интервью учеников
                  </h4>
                  <ul>
                      <MainProgrammsVideoItem/>

                      <MainProgrammsVideoItem/>

                      <MainProgrammsVideoItem/>

                      <MainProgrammsVideoItem/>
                  </ul>
              </div>
              <a href="#" className="programs-card__submit btn _min">
                  Записаться
              </a>
          </div>
      </li>
  );
}
