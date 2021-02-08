import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h4 className="text-primary">APPOINMENT</h4>
                        <h2 className="my-4">Make an appointment <br /> Today</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid autem vel beatae saepe deserunt exercitationem quod nam quas laboriosam aperiam.</p>
                        <button className="btn btn-primary">Learn More</button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MakeAppointment;