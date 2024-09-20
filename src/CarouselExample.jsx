import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import image1 from './Component/Images/image1.jpg'
const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{  width: '1000px' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        style={{height:'300px'}}
                    />
                    <Carousel.Caption>
                        <h1>Hello Traveler</h1>
                        <p>welcome to the world of traveling</p>
                    </Carousel.Caption>
                   
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                        style={{height:'300px'}}
                      
                    />
                     <Carousel.Caption>
                     <h1>Food</h1>
                     <p></p>
                     </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Third slide"
                        style={{height:'300px'}}
                    />
                   <Carousel.Caption>
                     <h1>Fun</h1>
                     <p></p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ControlledCarousel;
