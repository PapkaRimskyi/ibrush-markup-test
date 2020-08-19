import React from 'react';
import classNames from 'classnames';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.sliderListHandler = this.props.handler;
    this.activeClass = 'slider__button--active';
  }

  componentDidMount() {
    document.querySelector('.slider__pin-list').addEventListener('click', this.sliderListHandler);
  }

  componentWillUnmount() {
    document.querySelector('.slider__pin-list').removeEventListener('click', this.sliderListHandler);
  }

  getSliderPins() {
    const { quantityPosts, activePin } = this.props;
    const pinCollection = [];
    for (let i = 0; i < quantityPosts; i += 1) {
      if (activePin === i) {
        pinCollection.push(this.sliderPinMarkup(`slider-${activePin + 1}`, this.activeClass));
      } else {
        pinCollection.push(this.sliderPinMarkup(`slider-${i + 1}`));
      }
    }
    return pinCollection;
  }

  // eslint-disable-next-line class-methods-use-this
  sliderPinMarkup(sliderNumber, activeClass) {
    return (
      <li className="slider__item" key={sliderNumber}>
        <button type="button" className={classNames('slider__button', activeClass || null)} id={sliderNumber} aria-label="Кнопка слайда" />
      </li>
    );
  }

  render() {
    return (
      <div className="slider">
        <div className="slider__container">
          <ul className="slider__pin-list">
            {this.getSliderPins()}
          </ul>
        </div>
      </div>
    );
  }
}
