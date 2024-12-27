import { useState,useCallback,memo } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

// const Decrement = ({dec}) =>{
//     console.log('In Child Component');
//     return(
//         <Typography type='p'>Decrement: {dec}</Typography>
//     )
// }

//useing memo

const Decrement =memo(function Decrement ({dec}){
    console.log('In Child Component');
    return(
        <Typography type='p'>Decrement: {dec}</Typography>
    )
})

const HooksUseCallback2 = () =>{

    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(0);

    const increment = () => {
        setInc(inc+1);
    }


    const decrement = useCallback(() => {
        setDec(dec -1);
    },[dec])


    return(
        <>
        <Typography type='h1'>useCallback</Typography>
        <br/>
        <Typography type='p'>Increment: {inc}</Typography>
        {/* <Typography type='p'>Decrement: {dec}</Typography> */}
        <Decrement dec={dec} />
        <br/>
        <Button action={increment} message='INCREMENT' />
        <Button action={decrement} message='DECREMENT' />
        </>
    )
}

export default HooksUseCallback2;