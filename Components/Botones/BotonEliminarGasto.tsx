
'use client';
import React from 'react';
import { useContextGastos } from '@/Context/ProviderGastos';

interface BotonEliminarGastoProps {
    idgasto: number; 
}

const BotonEliminarGasto: React.FC<BotonEliminarGastoProps> = ({ idgasto }) => {
    const { setGastos } = useContextGastos();

    const handleDelete = () => {
        fetch(`http://localhost:5000/gasto/${idgasto}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                
                setGastos(prev => prev.filter(gasto => gasto.idgasto !== idgasto));
                alert('Gasto eliminado con éxito!');
            } else {
                alert('Error al eliminar el gasto.');
            }
        })
        .catch(error => console.error('Error al eliminar gasto:', error));
    };

    return (
        <button onClick={handleDelete} className="btn btn-danger btn-sm float-end">
            Eliminar
        </button>
    );
};

export default BotonEliminarGasto;
