import { useState } from "react";

export function Register(): JSX.Element{
    const[data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    })

    const [form, setForm] = useState({
        name: '',
        email:'',
        pass: '',
        passVerify:''
    })

    const [error, setError] = useState ('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }))
    }
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (form.pass === form.passVerify) {
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    pass: form.pass
                    })
                })

                console.log('hellooooo')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json()
                setData( result)
                console.log('la respuesta: ' + result + data)
            } catch (err: any) {
                if (err instanceof Error) {
                    setError(err.message); 
                } else {
                    setError('An unknown error occurred.');
                }
            }
        } else {
            setError('Las contraseñas no coinciden')
        }
        setTimeout(() => setError(''), 4000)
    }
    
    return(
        <>
            
            <div className="card">
            <form method="post" style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <input type="text" name="name" id="name" value={form.name} placeholder="User Name"  onChange={handleChange}/>
                <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="pass" id="pass" placeholder="New Password" onChange={handleChange}/>
                <input type="password" name="passVerify" id="passVerify" placeholder="Repeat Your Password" onChange={handleChange}/>
                <button onClick={handleSubmit}>
                    Send        
                </button>
            </form>
            <div style={{color:'red'}}>
                
                {error}
            </div>
        </div>

    </>
    )
}