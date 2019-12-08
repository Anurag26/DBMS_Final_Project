import React from 'react';
import UnitCard from './UnitCard';

const CardBlock = (props) => {

    return (
        <div>
            {
                props.products.length>0 ?
                props.products.map(card=>{
                   return <UnitCard key={card._id} {...card} />
                })
                :
                null
            }
        </div>
    );
};

export default CardBlock;