'use client';
import React, { useEffect } from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';

const Resumen = () => {
    const { gastos, presupuesto } = useContextGastos();

  
    const calcularTotalGastos = () => {
        return gastos.reduce((total, gasto) => total + gasto.monto, 0);
    };


    const agruparPorCategoria = () => {
        return gastos.reduce((acc, gasto) => {
            acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
            return acc;
        }, {} as Record<string, number>);
    };

    const totalGastos = calcularTotalGastos();
    const gastosPorCategoria = agruparPorCategoria();
    
    return (
        <div className="container">
            <Nav></Nav>
            <h1>Resumen de Gastos</h1>
            <h2>Total Gastos: ${totalGastos.toFixed(2)}</h2>
            <h3>Presupuesto Asignado: ${presupuesto.toFixed(2)}</h3>
            <h3>Restante del Presupuesto: ${(presupuesto - totalGastos).toFixed(2)}</h3>

            <h2>Gastos por Categoría</h2>
            <ul className="list-group">
                {Object.entries(gastosPorCategoria).map(([categoria, monto]) => (
                    <li key={categoria} className="list-group-item">
                        {categoria}: ${monto.toFixed(2)}
                    </li>
                ))}
            </ul>

            {totalGastos > presupuesto && (
                <div className="alert alert-danger mt-3">
                    Has superado el límite del presupuesto, debes ajustar gastos!
                </div>
            )}
        </div>
    );
};

export default Resumen;
