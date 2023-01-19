import { useState } from 'react'

export default function Welcome() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const container_style = 'w-screen h-screen flex flex-col justify-center items-center'

    if (login) {
        return (
            <div className={container_style}>
                <button onClick={() => {setLogin(false)}}>Back</button>
                <form className='flex flex-col justify-center space-y-5'>
                    <input type="text" id="username" name="username" />
                    <input type="text" id="password" name="password" />
                    <button>Login</button>
                </form>
                <button onClick={() => {setRegister(true); setLogin(false);}}>Register</button>
            </div>
        )
    }

    if (register) {
        return (
            <div className={container_style}>
                <button onClick={() => {setRegister(false)}}>Back</button>
                <form className='flex flex-col justify-center space-y-5'>
                    <input type="text" id="username" name="username" />
                    <input type="text" id="password" name="password" />
                    <input type="text" id="confirm-password" name="confirm-password" />
                    <button>Register</button>
                </form>
                <button onClick={() => {setLogin(true); setRegister(false);}}>Login</button>
            </div>
        )
    }

    return (
        <div className={container_style}>
            <h1 className='text-center'>Welcome to Mus Online</h1>
            <button onClick={() => setLogin(true)}>Go!</button>
        </div>
    )
}