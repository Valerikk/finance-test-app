const initialState = { tickers: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKERS':
      return {
        ...state,
        tickers: action.tickers
      };
    default:
      return state;
  }
};

export default reducer;
