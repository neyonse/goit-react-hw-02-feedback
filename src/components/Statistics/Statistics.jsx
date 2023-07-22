import React, { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.stats}>
        <ul className={css.statsList}>
          <li className={css.statsItem}>{good}</li>
          <li className={css.statsItem}>{neutral}</li>
          <li className={css.statsItem}>{bad}</li>
        </ul>
        <p className={css.statsTotal}>
          Total<span>{total}</span>
        </p>
        <p className={css.statsPersantage}>
          Positive persantage<span>{positivePercentage}%</span>
        </p>
      </div>
    );
  }
}
