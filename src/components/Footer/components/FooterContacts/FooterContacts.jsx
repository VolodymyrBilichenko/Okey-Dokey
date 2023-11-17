import React, {useEffect, useState} from 'react';
import {getAllContacts} from "../../../../api/apiRequests";
import {FooterContactsItem} from "./components/FooterContactsItem";

export const FooterContacts = () => {
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        const contactsData = await getAllContacts();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ul className="footer__contacts">
            {contacts.map((contact) => (
                contact.type === 'phone' || contact.type === 'address' ? (
                    <FooterContactsItem key={contact.value} contact={contact} />
                ) : null
            ))}
        </ul>
    );
}
