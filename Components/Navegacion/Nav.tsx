'use client';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/Login">Login</Link>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/Presupuesto">Presupuesto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/Registro">
                            Registrar Gasto
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/Resumen">Resumen</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
