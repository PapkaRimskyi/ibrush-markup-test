/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Slider({ posts, activePin, sliderHandler }) {
  return (
    <div className="slider">
      <div className="slider__container">
        <ul className="slider__pin-list" onClick={sliderHandler}>
          {posts.map((post, index) => (
            <li className="slider__item" key={`slider-${activePin === index ? activePin + 1 : index + 1}`}>
              <button type="button" className={classNames('slider__button', activePin === index ? 'slider__button--active' : null)} id={`slider-${activePin === index ? activePin + 1 : index + 1}`} aria-label="Кнопка слайда" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Slider.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePin: PropTypes.number.isRequired,
  sliderHandler: PropTypes.func.isRequired,
};
