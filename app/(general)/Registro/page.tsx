'use client';
import React, { useEffect, useState } from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ContextGastos';
import BotonGuardarGasto from '@/Components/Botones/BotonGuardarGasto';
import BotonActualizarGasto from '@/Components/Botones/BotonActualizarGasto';
import BotonEliminarGasto from '@/Components/Botones/BotonEliminarGasto'; 
import { Gastos } from '@/Modelos/Gastos';

const RegistroGastosPage = () => {
    const { gastos, setGastos, presupuesto } = useContextGastos();
    const [nuevoGasto, setNuevoGasto] = useState<Gastos>({ 
        idgasto: 0, 
        categoria: '', 
        monto: 0, 
        fecha: '' 
    });
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`)
                const data = await response.json()
                setGastos(data)
            } catch (error) {
                console.error('Error fetching gastos:', error)
            }
        };

        fetchData()
    }, [setGastos])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNuevoGasto(prev => ({ ...prev, [name]: value }))
    };

    const handleEditClick = (gasto: Gastos) => {
        setNuevoGasto(gasto)
        setIsEditing(true)
    };

    // Cálculo del total de gastos para verificar el presupuesto
    const calcularTotalGastos = () => {
        return gastos.reduce((total, gasto) => total + gasto.monto, 0);
    };

    const totalGastos = calcularTotalGastos()

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <Nav />
            <h1 className="display-4 text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                {isEditing ? "Actualizar Gasto" : "Registrar Nuevo Gasto"}
            </h1>
            <div className="form-group" style={{ maxWidth: '400px', width: '100%' }}>
                <input 
                    type="text" 
                    name="categoria" 
                    placeholder="Categoría" 
                    value={nuevoGasto.categoria} 
                    onChange={handleInputChange} 
                    className="form-control mb-2 text-center" 
                    style={{ fontSize: '1.1rem' }}
                />
                <input 
                    type="number" 
                    name="monto" 
                    placeholder="Monto" 
                    value={nuevoGasto.monto} 
                    onChange={handleInputChange} 
                    className="form-control mb-2 text-center" 
                    style={{ fontSize: '1.1rem' }}
                />
                <input 
                    type="date" 
                    name="fecha" 
                    value={nuevoGasto.fecha} 
                    onChange={handleInputChange} 
                    className="form-control mb-3 text-center" 
                    style={{ fontSize: '1.1rem' }}
                />
            </div>
            {isEditing ? (
                <BotonActualizarGasto gasto={nuevoGasto} />
            ) : (
                <BotonGuardarGasto gasto={nuevoGasto} />
            )}
            <h2 className="text-center mt-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Lista de Gastos Ejecutados
            </h2>
            
            <table className="table table-striped" style={{ maxWidth: '500px', width: '100%' }}>
    <thead>
        <tr>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
    </thead>
    <tbody>
        {gastos.map(gasto => (
            <tr key={gasto.idgasto}>
                <td>Lps. {gasto.monto ? gasto.monto.toFixed(2) : '0.00'}</td>
                <td>{gasto.categoria || 'Sin categoría'}</td>
                <td>{gasto.fecha ? new Date(gasto.fecha).toLocaleDateString() : 'Sin fecha'}</td>
                <td><button onClick={() => handleEditClick(gasto)} className="btn btn-warning btn-sm me-2">Editar</button></td>
                 <td>   <BotonEliminarGasto idgasto={gasto.idgasto} /> </td>
            </tr>
        ))}
    </tbody>
</table>


            {totalGastos > presupuesto && (
                <div className="alert alert-danger mt-3 text-center" style={{ maxWidth: '400px', width: '100%' }}>
                    Has superado el límite del presupuesto, debes ajustar gastos!
                </div>
            )}
        </div>
    )
}
export default RegistroGastosPage
