import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import Button from '../components/Button/Button.jsx';
//import '../MainStyle.css'

// const Count = ({action, message}) =>{
//     return(
//         <div className="card">
//             <button className="text" onClick={action}>
//                 {message}
//             </button>
//         </div>
//     );
// };

const CountValue = () =>{

    const {count} = useContext(CounterContext);
    return(
        <p className="text">{count}</p>
    )
}
const HooksUseContext = () => {

    const {increment, decrement, reset} = useContext(CounterContext)
    return(
        <>
            <h1>Hooks: useContext</h1>
            <CountValue/>
            <Button action={increment} message="Increment" />
            <Button action={decrement} message="Decrement" />
            <Button action={reset} message="Reset" />

        </>
    );
};

export default HooksUseContext;