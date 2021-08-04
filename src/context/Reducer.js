import * as actionTypes from "./actionTypes";

export const initialState = {
  stats: { confirmed: 0, recovered: 0, deaths: 0 },
  isLoading: true,
  UIState: { showStats: true, showChart: true },
  selectedCountry: "global",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATS:
      return { ...state, stats: { ...action.stats } };
    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case actionTypes.SET_UI_STATE:
      return {
        ...state,
        UIState: { showStats: action.showStats, showChart: action.showChart },
      };
    case actionTypes.SET_SELEECTED_COUNTRY:
      return { ...state, selectedCountry: action.selectedCountry };
    default:
      return state;
  }
};

export default Reducer;
