import React, {useEffect, useState} from 'react';

import FaqDecor1 from '../../../../assets/img/index/faq/faq-decor-1.svg'
import FaqDecor2 from '../../../../assets/img/index/faq/faq-decor-2.svg'
import {MainFaqListItem} from "./components/MainFaqListItem";
import {getAllFaq} from "../../../../api/apiRequests";

export const MainFaq = () => {
    const [faqs, setFaqs] = useState([])

    const fetchData = async () => {
        const faqData = await getAllFaq();
        setFaqs(faqData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="faq container _large" id="faq">
            <div className="faq__background visible-on-desktop" aria-hidden="true">
                <div className="faq__background--decor">
                    <img src={FaqDecor1} width="0" height="0" loading="lazy" alt=""/>
                </div>
                <div className="faq__background--decor">
                    <img src={FaqDecor2} width="0" height="0" loading="lazy" alt=""/>
                </div>
            </div>
            <div className="faq__body">
                <h2 className="faq__title section-title">
                    Часто задавамые вопросы
                </h2>
                <ul className="faq__list">
                    {faqs.map((faq) => (
                        <MainFaqListItem key={faq.id} faq={faq}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}
