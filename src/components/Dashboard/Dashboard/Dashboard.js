import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import Sidebar from './Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSlectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSlectedDate(date)
    }

    useEffect(() => {
        fetch('https://shielded-cove-63328.herokuapp.com/appointmenstByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <section>
            <div style={containerStyle} className="row container-fluid">

                <Sidebar></Sidebar>

                <div className="col-md-5 col-sm-12 col-12 mt-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 col-sm-12 col-12 mt-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;