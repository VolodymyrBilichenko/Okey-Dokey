import React from 'react';

export const FooterContactsItem = ({contact}) => {
    return (
        <li>
            <a href={`tel:${contact.value}`}>
                <i>
                    {contact.type === 'phone' ? (
                            <svg width="13" height="13" viewBox="0 0 13 13">
                                <use xlinkHref="#tel"></use>
                            </svg>
                        ) : (
                            <svg width="15" height="15" viewBox="0 0 15 15">
                                <use xlinkHref="#map-point"></use>
                            </svg>
                        )
                    }
                </i>
                <span>
                    {contact.value}
                </span>
            </a>
        </li>
    );
}
