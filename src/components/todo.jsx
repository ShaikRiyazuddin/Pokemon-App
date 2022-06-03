import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {add_todo} from '../redux/action'


export const Todo = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();


    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add_todo(value));
        setTodos([...todos,value])
        setValue("");
    }
    // console.log("todos",todos)
  return (
    <div>
        <h1>Todo</h1>
        <input onChange = {handleInput}></input>
        <button onClick = {handleSubmit}>Add</button>
        {todo.map((todo, index) => {
            return(
                <div key = {index}>
                    <p>{todo}</p>
                </div>
            )
        })}
    </div>
  )
}
