import React, { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { setAllCountries, setCountriesList } from '../store/countriesSlice';
import { loadCountries } from '../store/countriesAsyncThunk';
import objSorting from '../utils/objSorting';
import Pagination from '../components/common/Pagination';
import Loader from '../components/ui/Loader';
import Button from '../components/ui/Button';
import CountryCard from '../components/common/CountryCard';
import { Link } from 'react-router-dom';

const StyledHomeWrap = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding: 22px 0 0 0;

  @media ${props => props.theme.media_tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media ${props => props.theme.media_desctop} {
    grid-template-columns: repeat(4, 1fr);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;

  button + button {
    margin: 0 0 0 10px;
  }

  @media ${props => props.theme.media_tablet} {
    justify-content: flex-start;
  }
`

type TBtnActive = {
  name: boolean;
  capital: boolean;
}

const Home: FC = () => {
  const [btnActive, setBtnActive] = useState<TBtnActive>({
    name: true,
    capital: false,
  });

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.countries.loading);
  const error = useAppSelector(state => state.countries.error);
  const allCountries = useAppSelector(state => state.countries.allCountries);
  const countriesList = useAppSelector(state => state.countries.countriesList);
  const currentPage = useAppSelector(state => state.countries.currentPage);
  const perPage = useAppSelector(state => state.countries.perPage);

  useEffect(() => {
    dispatch(loadCountries())
  }, [])

  const sortingCountries = (value: string) => {
    const sortedAllArr = objSorting([...allCountries], value);
    const sortedListArr = objSorting([...countriesList], value);
    dispatch(setAllCountries(sortedAllArr));
    dispatch(setCountriesList(sortedListArr));

    value === 'name'
      ? setBtnActive({name: true, capital: false,})
      : setBtnActive({name: false, capital: true,})
  }

  const handleClick = (value: string) => {
    if (
      (!btnActive.name && value === 'name') ||
      (!btnActive.capital && value === 'capital')
    ) sortingCountries(value);
  }
  
  const countriesOnOnePage = useMemo(() => {
    const lastNum = currentPage * perPage;
    const firstNum = lastNum - perPage;
    const countriesInPage = countriesList.slice(firstNum, lastNum);
    return countriesInPage;
  }, [countriesList, currentPage, perPage]);



  return (
    <>
      {(!loading && !error) &&
        <>
          <ButtonsWrap>
            <Button
              onClick={() => handleClick('name')}
              active={btnActive.name}
              text='Country'
            />
            <Button
              onClick={() => handleClick('capital')}
              active={btnActive.capital}
              text='Capital'
            />
          </ButtonsWrap>
          <Pagination />
        </>
      }
      <StyledHomeWrap>
        {loading && <Loader />}
        {(!loading && !error) &&
          countriesOnOnePage.map(i =>
            <Link to={`/${i.name}`} key={i.name}>
              <CountryCard
                name={i.name}
                capital={i.capital}
                flag={i.name === 'Andorra' ? i.flags.png : i.flags.svg}
                region={i.region}
              />
            </Link>
          )
        }
        {error && <div>Error, try later</div>}
      </StyledHomeWrap>
    </>
  )
}

export default Home;