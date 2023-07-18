import React from 'react';
import { styled } from 'styled-components';

export function PinkButton({ children, ...props }) {
  return <Pink {...props}>{children}</Pink>;
}
export function PurpleButton({ children, ...props }) {
  return <Purple {...props}>{children}</Purple>;
}

const Pink = styled.button`
  align-items: center;
  margin: 5px;
  padding: 10px 15px;
  background-color: var(--color_pink);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color_light_pink);
    transition: all 0.3s;
  }
`

const Purple = styled.button`
  align-items: center;
  margin: 5px;
  padding: 10px 15px;
  background-color: var(--color_purple);
  color: var(--color_gray);
  border: none;
  border-radius: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color_gray);
    color: var(--color_purple)
    transition: all 0.3s;
  }
`