"use client";
import React from "react";
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from "@/Context/ContextGastos";

const Resumen = () => {
  const { gastos, presupuesto } = useContextGastos()

  const calcularTotalGastos = () => {
    return gastos.reduce((total, gasto) => total + gasto.monto, 0);
  }

  const agruparPorCategoria = () => {
    return gastos.reduce((acc, gasto) => {
      acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
      return acc;
    }, {} as Record<string, number>)
  };

  const totalGastos = calcularTotalGastos()
  const gastosPorCategoria = agruparPorCategoria()

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <Nav />
      <h1
        className="display-4 mb-4"
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        {" "}
        Resumen de Gastos
      </h1>

      <ul
        className="list-group mb-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
          <span>Monto</span>
          <span>Categoría</span>
          <span>Fecha</span>
        </li>

        {gastos.map((gasto) => (
          <li
            key={gasto.idgasto}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>{gasto.monto.toFixed(2)}</strong>
            </span>
            <span>{gasto.categoria}</span>
            <span>{new Date(gasto.fecha).toLocaleDateString()}</span>
          </li>
        ))}

        <div
          className="text-center mb-4"
          style={{ maxWidth: "400px", width: "100%", textAlign: "justify" }}
        >
          <br></br>
          <h3 style={{ fontSize: "1.3rem" }}>
            Presupuesto Mensual: <strong>Lps. {presupuesto.toFixed(2)}</strong>
          </h3>
          <h2 style={{ fontSize: "1.5rem" }}>
         Gastos Mensual: <strong>Lps. {totalGastos.toFixed(2)}</strong>
          </h2>
          <h3 style={{ fontSize: "1.3rem" }}>
            Total Disponible:{" "}
            <strong>Lps. {(presupuesto - totalGastos).toFixed(2)}</strong>
          </h3>
        </div>
      </ul>
    </div>
  )
}

export default Resumen
