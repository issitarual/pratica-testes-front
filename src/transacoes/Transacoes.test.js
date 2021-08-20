import React from 'react';
import { render } from '@testing-library/react';
import Transacoes from './Transacoes';

describe('Componente de transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const { container } = render(
            <Transacoes
                transacoes={[
                    {valor: 10, transacao: "saque", data: "10/08/2020", id: 1},
                    {transacao: "deposito", valor: 20, data: "26/09/2020", id: 2}
                ]}
            />
        )

        expect(container.firstChild).toMatchSnapshot();
    })
})