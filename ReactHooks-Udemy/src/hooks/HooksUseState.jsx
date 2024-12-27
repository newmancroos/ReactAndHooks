import { useState } from "react";
import './Hooks.css';
const HooksUseState = () => {

    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count +1);
    }
    return(
    <>
        <h1>Hooks: useState</h1>
        <div className='card'>
            <button className="text" onClick={handleCount}>count is {count}</button>
        </div>
    </>
    )
};

export default HooksUseState;