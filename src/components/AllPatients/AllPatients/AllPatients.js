import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://shielded-cove-63328.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    console.log(appointments);
    return (
        <div className="container-fluid row">

            <Sidebar></Sidebar>

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;