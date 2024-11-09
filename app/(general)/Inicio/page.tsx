'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (usuario === 'admin' && clave === 'admin123') {
            router.push('/Presupuesto');
        } else {
            alert('Usuario o clave incorrectos');
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
            <input type="password" placeholder="Clave" onChange={(e) => setClave(e.target.value)} />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};



export default LoginPage;
