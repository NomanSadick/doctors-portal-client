import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors my-5 mt-5">
            <div className="container">
                <div className="text-brand text-center">
                    <h6 className="mb-5">Our Doctors</h6>
                </div>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;