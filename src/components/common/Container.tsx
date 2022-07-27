import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
type TContainerProps = {
  children: React.ReactNode;
}

const Container: FC<TContainerProps> = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
export default Container;