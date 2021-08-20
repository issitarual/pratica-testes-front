import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from './Conta';

describe('Componente conta', () => {
    it('Exibir o saldo da conta com formatação monetária', () => {
        render(<Conta saldo={1000} />)
        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe('R$ 1000');
    })
})