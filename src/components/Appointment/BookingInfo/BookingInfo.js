import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingInfo = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mt-5">
            <div style={{borderColor: 'transparent'}} className="card shadow-lg p-3">
                <div className="card-body text-center ">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACE Available</p>
                    <button onClick={openModal} className="btn btn-brand uppercase">book appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingInfo;