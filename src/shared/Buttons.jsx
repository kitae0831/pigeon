import React from 'react';
import { styled } from 'styled-components';

export function PinkButton({ children, ...props }) {
  return <Pink {...props}>{children}</Pink>;
}
export function PurpleButton({ children, ...props }) {
  return <Purple {...props}>{children}</Purple>;
}

export function GreenButton({ children, ...props }) {
  return <Green {...props}>{children}</Green>;
}

const Green = styled.button`
  width: 130px;
  height: 60px;
  padding: 10px;
  font-weight: 600;
  line-height: 40px;
  color: #fff;
  border: 2px solid #007144;
  border-radius: 20px;
  transition: all 0.2s;
  background: #00ae68;
  box-shadow: 0px 6px 0px 0px #007144;

  &:hover {
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 6px;
    box-shadow: 0px 0px 0px 0px #007144;
  }
`

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
`;

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
    color: var(--color_purple);
    transition: all 0.3s;
  }
`;
