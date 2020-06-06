/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default class StarRaiting extends React.Component {
  constructor(props) {
    super(props);

    this.starAssessment = this.props.starAssessment;
    this.radioOnChange = this.props.radioOnChange;
  }

  componentDidMount() {
    document.querySelector('.star-raiting').addEventListener('change', this.radioOnChange);
  }

  componentWillUnmount() {
    document.querySelector('.star-raiting').removeEventListener('change', this.radioOnChange);
  }

  inputMarkup(props) {
    const { index, checkedStatus } = props;
    return (
      <React.Fragment key={index}>
        <input type="radio" className="star-raiting__input visually-hidden" id={`star-${index + 1}`} name="star" value={index + 1} defaultChecked={checkedStatus || ''} />
        <label htmlFor={`star-${index + 1}`} className="star-raiting__input-label" aria-label={this.starAssessment[index]} />
      </React.Fragment>
    );
  }

  inputStars() {
    const { starDefaultCheked } = this.props;
    const starInputCollection = [];
    for (let i = 0; i < this.starAssessment.length; i += 1) {
      if (starDefaultCheked - 1 === i) {
        starInputCollection.push(this.inputMarkup({ index: i, checkedStatus: true }));
      } else {
        starInputCollection.push(this.inputMarkup({ index: i }));
      }
    }
    return starInputCollection;
  }

  render() {
    return (
      <section className="star-raiting">
        <h2 className="visually-hidden">Кнопки для оценки статьи</h2>
        {this.inputStars()}
        <div className="star-raiting__stars-focus" />
      </section>
    );
  }
}
