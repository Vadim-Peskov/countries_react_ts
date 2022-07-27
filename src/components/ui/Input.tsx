import React, { FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;

  input {
    width: 230px;
    padding: 10px 32px 10px 12px;
    font-size: 15px;
    color: inherit;
    border: 1px solid ${props => props.theme.clr_additional};
    border-radius: 3px;
    background-color: transparent;
    transition: border 0.2s ease;
    
    &::placeholder {
      color: ${props => props.theme.clr_additional};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 12px;
    right: 10px;
    color: ${props => props.theme.clr_additional};
    pointer-events: none;
    transition: color 0.15s ease;
  }

  &>input:focus~svg{
    color: ${props => props.theme.clr_accent};
    transition: color 0.15s ease;
  }
`
type TInputProps = {
  type?: string;
  placeholder?: string;
  ico?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<TInputProps> = ({type='text', placeholder, ico, onChange}) => {
  return (
    <StyledInput>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {ico}
    </StyledInput>
  )
}

export default Input;