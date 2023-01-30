import Currency from './Currency';
import s from './Currencies.module.scss';

const Currencies = ({ tickers }) => {
  return (
    <div className={s.wrapper}>
      {tickers.map(({ price, ticker, change, change_percent }) => (
        <Currency
          key={ticker}
          price={price}
          ticker={ticker}
          change={change}
          changePercent={change_percent}
        />
      ))}
    </div>
  );
};

export default Currencies;
