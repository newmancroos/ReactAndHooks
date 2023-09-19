import React from 'react';
import Ingredient from './Ingredient'
export default function Ingedients({list})
{
    return(
      <ul className='ingredients'>
        {list.map((ingrd, i) => (
            <Ingredient key={i} {...ingrd}></Ingredient>
        ))}
    </ul>
    )
}