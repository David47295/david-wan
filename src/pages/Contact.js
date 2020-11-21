import React from 'react';
import ContactMethod from '../components/Contact/ContactMethod';
import '../style/Contact.css';
import data from '../data.json';

export default function Contact() {
    const contact_info = data.contact_info;
    const rendered = contact_info.map((x) => {
        return <ContactMethod title={x.title} class={x.class} url={x.url} text={x.text} />
    })
    return (
        <div id="contact">
            <h2 className="contact-me-header">Contact Me!</h2>
            <div className="contact-info">
                {rendered}
            </div>
        </div>
    )
}