import { useState, useCallback } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";


const setFunc = new Set();

const HooksUseCallback = () =>{

    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(0);

    const increment = () => {
        setInc(inc+1);
    }

    // const decrement = () => {
    //     setDec(dec -1);
    // }

    const decrement = useCallback(() => {
        setDec(dec -1);
    },[dec])

    console.log('HooksRendered');
    setFunc.add(increment);
    setFunc.add(decrement);

    //Here every time 2 function added to setFunc due to rerender

    console.log(setFunc);
    return(
        <>
        <Typography type='h1'>useCallback</Typography>
        <br/>
        <Typography type='p'>Increment: {inc}</Typography>
        <Typography type='p'>Decrement: {dec}</Typography>
        <br/>
        <Button action={increment} message='INCREMENT' />
        <Button action={decrement} message='DECREMENT' />
        </>
    )
}

export default HooksUseCallback;