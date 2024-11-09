'use client'
import React, { createContext, useContext, useState } from 'react'
import { Gastos } from '@/Modelos/Gastos';

// Definición de la interfaz del contexto
export interface GastosContextType {
    gastos: Gastos[];
    setGastos: React.Dispatch<React.SetStateAction<Gastos[]>>
    presupuesto: number;
    setPresupuesto: React.Dispatch<React.SetStateAction<number>>
}

// Creación del contexto
const GastosContext = createContext<GastosContextType | undefined>(undefined)

// Hook para usar el contexto
export const useContextGastos = () => {
    const context = useContext(GastosContext)
    if (!context) {
        throw new Error('useContextGastos debe ser usado dentro de un GastosProvider')
    }
    return context
};

// Proveedor del contexto
export const GastosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [gastos, setGastos] = useState<Gastos[]>([])
    const [presupuesto, setPresupuesto] = useState<number>(0)

    return (
        <GastosContext.Provider value={{ gastos, setGastos, presupuesto, setPresupuesto }}>
            {children}
        </GastosContext.Provider>
    )
}
