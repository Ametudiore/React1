import Carousel from 'react-bootstrap/Carousel';
import ayf from './images/ayf.jpg';

function CarouselComponent() {
  return (
    <Carousel >
      <Carousel.Item className='ayfHeight'>
        <img
          className="d-block w-100"
          src={ayf}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='ayfText'>AYF Udu West Archdeaconry Council</h3>
          <p className='ayfText'>Welcome you to our official website</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ayfHeight'>
        <img
          className="d-block w-100"
          src={ayf}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='ayfText'>AYF Udu West Archdeaconry Council</h3>
          <p className='ayfText'>Welcome you to our official website</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ayfHeight'>
        <img
          className="d-block w-100"
          src={ayf}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='ayfText'>AYF Udu West Archdeaconry Council</h3>
          <p className='ayfText'>Welcome you to our official website</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;