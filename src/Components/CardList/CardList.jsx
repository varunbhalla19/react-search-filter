import React from 'react';
import './CardList.css';

import Card from '../Card/Card';

const CardList = props => (
    <div className="card-list" >
        {props.userList.map(user => (
            <Card key={user.id} data={user} />
        ))}
    </div>
);

export default CardList;