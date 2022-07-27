import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { loadCountries, loadCountry } from "./countriesAsyncThunk";
import TTheme from '../types/TTheme';
import light from '../styles/themes/light';
import TCountry from '../types/TCountry';
import TCountryInfo from '../types/TCountryInfo';
import TInitialState from '../types/TInitialState';

const initialState: TInitialState = {
  loading: false,
  error: null,
  allCountries: [],
  countriesList: [],
  singleCountry: [],
  currentPage: 1,
  perPage: 12,
  theme: light,
  isSearch: true,
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setAllCountries(state, action: PayloadAction<TCountry[]>) {
      state.allCountries = action.payload;
    },
    setCountriesList(state, action: PayloadAction<TCountry[]>) {
      state.countriesList = action.payload;
    },
    setSingleCountry(state, action: PayloadAction<TCountryInfo[]>) {
      state.singleCountry = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTheme(state, action: PayloadAction<TTheme>) {
      state.theme = action.payload;
    },
    setIsSearch(state, action: PayloadAction<boolean>) {
      state.isSearch = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.allCountries = action.payload;
        state.countriesList = action.payload;
        state.loading = false;
      })
      .addCase(loadCountry.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCountry.fulfilled, (state, action) => {
        state.singleCountry = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
});

export const {
  setAllCountries,
  setCountriesList,
  setSingleCountry,
  setCurrentPage,
  setTheme,
  setIsSearch,
} = countriesSlice.actions;

export default countriesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}