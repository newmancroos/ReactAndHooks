import { useState, useMemo } from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

const HooksUseMemo = () =>{

    const [inc,setInc] = useState(0);
    const [nth, setNth]= useState(0);

    //Without memo
    // const expensiveIteration = () =>{
    //     console.log('Performing expensive computation');
    //     const start = performance.now();

    //     let result=0;
    //     for(let i=0;i<nth*1000000000;i++)
    //     {
    //         result +=1;
    //     }

    //     const end = performance.now();
    //     console.log(`Execution time: ${end - start} ms`);

    //     return result;
    // }

    //With memo
    const expensiveIteration = useMemo(() =>{
        console.log('Performing expensive computation');

        const start = performance.now();

        let result=0;
        for(let i=0;i<nth*1000000000;i++)
        {
            result +=1;
        }

        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);

        return result;
    },[nth])

    return(
    <div>
        <Typography type="h1">useMemo</Typography>
        <Button action={()=>setInc(inc + 1)} message={`Increment: ${inc}`} />
            <br/>
            <br/>
            <br/>
            <Button action={() => setNth(nth +1)} message={`Expensive Iteration: ${nth}`} />
            <Typography type='p'>value: {expensiveIteration}</Typography>
    </div>
    )
}
export default HooksUseMemo;