import React from 'react';
import './Testimonial.css'
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';

const testimonialsData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="testimonials-header">
                    <h5 className="text-brand text-uppercase">Testimonial</h5>
                    <h1>What's Our Patients <br /> Says </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialsData.map((testimonial) => <TestimonialsDetails testimonial={testimonial}></TestimonialsDetails>)
                    }
                </div>

            </div>

        </section>
    );
};

export default Testimonials;