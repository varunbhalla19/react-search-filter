import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card" >
        {props.data.name}
    </div>
);

export default Card ;