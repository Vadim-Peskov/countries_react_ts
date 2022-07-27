import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 14px rgba(127, 127, 127, 0.25);

  & .img-container {
    position: relative;
    padding-bottom: 58%;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  & .text-wrap {
    padding: 24px 12px 18px 12px;
    color: ${props => props.theme.clr_text};
    border-radius: 0 0 3px 3px;

    & h3 {
      margin: 0 0 14px 0;
      font-size: 18px;
      font-weight: 500;
    }

    & p {
      margin: 0 0 8px 0;
      font-size: 14px;
      font-weight: 500;

      & span {
        font-weight: 400;
      }
    }
  }
`

type TCountryCardProps = {
  flag: string;
  name: string;
  capital: string;
  region: string;
}

const CountryCard: FC<TCountryCardProps> = ({flag, name, capital, region}) => {
  return (
    <StyledCard>
      <div className='img-container'>
        <img src={flag} alt={name} />
      </div>
      <div className='text-wrap'>
        <h3>{name}</h3>
        <p><span>Capital: </span>{capital}</p>
        <p><span>Region: </span>{region}</p>
      </div>
    </StyledCard>
  )
}

export default CountryCard;