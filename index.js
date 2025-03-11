import { countries, countryMap } from './country.js';

export const getCountries = () => {
  return countries;
};

export const getCountryByAlpha3 = (value) => {
  return countryMap[value];
};
