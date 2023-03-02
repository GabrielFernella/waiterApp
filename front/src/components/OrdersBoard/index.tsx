import React from 'react';
import { Order } from '../../types/Order';
import {Board, OrdearsContainer} from './styles';

interface Props {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard(props: Props){
  return (
    <Board>
      <header>
        <span>{props.icon}</span>
        <span>{props.title}</span>
        <span>(1)</span>
      </ header>

      <OrdearsContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <strong>2 itens</strong>
        </button>

        <button type='button'>
          <strong>Mesa 2</strong>
          <strong>2 itens</strong>
        </button>
      </ OrdearsContainer>
    </ Board>
  );
}
