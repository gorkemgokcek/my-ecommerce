import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomSlider() {

  return (
    <div>
     {/*  <style>{
        `
        .carousel-item {
          height: 750px;
          object-fit: cover;
        }
        `}</style> */}
     <div>
        <UncontrolledCarousel
          items={[
            {
              src: 'Slider1.jpeg',
              altText: 'Slide 1',
              caption: '',
              key: 1,
            },
            {
              src: 'Slider1.jpeg',
              altText: 'Slide 2',
              caption: '',
              key: 2,
            },
            {
              src: 'Slider1.jpeg',
              altText: 'Slide 3',
              caption: '',
              key: 3,
            }
          ]}
        />
        </div>
    </div>
  );
}

export default CustomSlider; 