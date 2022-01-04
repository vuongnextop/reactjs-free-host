import React from 'react';

const Card = props => {
    return(
        <div className="card text-center">
          <img className="card-img-top" src="holder.js/100px180/" alt="" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
    )
}

export default Card;