import React,{createContext, useContext, useState} from 'react';
import colorsData from './data/color-data';
import {v4} from 'react-uuid';

export const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({children})
{

    const [colors, setColors] = useState(colorsData);

    const addColor = (title, color) => 
        setColors([...colors, {id: v4(),
        rating:0,
        title,
        color
        }]);

    const rateColor = (id, rating) =>
        setColors(colors.map(color => (color.id == id ? {...color, rating} : color)));


    const removeColor = id => setColors(colors.filter(color => color.id !== id));

    return(

    <ColorContext.Provider value={{color, addColor, rateColor, removeColor}}>
        {children}
    </ColorContext.Provider>
    )
 }