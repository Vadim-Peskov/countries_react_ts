import TCountry from './TCountry';

type TLang = {
  name: string;
}

type TCountryInfo = TCountry & {
  languages: TLang[];
  population: string;
}

export default TCountryInfo;