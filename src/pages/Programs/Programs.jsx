import React from 'react';
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs";
import {MainProgramsList} from "../../components/MainProgramms/components/MainProgramsList/MainProgramsList";

import Faqdecor1 from '../../assets/img/index/faq/faq-decor-1.svg'
import Faqdecor2 from '../../assets/img/index/faq/faq-decor-2.svg'
import ProgramsListIcon1 from '../../assets/img/programs/programs-list-icon-1.svg'
import ProgramsListIcon2 from '../../assets/img/programs/programs-list-icon-2.svg'
import ProgramsListIcon3 from '../../assets/img/programs/programs-list-icon-3.svg'
import {MainLeaveApplication} from "../../components/MainLeaveApplication/MainLeaveApplication";
import {MainReviews} from "../../components/MainReviews/MainReviews";
export const Programs = () => {
  return (
   <div className='main'>
        <BreadCrumbs/>

       <section className="programs container">
           <div className="programs__background" aria-hidden="true">
               <div className="programs__background--item">
                   <img src={Faqdecor2} width="0" height="0" loading="lazy" alt=""/>
               </div>
               <div className="programs__background--item">
                   <img src={Faqdecor1} width="0" height="0" loading="lazy" alt=""/>
               </div>
           </div>
           <div className="programs__hero">
               <h2 className="programs__title section-title _start">
                   Программы
               </h2>
               <h3 className="programs__subtitle">
                   Преимущества наших программ
               </h3>
               <ul className="programs__hero-list">
                   <li className="programs__hero-item">
                       <div className="programs__hero-item--icon">
                           <img src={ProgramsListIcon1} width="31" height="31" loading="lazy" alt=""/>
                       </div>
                       <div className="programs__hero-item--content">
                           <h4>Новые друзья</h4>
                           <p>
                               Посещая групповые уроки, студенты заводят новые знакомства, общаются друг с другом, работают в команде и воспроизводят ситуации из реальной жизни.
                           </p>
                       </div>
                   </li>
                   <li className="programs__hero-item">
                       <div className="programs__hero-item--icon">
                           <img src={ProgramsListIcon2} width="31" height="31" loading="lazy" alt=""/>
                       </div>
                       <div className="programs__hero-item--content">
                           <h4>Регулярность занятий</h4>
                           <p>
                               Занятия в группе нельзя перенести или отменить, поэтому не удастся «схалтурить», а придется отрабатывать уроки, что приведет к более быстрому результату.
                           </p>
                       </div>
                   </li>
                   <li className="programs__hero-item">
                       <div className="programs__hero-item--icon">
                           <img src={ProgramsListIcon3} width="31" height="31" loading="lazy" alt=""/>
                       </div>
                       <div className="programs__hero-item--content">
                           <h4>Много общения</h4>
                           <p>
                               Ты общаешься не только с преподавателем, но и с другими студентами, поэтому легче преодолеть языковой барьер, к тому же студенты участвуют в дискуссиях.
                           </p>
                       </div>
                   </li>
               </ul>
           </div>

           <MainProgramsList/>

           <div className="programs__footer">
               <a href="#" className="programs__load-more circle-btn _accent">
                   Смотреть <br/> еще
               </a>
           </div>

       </section>
       
       <MainLeaveApplication/>

       <MainReviews/>
   </div>
  );
}
