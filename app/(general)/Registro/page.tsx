'use client';
import React, { useEffect, useState } from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';
import BotonGuardarGasto from '@/Components/Botones/BotonGuardarGasto';
import BotonActualizarGasto from '@/Components/Botones/BotonActualizarGasto';
import BotonEliminarGasto from '@/Components/Botones/BotonEliminarGasto'; 
import { Gastos } from '@/Modelos/Gastos';

const RegistroGastosPage = () => {
    const { gastos, setGastos } = useContextGastos();
    const [nuevoGasto, setNuevoGasto] = useState<Gastos>({ idgasto: 0, categoria: '', monto: 0, fecha: '' });
    const [isEditing, setIsEditing] = useState(false); 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/gasto');
                const data = await response.json();
                setGastos(data);
            } catch (error) {
                console.error('Error fetching gastos:', error);
            }
        };

        fetchData();
    }, [setGastos]); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNuevoGasto(prev => ({ ...prev, [name]: value }));
    };

    const handleEditClick = (gasto: Gastos) => {
        setNuevoGasto(gasto); 
        setIsEditing(true); 
    };

    return (
        <div className="container">
            <Nav></Nav>
            <h1>{isEditing ? "Actualizar Gasto" : "Registrar Nuevo Gasto"}</h1>
            <input type="text" name="categoria" placeholder="Categoría" value={nuevoGasto.categoria} onChange={handleInputChange} className="form-control mb-2" />
            <input type="number" name="monto" placeholder="Monto" value={nuevoGasto.monto} onChange={handleInputChange} className="form-control mb-2" />
            <input type="date" name="fecha" value={nuevoGasto.fecha} onChange={handleInputChange} className="form-control mb-3" />
            
            {isEditing ? (
                <BotonActualizarGasto gasto={nuevoGasto} />
            ) : (
                <BotonGuardarGasto gasto={nuevoGasto} />
            )}

            <h2>Lista de Gastos</h2>
            <ul className="list-group">
                {gastos.map(gastro => (
                    <li key={gastro.idgasto} className="list-group-item">
                        {gastro.categoria}: ${gastro.monto} - {new Date(gastro.fecha).toLocaleDateString()}
                        <button onClick={() => handleEditClick(gastro)} className="btn btn-warning btn-sm float-end">Editar</button>
                        <BotonEliminarGasto idgasto={gastro.idgasto} /> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistroGastosPage;
