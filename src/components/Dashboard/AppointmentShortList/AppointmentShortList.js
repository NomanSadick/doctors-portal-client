import React from 'react';

const AppointmentShortList = ({ appointments }) => {
    return (

        <table class="table table-borderless">
            <thead>
                <tr className="text-secondary">
                    <th scope="col">Sr No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;