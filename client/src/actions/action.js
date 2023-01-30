export const tickers = (res) => ({
  type: 'TICKERS',
  tickers: res
});

export const loadInitialDataSocket = (socket) => {
  return (dispatch) => {
    socket.on('ticker', (res) => {
      dispatch(tickers(res));
    });
  };
};
