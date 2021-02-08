import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Openig Hours',
        description: 'We are open 7 hours',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Broklyn, NY 10036,United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+00003 7211 11',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;