import React, {useState} from 'react';

export const MainFaqListItem = ({faq}) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    }

    return (
        <li className="faq__item">
            <button className={`faq__target ${isActive ? '_active' : ''}`} type="button" onClick={() => handleToggle()}>
                <div className="faq__number"></div>
                <h3 className="faq__question">
                    {faq.title}
                </h3>
                <div className="faq__plus"></div>
            </button>
            <div className="faq__answer">
                <div>
                    <p>
                        {faq.text}
                    </p>
                </div>
            </div>
        </li>
    );
}
