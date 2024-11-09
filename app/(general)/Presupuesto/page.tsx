'use client';
import React from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ContextGastos';

const PresupuestoPage = () => {
    const { presupuesto, setPresupuesto } = useContextGastos()

    const handlePresupuestoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPresupuesto(Number(e.target.value))
    };

    const handleGuardarPresupuesto = () => {
        alert(`Presupuesto establecido en: Lps. ${presupuesto.toFixed(2)}`)
    };

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <Nav />
            <h1 className="display-4 text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Establecer Presupuesto Mensual
            </h1>
            <input 
                type="number" 
                value={presupuesto} 
                onChange={handlePresupuestoChange} 
                placeholder="Establecer Presupuesto" 
                className="form-control mb-3 text-center"
                style={{ maxWidth: '300px', fontSize: '1.2rem' }} 
            />
            <button 
                onClick={handleGuardarPresupuesto} 
                className="btn btn-primary mb-4" 
                style={{ fontSize: '1.1rem', padding: '10px 20px' }}
            >
                Guardar Presupuesto
            </button>
        </div>
    );
};

export default PresupuestoPage
