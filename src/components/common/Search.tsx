import React, { FC } from 'react';
import Input from '../ui/Input';
import { CgSearch as SearchIco } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { setCountriesList, setCurrentPage } from '../../store/countriesSlice';


export const Search: FC = () => {
  const dispatch = useAppDispatch()
  const allCountries = useAppSelector(state => state.countries.allCountries);
  const countriesSearch = (value: string) => {
    value = value.toLowerCase();
    const searchingCountries = allCountries.filter(i =>
      i.name.toLowerCase().includes(value) || i.capital.toLowerCase().includes(value))
    dispatch(setCountriesList(searchingCountries))
    dispatch(setCurrentPage(1))
  }

  return (
    <Input
      onChange={(e) => {countriesSearch(e.target.value)}}
      placeholder='County name or capital...'
      ico={<SearchIco/>}
    />
  )
}

export default Search;