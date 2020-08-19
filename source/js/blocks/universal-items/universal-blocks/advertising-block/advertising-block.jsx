import React from 'react';

import '../../../../../img/advertising-mobile.jpg';
import '../../../../../img/advertising-desktop.jpg';

export default function AdvertisingBlock() {
  return (
    <article className="advertising">
      <div className="advertising__container">
        <figure className="advertising__image-container">
          <figcaption className="advertising__text">Реклама на <a href="blabla.com" className="advertising__link" target="_blank">blabla.com</a></figcaption>
          <picture>
            <source media="(min-width: 768px)" srcSet="assets/img/advertising-desktop.jpg" />
            <img src="assets/img/advertising-mobile.jpg" alt="Рекламный баннер" />
          </picture>
        </figure>
      </div>
    </article>
  );
}
