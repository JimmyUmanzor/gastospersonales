'use client'
import React, { createContext, useContext, useState } from 'react';
import { Gastos } from '../Modelos/Gastos';
import { GastosContextType } from './ContextGastos';

const GastosContext = createContext<GastosContextType | undefined>(undefined)

export const useContextGastos = () => {
    const context = useContext(GastosContext)
    if (!context) {
        throw new Error('useContextGastos debe ser usado dentro de un ProviderGastos')
    }
    return context
}

export const ProviderGastos: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [gastos, setGastos] = useState<Gastos[]>([]);
    const [presupuesto, setPresupuesto] = useState<number>(0);

    return (
        <GastosContext.Provider value={{ gastos, setGastos, presupuesto, setPresupuesto }}>
            {children}
        </GastosContext.Provider>
    )
}
