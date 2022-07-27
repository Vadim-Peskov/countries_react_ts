import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/useReduxHooks';
import Search from './Search';
import Theme from './Theme';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${props => props.theme.clr_additional};

  h3 {
    margin: 0 20px 0 0;
    font-size: 18px;
    text-transform: uppercase;
  }
`

const Header: FC = () => {
  const isSearch = useAppSelector(state => state.countries.isSearch);

  return (
    <StyledHeader>
      {isSearch ? <Search /> : <h3>Countries</h3>}
      <Theme />
    </StyledHeader>
  )
}

export default Header;