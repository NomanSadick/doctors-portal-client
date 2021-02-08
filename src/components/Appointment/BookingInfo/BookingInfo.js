import React from 'react';

const BookingInfo = ({booking}) => {
    return (
        <div className="col-md-4 mt-5">
            <div style={{borderColor: 'transparent'}} className="card shadow-lg p-3">
                <div className="card-body text-center ">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACE Available</p>
                    <button className="btn btn-brand uppercase">book appointment</button>
                </div>
            </div>
            
        </div>
    );
};

export default BookingInfo;