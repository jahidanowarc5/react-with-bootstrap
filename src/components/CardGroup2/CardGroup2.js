
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        {id: 1, name: 'laptop pro', price:12500},
        {id: 2, name: 'laptop cro', price:12500},
        {id: 3, name: 'laptop gro', price:12500}

    ]
    return (
        <div>
            <CardGroup>
            {
                    products.map(product => <Card2 key={product.id} product={product}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;