import TTheme from './TTheme';
import TCountry from './TCountry';
import TCountryInfo from './TCountryInfo'

type TInitialState = {
  loading: boolean;
  error: null | string;
  allCountries: TCountry[];
  countriesList: TCountry[];
  singleCountry: TCountryInfo[],
  currentPage: number;
  perPage: number;
  theme: TTheme;
  isSearch: boolean;
}

export default TInitialState;