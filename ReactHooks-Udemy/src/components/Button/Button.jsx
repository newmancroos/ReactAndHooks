import '../../MainStyle.css'

const Button = ({action, message}) =>{

    return(
        <div className="card">
            <button className="text" onClick={action}>
                {message}
            </button>
        </div>
    )
}

export default Button;