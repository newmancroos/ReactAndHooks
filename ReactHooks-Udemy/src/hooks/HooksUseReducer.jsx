import { useReducer } from "react";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";

//Reducer function

const countReducer = (state, action) =>{

    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case 'DEGREMENT':
            return state -1;
        case 'RESET':
            return 0;
        case 'GET_NEXT_EVEN':
            if(!(state%2)){
                return state +2;
            }
            else
            {
                return state+1;
            }
        default:
            return state;
    }

}


const HooksUseReducer = () => {

    const [count, dispatch] = useReducer(countReducer,0);
    return(
        <>
            <Typography type='h1'>Hooks: useReducer</Typography>
            <Typography type= 'p'>{count}</Typography> 

            <Button action={() => dispatch({type:'INCREMENT'})} message="Increment" />
            <br/>
            <Button action={() => dispatch({type:'DEGREMENT'})} message="Decrement" />
            <br/>
            <Button action={() => dispatch({type:'RESET'})} message="Reset" />
            <br/>
            <Button action={() => dispatch({type:'GET_NEXT_EVEN'})} message="NEXT EVEN #" />
        </>
    )
}

export default HooksUseReducer;