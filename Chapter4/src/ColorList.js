import { ColorContext } from "./ColorProvider";
import {useColors} from './ColorProvider';
export default function ColorList(){

    const {colors} = useColors();
    return(
        <ColorContext.Consumer>
            {context => {
                 if(!colors.length) return <div>No Colors found</div>
                return(
                    <div>
                        { 
                            colors.map(color => <div key={color.id} style={{ height: 50, backgroundColor: color.color }}>{color.title}</div>)
                        }
                    </div>
                )
            }}
        </ColorContext.Consumer>
    )
}