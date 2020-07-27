import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card-cover" >
        <div className="card">
            <div className="card-front">
                <div className="card-image-box">
                    <div className="card-image">
                        <img
                            src={`https://robohash.org/${props.data.name + props.data.id}?set=set5`}
                            alt="Just Wait..." />
                    </div>
                </div>
                <h3>
                    {props.data.name}
                </h3>
            </div>
            <div className="card-back">
                <p> {props.data.name} </p>
                <p> {props.data.username} </p>
                <p> {props.data.email} </p>
                <p> {props.data.address.street} , {props.data.address.city}  </p>
                <p> {props.data.website} </p>
                <p> {props.data.company.name} </p>
            </div>
        </div>
    </div>
);

export default Card;