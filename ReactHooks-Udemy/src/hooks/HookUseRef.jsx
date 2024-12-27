import { useRef, useState, useEffect,forwardRef } from "react";
import './Hooks.css'
const Count=({action, message}) =>{
    return(
        <div className="card">
            <button className="text" onClick={action}>
                {message}
            </button>
        </div>
    )
}

const Input = forwardRef((_,ref) =>{
    return(
        <input ref={ref} type="number" name="input focus" placeholder="Input Focus" className="text" />
    )
});
const HooksUseRef = () =>{
    const [count, setCount] = useState(0);

    const buttonLogger = useRef(0);

    const handleCount = () => {
        setCount((prevState) => prevState + 1);
    }

    const inputRef = useRef(0);
    useEffect(() =>{

        inputRef.current.focus();
    },[]);


    const hanldeButtonLoggger = () => {
        buttonLogger.current++;
        console.log(buttonLogger.current);
    }
    return(
        <>
        <h1>Hooks : useRef</h1>
        <Count action={handleCount} message={`Count is ${count}`} />
        <Count action={hanldeButtonLoggger} message={`button clicked : ${buttonLogger.current}`} />
        <br/>
        <Input ref={inputRef} />
        </>
    )
}

export default HooksUseRef