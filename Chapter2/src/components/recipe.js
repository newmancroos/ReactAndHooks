import React from 'react';
import Instructions  from './instructions'; 
import IngredientList from './ingredientList';

export default function Recipe({name, ingredients, steps})
{
    return(
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientList list={ingredients} />
            <Instructions title={"Cooking Instructions"} steps={steps} />
        </section>
    )
}