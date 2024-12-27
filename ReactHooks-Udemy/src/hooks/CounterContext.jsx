import {useState, createContext} from 'react'

const CounterContext = createContext();

const CounterProvider = ({children}) =>{

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () =>{
        setCount((prevCount) => prevCount - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    const value = {increment, decrement, reset, count}

    return <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
}

export {CounterProvider, CounterContext};