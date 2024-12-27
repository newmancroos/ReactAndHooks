import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import useCustomHook from "./useCustomHook";
const HooksUseCustom = () =>{

    const {count,increment,decrement,reset} = useCustomHook(2,4);
    return(
        <>
        <Typography type='h1'>Hooks: useCustom</Typography>
        <br/>
        <Typography type='p'>{count}</Typography>
        <br/>
        <Button action={increment} message='Increment' />
        <br/>
        <Button action={decrement} message='Decrement' />
        <br/>
        <Button action={reset} message='Reset' />
        </>
    )
}

export default HooksUseCustom;