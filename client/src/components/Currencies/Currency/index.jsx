import React from 'react';
import clsx from 'clsx';
import Arrow from '../../../assets/icons/Arrow';
import s from './Currency.module.scss';

const Currency = ({ price, ticker, change, changePercent }) => {
  const revenue = (price - change).toFixed(2);
  const isNegativeValue = revenue < 0;

  const changedPercent = `${isNegativeValue ? '-' : '+'} ${changePercent} %`;

  return (
    <div className={s.wrapper}>
      <div>
        <Arrow className={clsx(s.info_icon, { [s.info_icon_negative]: isNegativeValue })} />
      </div>
      <div className={s.info}>
        <div className={s.info_title}>
          <span className={s.info_currency}>{ticker}</span>
          <span>{price}</span>
        </div>
        <div className={clsx(s.info_change, { [s.info_change_negative]: isNegativeValue })}>
          <span>{revenue}</span>
          <span>{changedPercent}</span>
        </div>
      </div>
    </div>
  );
};

export default Currency;
