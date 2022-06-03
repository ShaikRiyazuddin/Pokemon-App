import {useState} from "react";

export const User = () => {
    const [users, setUsers] = useState({
        name: "",
        age:"",
        email: ""
    });
    const [data, setData] = useState([])

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUsers({...users, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users);
        setData([...data, users])

    }
    console.log(data)


  return (
    <div>
        <h1>User</h1>
        <form onSubmit = {handleSubmit}>
            <input placeholder="username" name = "name" value = {users.name} onChange = {handleInput}  />
            <input  placeholder="age" name = "age" value = {users.age} onChange={handleInput} />
            <input placeholder="email" name = 'email' value = {users.email} onChange={handleInput} />
            <button type="submit" >Submit</button>
        </form>

    </div>
  )
}
