import { useState,useCallback, useEffect } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";


const Rando =({genRano}) =>{
    const [finalRandomNumber,setFinalRandomNumber] = useState();

    //const expensiveCalc = () => genRano**Math.random();

    const expensiveCalc = useCallback(() => genRano**Math.random(),[genRano]);
     
    useEffect(() =>{
        setFinalRandomNumber(expensiveCalc())
    },[expensiveCalc]);
    return(<Typography type='p'>Final number generated is : {finalRandomNumber}</Typography>);
}

const HooksUseCallback3 = () =>{

    const [genRano, setgenRano] = useState(() => Math.random());
    
    const handleRandom = () =>{

        setgenRano(Math.random());
    }
  
    return(
        <>
        <Typography type='h1'>useCallback</Typography>
        <br/>
        <Button action={handleRandom} message="Random Number" />
        <br/>
        <Rando genRano={genRano} />
        </>
    )
}

export default HooksUseCallback3;