import { useReducer } from "react";
import Button from "../components/Button";
//Reducer function

const countReducer = (state, action) =>{

    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case 'DEGREMENT':
            return state -1;
        case 'RESET':
            return 0;
        default:
            return state;
    }

}


const HooksUseReducer = () => {

    const [count, dispatch] = useReducer(countReducer,0);
    return(
        <>
            <h1>Hooks: useReducer</h1>
            <p className="text">
                {count}
            </p>
            <Button action={() => dispatch({type:'INCREMENT'})} message="Increment" />
            <br/>
            <Button action={() => dispatch({type:'DEGREMENT'})} message="Decrement" />
            <br/>
            <Button action={() => dispatch({type:'RESET'})} message="Reset" />
            <br/>
        </>
    )
}

export default HooksUseReducer;