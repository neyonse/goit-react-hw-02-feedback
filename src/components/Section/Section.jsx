import React from 'react';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <div className="container">
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
};
