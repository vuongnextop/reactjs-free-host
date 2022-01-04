import React from 'react';
import landingPage from '../images/landingPage1.jpeg'

const CardOverlay = props => {
    return(
        <div className="card text-center">
          <img className="card-img-top imageLanding" src={landingPage} alt="" />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
    )
}

export default CardOverlay;