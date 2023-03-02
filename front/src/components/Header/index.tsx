import React from 'react';

import { Container,Content } from './styles';
import logo from '../../assets/images/logo.svg';
import { Orders } from '../Orders';

export function Header(){
  return (
    <Container>

      <Content >
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe seus pedidos</h2>
        </div>

        <img src={logo} alt="logo" />
      </Content>
    </Container>
  );
}
