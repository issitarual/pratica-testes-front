import React from 'react';
import { render, screen } from '@testing-library/react'

import App, { calcularNovoSaldo } from "./App";

describe('Componente principal', () => {
    describe('Quando abro o App do banco', () => {
        it('Quando abro o App do banco, o nome é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
    
        it('Quando abro o App do banco, o saldo é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
    
        it('Quando abro o App do banco, o botão de realizar transação é exibido', async () => {
            render(<App />);
    
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })
    describe('Quando eu realizo uma transação', () => {
        it('que é o saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            };

            const novoSaldo = calcularNovoSaldo(valores, 150);

            expect(novoSaldo).toBe(100);
        })

         it('que é o saque, o valor vai ficar negativo', async () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            };
            
            const novoSaldo = await calcularNovoSaldo(valores, 0);

            expect(novoSaldo).toBe(-50);
        }) 

        it('que é o deposito, o valor vai ficar positivo', () => {
            const valores = {
                transacao: 'deposito',
                valor: 50
            };
            
            const novoSaldo = calcularNovoSaldo(valores, 100);

            expect(novoSaldo).toBe(150);
        })
    })
})