import React from 'react';
import './AppointmentHeader.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png'
const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center m-5">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }} className="mb-5">Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;