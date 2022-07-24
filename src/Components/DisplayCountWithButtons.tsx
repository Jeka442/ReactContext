import { useMyContext } from "../Context/MyContextProvider"
import { ActionButtons } from "./ActionButtons";

export const DisplayCountWithButtons= ()=>{

    const {counter} = useMyContext();

    return(
        <div className="Comp">
            <p>I'm displaying the count: {counter}</p>
            <ActionButtons/>
        </div>
    )
}