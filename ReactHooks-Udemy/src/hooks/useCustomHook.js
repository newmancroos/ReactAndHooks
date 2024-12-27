import { useState } from "react";

const useCustomHook = (initialValue=0, step=1) =>{

    const [count,setCount] = useState(initialValue);
    const increment = () =>{
        setCount(prevState => prevState+step);
    }
    const decrement = () =>{
        setCount(prevState => prevState-step);
    }
    const reset = () =>{
        setCount(initialValue);
    }

    return {count,increment,decrement,reset};
}

export default useCustomHook;