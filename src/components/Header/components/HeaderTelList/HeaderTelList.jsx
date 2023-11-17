import React, {useEffect, useState} from 'react';
import {HeaderTelListItem} from "./components/HeaderTelListItem";
import {getAllContacts} from "../../../../api/apiRequests";

export const HeaderTelList = () => {
    const [contacts, setContacts] = useState([])

    const fetchData = async () => {
        const contactsData = await getAllContacts();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ul className="header__tel--list">
            {contacts.map((contact) => (
                contact.type === 'phone' ? (
                    <HeaderTelListItem key={contact.value} contact={contact}/>
                ) : null
            ))}
        </ul>
    );
}
