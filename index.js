import { countries, countryMap } from './country.js';

export const getCountries = () => {
  return countries;
};

export const getCountryByAlpha2 = (alpha2) => countryByAlpha2[alpha2];
export const getCountryByAlpha3 = (alpha3) => countryByAlpha3[alpha3];
export const getCountryByNumeric = (numeric) => countryByNumeric[numeric];
