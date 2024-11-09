'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        if (usuario === 'admin' && clave === 'admin123') {
            router.push('/Presupuesto')
        } else {
            alert('Usuario o clave incorrectos')
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1 style={{ marginBottom: '20px' }}>Bienvenido a mi Web de Control de Gastos</h1>
            <input
                type="text"
                placeholder="Usuario"
                onChange={(e) => setUsuario(e.target.value)}
                style={{ marginBottom: '10px', padding: '10px', width: '200px', textAlign: 'center' }}
            />
            <input
                type="password"
                placeholder="Clave"
                onChange={(e) => setClave(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '200px', textAlign: 'center' }}
            />
            <button
                onClick={handleLogin}
                style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#4CAF50', color: '#fff', border: 'none' }}
            >Iniciar Sesión</button>
        </div>
    )
    
}



export default LoginPage


