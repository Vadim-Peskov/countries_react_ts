import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCountries, getOneCountry } from '../API/countriesAPI';
import TCountry from '../types/TCountry';
import TCountryInfo from "../types/TCountryInfo";

export const loadCountries = createAsyncThunk<TCountry[], undefined, {rejectValue: string}>(
  'countries/allCountriesList',

  async function (_, {rejectWithValue}) {

    try {
      const res = await getAllCountries();
      
      if (res.statusText !== 'OK') {
        throw new Error('Server Error!');
      }

      let data = res.data;
      data = data.map(i => {
        if (i.capital === 'Mariehamn') {
          return {...i, name: 'Aland Islands'};
        }
        else if (i.capital) {
          return i;
        }
        else {
          return {...i, capital: 'No official capital'}
        }
      });
      
      data.sort((a,b) => a.name > b.name ? 1 : -1);
      return data as TCountry[];
    }

    catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

export const loadCountry = createAsyncThunk<TCountryInfo[], string | undefined, {rejectValue: string}>(
  'countries/oneCountry',

  async function (countryName, {rejectWithValue}) {

    try {
      const res = await getOneCountry(countryName);
      
      if (res.statusText !== 'OK') {
        throw new Error('Server Error!');
      }

      let data = res.data;
      if (data[0].capital === 'Mariehamn') data[0].name = 'Aland Islands';
      if (!data[0].capital) data[0].capital = 'No official capital';

      return data as TCountryInfo[];
    }

    catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)