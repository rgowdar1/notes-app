import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Home(props) {
    return (
        <div>
                <div className="text-center">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333__340.jpg" width="80%" height="600px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>HARD WORK BEATS TALENT WHEN TALENT DOES N'T WORK HARD.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/09/08/23/48/north-sea-930949_960_720.jpg"  width="80%" height="600px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>TAKE YOUR TIME. RECHARGE AND COME STRONGER </h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2019/09/25/09/36/team-4503157__340.jpg" width="80%" height="600px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>BIG THINGS OFTEN HAVE SMALL BEGINNINGS</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
        
    )
}