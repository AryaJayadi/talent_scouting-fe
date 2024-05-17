import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBinus from '../assets/logo_binus.png';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function LoginPage() {
    const nav = useNavigate();
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    async function handleLogin() {
        if (username === "user" && password === "user") {
            nav('/home');
        }
        else if (username === "company" && password === "company") {
            nav('/home');
        }
    }

    return (
        <div className='h-[100vh] w-[100vw] bg-[#D6E4F0]'>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='h-[300px] w-[400px] bg-[white] rounded-xl px-[40px] py-[10px]'>
                    <div className='w-full flex justify-center mb-[20px]'><img src={LogoBinus} width={150}/></div>

                    <div>
                        <Input 
                            className='my-[10px]' 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder='Username'
                        />
                        <Input 
                            className='my-[10px]' 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='Password'
                            type={'password'}
                        />
                        <Button className='w-full bg-[#005581] mt-[15px]' onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
