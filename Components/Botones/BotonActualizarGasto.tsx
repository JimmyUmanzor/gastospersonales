
'use client';
import React from 'react';
import { useContextGastos } from '@/Context/ProviderGastos';
import { Gastos } from '@/Modelos/Gastos';



interface BotonActualizarGastoProps {
    gasto: Gastos;
}

const BotonActualizarGasto: React.FC<BotonActualizarGastoProps> = ({ gasto }) => {
    const { setGastos } = useContextGastos();

    const handleUpdate = () => {
        fetch(`http://localhost:5000/gasto/${gasto.idgasto}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gasto),
        })
        .then(response => response.json())
        .then(data => {
            
            setGastos(prev => prev.map(g => (g.idgasto === gasto.idgasto ? data : g)));
            alert('Gasto actualizado con éxito!');
        })
        .catch(error => console.error('Error al actualizar gasto:', error));
    };

    return (
        <button onClick={handleUpdate} className="btn btn-success">
            Actualizar Gasto
        </button>
    );
};

export default BotonActualizarGasto;
