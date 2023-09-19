import React from 'react';

export default function Ingedients({name, amount,measurement})
{
    return(
      <li>
        {amount} {measurement} {name}
       </li>
    )
}