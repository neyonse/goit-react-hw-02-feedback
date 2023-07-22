import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ul className={css.feedbackOptions}>
        {options.map(option => {
          return (
            <li
              className={css.feedbackOptionsItem}
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    );
  }
}
