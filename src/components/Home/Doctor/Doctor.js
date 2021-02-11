import React from 'react';
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Doctor = (props) => {
    const { name, image, description, icon } = props.doctor;
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img className="img-fluid mb-3 pt-5" src={image} alt="" />
            <p className="font-weight-bold">{name}</p>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <FontAwesomeIcon className="icon  text-brand mb-3" icon={icon}></FontAwesomeIcon>
                </div>
                <div>
                    <p className=" pl-1">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;