import Link from 'next/link';
import React from 'react';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/Presupuesto" className="nav-link active">Presupuesto Mensual</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Registro" className="nav-link">Registrar Gasto</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Resumen" className="nav-link">Resumen de Gastos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
