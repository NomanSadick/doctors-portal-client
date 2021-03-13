import React from 'react';
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Doctor = ({ doctor }) => {
    // const { name, image, description, icon } = props.doctor;
    return (
        <div className="col-md-4 col-sm-6 text-center">
            {
                doctor.image ?
                    <img style={{ height: '200px' }} src={`data:image/jpeg;base64,${doctor.image.img}`}/>

                    :
                    <img style={{ height: '200px' }} className="img-fluid mb-3 pt-5" src={`http://localhost:5000/${doctor.img}`} alt="" />
            }
            <p className="font-weight-bold">{doctor.name}</p>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <FontAwesomeIcon className="icon  text-brand mb-3" icon={doctor.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <p className=" pl-1">{doctor.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;