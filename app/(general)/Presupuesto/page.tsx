'use client';
import React from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';

const PresupuestoPage = () => {
    const { presupuesto, setPresupuesto } = useContextGastos();

    const handlePresupuestoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPresupuesto(Number(e.target.value));
    };

    const handleGuardarPresupuesto = () => {
        alert(`Presupuesto establecido en: $${presupuesto.toFixed(2)}`);
    };

    return (
        <div className="container">
            <Nav></Nav>
            <h1>Establecer Presupuesto Mensual</h1>
            <input 
                type="number" 
                value={presupuesto} 
                onChange={handlePresupuestoChange} 
                placeholder="Establecer Presupuesto" 
                className="form-control mb-3" 
            />
            <button onClick={handleGuardarPresupuesto} className="btn btn-primary">
                Guardar Presupuesto
            </button>
            <h2>Presupuesto Asignado: ${presupuesto.toFixed(2)}</h2>
        </div>
    );
};

export default PresupuestoPage;
