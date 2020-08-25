/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function StarRaiting({ starAssessment }) {
  return (
    <section className="star-raiting">
      <h2 className="visually-hidden">Кнопки для оценки статьи</h2>
      {starAssessment.map((assessment, index) => (
        <Fragment key={`radio-${index + 1}`}>
          <input type="radio" className="star-raiting__input visually-hidden" id={`star-${index + 1}`} name="star" value={index + 1} defaultChecked={assessment === 'Хорошо' || null} />
          <label htmlFor={`star-${index + 1}`} className="star-raiting__input-label" aria-label={assessment} />
        </Fragment>
      ))}
      <div className="star-raiting__stars-focus" />
    </section>
  );
}

StarRaiting.propTypes = {
  starAssessment: PropTypes.arrayOf(PropTypes.string).isRequired,
};
