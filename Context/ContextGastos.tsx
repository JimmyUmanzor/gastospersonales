'use client'
import { Gastos } from "@/Modelos/Gastos"

export interface GastosContextType {
    gastos: Gastos[];
    setGastos: React.Dispatch<React.SetStateAction<Gastos[]>>;
    presupuesto: number;
    setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
}