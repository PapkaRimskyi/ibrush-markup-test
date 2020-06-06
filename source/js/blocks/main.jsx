import React from 'react';

import ImageOfBooks from './components/main-components/imageOfBooks';
import ArticleSection from './components/main-components/article-section';
import Blockquote from './components/main-components/blockquote';
import AdvertisingBlocks from './components/main-components/advertising-blocks';
import Paragraph from './components/main-components/paragraph';
import EstimateArticleForm from './components/main-components/estimate-article-form';

export default function Main() {
  const quoteText = `Разработчики и клиенты часто неправильно понимают, что такое система. Они видят графический интерфейс и думают, что он и есть система.
  Они определяют систему в терминах графического интерфейса и считают, что должны сразу начать работу с графическим интерфейсом. Они не понимают
  важнейшего принципа: ввод/вывод не важен.`;
  const paragraphText = `Синхрония осознаёт сюжетный верлибр. Мифопорождающее текстовое устройство диссонирует лирический субъект. Абстрактное высказывание пространственно просветляет
  деструктивный символ. Ямб, несмотря на то, что все эти характерологические черты отсылают не к единому образу нарратора, интегрирует мифопоэтической хронотип.
  Действительно, ударение приводит палимпсест. Контрапункт приводит ритм.`;
  return (
    <main className="main">
      <article className="article-body">
        <ImageOfBooks />
        <ArticleSection sectionTitle="Серверный JavaScript" className="article-section">
          <Blockquote quoteText={quoteText} author="— Р. Мартин" />
        </ArticleSection>
        <AdvertisingBlocks />
        <ArticleSection sectionTitle="Заключение" className="article-section article-section--estimate-article-margin ">
          <Paragraph paragraphText={paragraphText} />
        </ArticleSection>
        <EstimateArticleForm />
      </article>
    </main>
  );
}
