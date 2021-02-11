import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="feature-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 md-4 m-md-0">
                        <img style={{ height: '400px' }} className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 my-5 align-self-center">
                        <h2>Exceptional Dantal <br />Care, on Your Terms</h2>
                        <p className="text-secondary mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repudiandae delectus, ducimus mollitia reiciendis numquam quaerat architecto obcaecati ipsum eaque sit amet consectetur adipisicing elit. Officia repudiandae delectus, ducimus mollitia reiciendis numquam quaerat architecto obcaecati ipsum eaque.</p>
                        <button className="btn btn-brand mt-5">I LEARN MORE</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FeaturedService;