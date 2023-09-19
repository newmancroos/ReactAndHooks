//import React, {useContext} from "react";
import { ColorContext } from "./";

export default function ColorList(){
    // const {colors} = useContext(ColorContext);

    // if(!colors.length) return <div>No Colors found</div>
    // return(
    //     <div>
    //         { 
    //             colors.map(color => <div style={{ height: 50, backgroundColor: color.color }}>{color.title}</div>)
    //         }
    //     </div>
    // )

    return(
        <ColorContext.Consumer>
            {context => {
                 if(!context.colors.length) return <div>No Colors found</div>
                return(
                    <div>
                        { 
                            context.colors.map(color => <div key={color.id} style={{ height: 50, backgroundColor: color.color }}>{color.title}</div>)
                        }
                    </div>
                )
            }}
        </ColorContext.Consumer>
    )
}