import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type TButtonIsActive = {
  isActive?: boolean;
}

const StyledButton = styled.button<TButtonIsActive>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  padding: 16px 20px;
  font-family: inherit;
  font-size: 14px;
  color: #ffffff;
  background-color: ${props => props.theme.clr_accent};
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  ${props => props.isActive && css`
    background-color: ${props => props.theme.clr_accent_hover};
  `}

  &:hover {
    background-color: ${props => props.theme.clr_accent_hover};
  }
`
type TButtonProps = {
  text?: string;
  active?: boolean;
  onClick?: () => void;
}

 const Button: FC<TButtonProps> = ({text = 'Button', active, onClick}) => {
  return (
    <StyledButton isActive={active} onClick={onClick}>
      <span className='text'>{text}</span>
    </StyledButton>
  )
}

export default Button;