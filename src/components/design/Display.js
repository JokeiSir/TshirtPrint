import React from 'react';
import './Display.css';

const Display = () => {
    return(
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                className="img responsive"
                src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png"
                alt="img Tshirt"
                />
            </div>
            <div className="meanText text-center">
                <div className="upperText">
                    <p >Upper Text</p>
                </div>
                <img
                src="http://via.placeholder.com/400x300"
                alt="mean text"
                />
                <dov className="lower text">
                    <p>Lower Text</p>
                </dov>
            </div>
        </div>
    )
}

export default Display
