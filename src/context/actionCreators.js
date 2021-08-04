import * as actionTypes from "./actionTypes";

export const setUIState = (bool1, bool2) => {
  return { type: actionTypes.SET_UI_STATE, showStats: bool1, showChart: bool2 };
};

export const setIsLoading = (bool) => {
  return { type: actionTypes.SET_IS_LOADING, isLoading: bool };
};

export const setSelectedCountry = (country) => {
  return { type: actionTypes.SET_SELEECTED_COUNTRY, selectedCountry: country };
};

export const setStats = (stats) => {
  return { type: actionTypes.SET_STATS, stats };
};
