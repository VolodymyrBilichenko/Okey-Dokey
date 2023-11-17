import React from 'react';
import Instagram from "../../../../../assets/img/social/instagram.svg";
import Facebook from "../../../../../assets/img/social/facebook.svg";

export const FooterSocialItem = ({contact}) => {
    return (
        <li>
            <a href={contact.value} title={contact.type}>
                {contact.type === 'instagram' ? (
                    <img src={Instagram} alt="" width="18" height="18" loading="lazy"/>
                ) : (
                    <img src={Facebook} alt="" width="18" height="18" loading="lazy"/>
                )}
            </a>
        </li>
    );
}
