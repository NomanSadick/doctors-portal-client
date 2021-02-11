import React from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const doctorsData = [
    {
        name: 'Dr. Caudi',
        image: doctor,
        description: '+15697854124',
        icon: faPhone,
        
    },
    {
        name: 'Dr. Caudi',
        image: doctor,
        description: '+15697854124',
        icon: faPhone
    },
    {
        name: 'Dr. Caudi',
        image: doctor,
        description: '+15697854124',
        icon: faPhone
    },

]

const Doctors = () => {
    return (
        <section className="doctors my-5 mt-5">
            <div className="container">
                <div className="text-brand text-center">
                    <h6 className="mb-5">Our Doctors</h6>
                </div>
                <div className="row">
                    {
                        doctorsData.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;