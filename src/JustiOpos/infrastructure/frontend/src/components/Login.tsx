import { useState } from "react";
import {loginStyle}  from "./styleComponents/loginStyle";
import { layoutForm } from "./styleComponents/layoutForm";

export function Login(): JSX.Element{

    const [form, setForm] = useState({
        name: 'Anonim',
        pass: ''    
    })
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }))
        console.log(name, value, form)
    }
    
    return(
        <>
            <div style={layoutForm}>
            <form method="post" style={loginStyle}>
                <input type="text" name="name" id="name" value={form.name} placeholder="userName"  onChange={handleChange}/>
                <input type="password" name="pass" placeholder="password" onChange={handleChange}/>
                <button onClick={() => {
                    fetch('http://localhost:3000/login', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                        name: form.name || 'Anonim',
                        pass: form.pass
                        })
                    })
                    }}>
                        Send
                </button>
        </form>

        </div>

    </>
    )
}