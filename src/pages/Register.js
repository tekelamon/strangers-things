import { useState } from "react";
import { registerUser } from "../components/utilities";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div>
        <h1>Register</h1>
        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="button" onClick={()=>{registerUser(username,password)}} >Register</button>
    </div>
};
