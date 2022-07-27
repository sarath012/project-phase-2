import React from 'react';
import './Imagecarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Imagecarousel({image}) {
    console.log(image)

  return (

        <div className='imagecontainer'>
            <Carousel>
                
                {image.map((singleimage)=>(
                    <div>
                        <img src={singleimage}/>
                    </div>
                    )
                )}
            
            </Carousel>
        </div>
            
  )
}
