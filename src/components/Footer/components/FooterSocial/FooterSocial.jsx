import React, {useEffect, useState} from 'react';
import {getAllContacts} from "../../../../api/apiRequests";
import {FooterSocialItem} from "./components/FooterSocialItem";

export const FooterSocial = () => {
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        const contactsData = await getAllContacts();
        setContacts(contactsData);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ul>
            {contacts.map((contact) => (
                contact.type === 'instagram' || contact.type === 'facebook' ? (
                    <FooterSocialItem key={contact.value} contact={contact}/>
                ) : null
            ))}
        </ul>
    );
}
