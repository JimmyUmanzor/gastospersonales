'use client';
import React from 'react';
import { useContextGastos } from '@/Context/ContextGastos';
import { Gastos } from '@/Modelos/Gastos';


interface BotonActualizarGastoProps {
    gasto: Gastos;
}

const BotonActualizarGasto: React.FC<BotonActualizarGastoProps> = ({ gasto }) => {
    const { setGastos } = useContextGastos()

    const handleUpdate = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto/${gasto.idgasto}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gasto),
        })
        .then(response => response.json())
        .then(data => {
            
            setGastos(prev => prev.map(g => (g.idgasto === gasto.idgasto ? data : g)))
            alert('Registro actualizado con éxito!')
        })
        .catch(error => console.error('Error al actualizar gastos', error))
    }

    return (
        <button onClick={handleUpdate} className="btn btn-success">Actualizar</button>
    )
}

export default BotonActualizarGasto
