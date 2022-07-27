import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { loadCountry } from '../store/countriesAsyncThunk';
import { setIsSearch } from '../store/countriesSlice';
import Loader from '../components/ui/Loader';
import Button from '../components/ui/Button';

const StyledCountryPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;

  .img-container {
    position: relative;
    display: flex;
    align-self: flex-start;
    flex: 0 1 100%;
    margin: 0 0 34px 0;
    padding: 0 0 58% 0;

    @media ${props => props.theme.media_tablet} {
      flex: 0 1 40%;
      margin: 0;
      padding: 0 0 26% 0;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;

    @media ${props => props.theme.media_tablet} {
      flex: 0 1 60%;
      padding: 0 0 0 28px;
    }

    h3 {
      margin: 0 0 18px 0;
      font-size: 18px;
      text-transform: uppercase;
    }

    p {
      margin: 0 0 10px 0;

      span:first-of-type {
        font-weight: 500;
      }
    }
  }

  a {
    margin: 30px 0 0 0;
    text-decoration: none;
  }

  .error {
    flex-basis: 100%;
  }
`

export const CountryPage = () => {
  const dispatch = useAppDispatch();
  const {country} = useParams();
  const singleCountry = useAppSelector(state => state.countries.singleCountry)[0];
  const loading = useAppSelector(state => state.countries.loading);
  const error = useAppSelector(state => state.countries.error);

  useEffect(() => {
    dispatch(loadCountry(country));
    dispatch(setIsSearch(false));
    return () => {dispatch(setIsSearch(true))}
  }, []); 

  return (
    <StyledCountryPage>
      {loading && <Loader/>}
      {(!loading && !error && singleCountry) &&
        <>
          <div className='img-container'>
            <img
              src={singleCountry.name === 'Andorra'
                ? singleCountry.flags.png
                : singleCountry.flags.svg
              }
              alt={singleCountry.name}
            />
          </div>
          <div className='text-wrap'>
            <h3>{singleCountry.name}</h3>
            <p><span>Capital: </span>{singleCountry.capital}</p>
            <p><span>Region: </span>{singleCountry.region}</p>
            <p><span>Subegion: </span>{singleCountry.subregion}</p>
            <p><span>Languages: </span>
              {singleCountry.languages.map(i =>
                <span key={singleCountry.name + i.name}>
                  {i.name}
                </span>
              )}
            </p>
            <p><span>Population: </span>{singleCountry.population}</p>
          </div>
        </>
      }
      {error && <div className='error'>Error, try later</div>}
      {!loading &&
        <Link to="/">
          <Button text='Back'/>
        </Link>
      }
    </StyledCountryPage>
  )
}

export default CountryPage;