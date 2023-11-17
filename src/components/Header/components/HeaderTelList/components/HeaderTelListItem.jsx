import React from 'react';

export const HeaderTelListItem = ({contact}) => {
    return (
        <li>
            <a href={`tel:${contact.value}`}>
                {contact.value}
            </a>
        </li>
    );
}
