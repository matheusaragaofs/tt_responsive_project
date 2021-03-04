import React from 'react';
import { Container, Header, Content } from './styles';
import { useCustomers } from '../../hooks/customers/index';

const PeopleList: React.FC = () => {
  const { customers } = useCustomers();

  return (
      <Container>
      <Header>
          <strong>Nome</strong>

          <span>
            <strong>Planejado</strong>
            <strong>Realizado</strong>
            <strong>Ultima atualização</strong>
          </span>
        </Header>
        {customers.map(customer => (
          <Content key={customer.id}>
            <p>{customer.name}</p>
            <span>
              <p>{customer.planejado}</p>
              <p>{customer.realizado}</p>
              <p>{customer.date}</p>
            </span>
          </Content>
        ))}
      </Container>
  )
}

export default PeopleList;