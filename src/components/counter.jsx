import {useSelector, useDispatch} from "react-redux";
import {inc_count, dec_count} from "../redux/action";
import {useContext} from "react";
import {appContext} from "../context/context"

export const Counter = () => {

    // const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const {count, handleCount} = useContext(appContext);
    console.log(count)
    // handleCount(1)
  return (
    <div>
        <h1>Counter</h1>
        <p>Count:{count}</p>
        <button onClick={()=>dispatch(inc_count(1))}>INC</button>
        <button onClick={()=>dispatch(inc_count(-1))}>DEC</button>
    
    
    </div>

  )
}
