import { useState } from "react";
import {loginStyle}  from "./styleComponents/loginStyle";
import { layoutForm } from "./styleComponents/layoutForm";

export function Login(): JSX.Element{

    const [form, setForm] = useState({
        name: '',
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

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: form.name,
            pass: form.pass
            })
        })
    }
    
    return(
        <>
            <div style={layoutForm}>
                <form method="post" style={loginStyle}>
                    <input type="text" name="name" id="name" value={form.name} placeholder="User Name"  onChange={handleChange}/>
                    <input type="password" name="pass" placeholder="Password" onChange={handleChange}/>
                    <button onClick={handleSubmit}>
                            Send
                    </button>
                </form>
            </div>
        </>
    )
}