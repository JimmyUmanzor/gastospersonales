import React from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { GastosProvider } from '@/Context/ContextGastos';
//import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <GastosProvider>
                
                    {children}
                </GastosProvider>
            </body>
        </html>
    );
}
