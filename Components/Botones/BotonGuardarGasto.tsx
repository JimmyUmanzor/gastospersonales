'use client';
import React from 'react';
import { useContextGastos } from '@/Context/ContextGastos';
import { Gastos } from '@/Modelos/Gastos';

interface BotonGuardarGastoProps {
    gasto: Gastos
}

const BotonGuardarGasto: React.FC<BotonGuardarGastoProps> = ({ gasto }) => {
    const { setGastos } = useContextGastos();

    const handleSave = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gasto),
        })
        .then(response => response.json())
        .then(data => {
           
            setGastos(prev => [...prev, data])
            alert('Gasto guardado con éxito!')
        })
        .catch(error => console.error('Error al guardar gasto:', error))
    }

    return (
        <button onClick={handleSave} className="btn btn-primary">Guardar</button>
    )
}

export default BotonGuardarGasto
