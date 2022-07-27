import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Styled404 = styled.div`
  p {
    margin: 30px 0 20px 0;
  }

  a {
    text-decoration: none;
  }
`

const Page404: FC = () => {
  return (
    <Styled404>
      <p>Page not found</p>
      <Link to="/">
        <Button text='Back'/>
      </Link>
    </Styled404>
  )
}

export default Page404;