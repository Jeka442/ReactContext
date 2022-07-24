import { useMyContext } from "../Context/MyContextProvider"






export const ActionButtons= ()=>{

    const {decrement,increment} = useMyContext();

    return(
        <div className="Comp">
            I can add or subtract
            <br/>
            <div className="ActionButtons">
                <button onClick={()=>{increment(1)}}>add 1</button>
                <button onClick={()=>{decrement(1)}}>subtract 1</button>
            </div>
        </div>
    )
}