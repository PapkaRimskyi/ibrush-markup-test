/* eslint-disable react/prop-types */
import React from 'react';

import Post from './post';
import Slider from '../custom/slider';

import '../../../../img/lifecycle-post-mobile-img.jpg';
import '../../../../img/lifecycle-post-desktop-img.jpg';
import '../../../../img/async-post-desktop-img.jpg';
import '../../../../img/grid-post-desktop-img.jpg';

export default class SimilarPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeSlider: 0 };

    this.activePostClass = 'similar-post__item--active';

    this.postsInfo = [
      {
        mobileSrc: 'assets/img/lifecycle-post-mobile-img.jpg', desktopSrc: 'assets/img/lifecycle-post-desktop-img.jpg', title: 'События жизненного цикла ReactJS', postHref: 'lifecycle-post.com',
      },
      {
        mobileSrc: null, desktopSrc: 'assets/img/grid-post-desktop-img.jpg', title: 'CSS Grids. Полное руководство', postHref: 'css-grids.com',
      },
      {
        mobileSrc: null, desktopSrc: 'assets/img/async-post-desktop-img.jpg', title: 'Асинхронность в JavaScript', postHref: 'async-js.com',
      },
    ];

    this.sliderHandler = this.sliderHandler.bind(this);
  }

  sliderHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      const pinNumber = parseInt(e.target.id.match(/\d+/), 10);
      this.setState(() => ({ activeSlider: pinNumber - 1 }));
    }
  }

  render() {
    const { activeSlider } = this.state;
    return (
      <section className="similar-post">
        <div className="similar-post__container">
          <h2 className="similar-post__title">Похожие посты</h2>
          <ul className="similar-post__list">
            {this.postsInfo.map((post, index) => {
              if (activeSlider === index) {
                return <Post postData={post} activeClass={this.activePostClass} key={post.postHref} />;
              }
              return <Post postData={post} key={post.postHref} />;
            })}
          </ul>
        </div>
        <Slider quantityPosts={this.postsInfo.length} activePin={activeSlider} handler={this.sliderHandler} />
      </section>
    );
  }
}
