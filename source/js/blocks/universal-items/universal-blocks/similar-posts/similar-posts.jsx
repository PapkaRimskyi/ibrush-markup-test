import React, { useState } from 'react';

import Post from './post/post';
import Slider from '../slider/slider';

import postsInfo from './mock/posts-info';

import '../../../../../img/lifecycle-post-mobile-img.jpg';
import '../../../../../img/lifecycle-post-desktop-img.jpg';
import '../../../../../img/async-post-desktop-img.jpg';
import '../../../../../img/grid-post-desktop-img.jpg';

export default function SimilarPost() {
  const [activeSlider, setActiveSlider] = useState(0);

  function sliderHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      const pinNumber = parseInt(e.target.id.match(/\d+/), 10);
      setActiveSlider(pinNumber - 1);
    }
  }

  return (
    <section className="similar-post">
      <div className="similar-post__container">
        <h2 className="similar-post__title">Похожие посты</h2>
        <ul className="similar-post__list">
          {postsInfo.map((post, index) => <Post postData={post} activeClass={activeSlider === index ? 'similar-post__item--active' : null} key={post.postHref} />)}
        </ul>
      </div>
      <Slider posts={postsInfo} activePin={activeSlider} sliderHandler={sliderHandler} />
    </section>
  );
}
