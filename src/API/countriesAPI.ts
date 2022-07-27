import axios from "axios";
import TCountry from '../types/TCountry';
import TCountryInfo from "../types/TCountryInfo";

const instance = axios.create({
  baseURL: 'https://restcountries.com/v2/',
})

export const getAllCountries = (
  fields = 'flags,name,capital,region,subregion'
) => instance.get<TCountry[]>(`all?fields=${fields}`);

export const getOneCountry = (
  countryName: string | undefined, fields = 'flags,name,capital,region,subregion,languages,population'
) => instance.get<TCountryInfo[]>(`name/${countryName}?fields=${fields}`);