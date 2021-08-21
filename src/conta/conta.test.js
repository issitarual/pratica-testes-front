import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from './Conta';

describe('Componente conta', () => {
    it('Exibir o saldo da conta com formatação monetária', () => {
        render(<Conta saldo={1000} />)
        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe('R$ 1000');
    })

    it('Chama a função realizar transação quando o botão é clicado', () => {
        const funcaoRealizarTransacao = jest.fn();

        render(<Conta saldo={1000}  realizarTransacao={funcaoRealizarTransacao}/>);

        const transacao = screen.getByLabelText("Saque");
        const valor = screen.getByTestId("valor");

        fireEvent.click(transacao, { target: { value: "saque" } });
        fireEvent.change(valor, { target: { value: 10 } });
        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })
})