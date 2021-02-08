import React from 'react';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/white.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitining',
        img: whitening
    },
]
const Services = () => {
    return (
        <section className="service-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h2 style={{ color: '#3A4256' }}>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;