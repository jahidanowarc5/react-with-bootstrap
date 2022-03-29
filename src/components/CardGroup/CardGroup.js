

import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'laptop pro', price:12500},
        {id: 2, name: 'laptop cro', price:12500},
        {id: 3, name: 'laptop gro', price:12500}

    ]
    return (
        <div>
            <h2>this is my card</h2>
            <div className="card-group">
                {
                    products.map(product => <Card key={product.id} product={product}></Card>)
                }
               
  
            </div>
        </div>
    );
};

export default CardGroup;