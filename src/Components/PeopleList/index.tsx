import React from 'react';
import { Container, Header, Content } from './styles';
// import { useCustomers } from '../../../hooks/customers';

const PeopleList: React.FC = () => {
//   const { customers } = useCustomers();

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
          <Content>
            <p>Matheus Aragão</p>
            <span>
              <p>10</p>
              <p>20</p>
              <p>08/26/12 8h:23</p>
            </span>
          </Content>
          <Content>
            <p>Matheus Aragão</p>
            <span>
              <p>10</p>
              <p>20</p>
              <p>08/26/12 8h:23</p>
            </span>
          </Content>
          <Content>
            <p>Matheus Aragão</p>
            <span>
              <p>10</p>
              <p>20</p>
              <p>08/26/12 8h:23</p>
            </span>
          </Content>
          <Content>
            <p>Matheus Aragão</p>
            <span>
              <p>10</p>
              <p>20</p>
              <p>08/26/12 8h:23</p>
            </span>
          </Content>
          <Content>
            <p>Matheus Aragão</p>
            <span>
              <p>10</p>
              <p>20</p>
              <p>08/26/12 8h:23</p>
            </span>
          </Content>
      </Container>
  )
}

export default PeopleList;