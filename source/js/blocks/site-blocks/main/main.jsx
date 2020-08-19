import React from 'react';

import ArticleBody from './article-body/article-body';
import BookExamples from '../../universal-items/universal-blocks/book-examples/book-examples';
import ArticleSection from '../../universal-items/universal-blocks/article-section/article-section';
import Blockquote from '../../universal-items/universal-blocks/blockquote/blockquote';
import AdvertisingBlocks from '../../universal-items/universal-blocks/advertising-block/advertising-block';
import Paragraph from '../../universal-items/universal-blocks/paragraph/paragraph';
import EstimateArticleForm from '../../universal-items/universal-blocks/estimage-article-form/estimate-article-form';

const quoteText = `Разработчики и клиенты часто неправильно понимают, что такое система. Они видят графический интерфейс и думают, что он и есть система.
Они определяют систему в терминах графического интерфейса и считают, что должны сразу начать работу с графическим интерфейсом. Они не понимают
важнейшего принципа: ввод/вывод не важен.`;

const paragraphText = `Синхрония осознаёт сюжетный верлибр. Мифопорождающее текстовое устройство диссонирует лирический субъект. Абстрактное высказывание пространственно просветляет
деструктивный символ. Ямб, несмотря на то, что все эти характерологические черты отсылают не к единому образу нарратора, интегрирует мифопоэтической хронотип.
Действительно, ударение приводит палимпсест. Контрапункт приводит ритм.`;

export default function Main() {
  return (
    <main className="main">
      <ArticleBody>
        <BookExamples />
        <ArticleSection sectionTitle="Серверный JavaScript" className="article-section">
          <Blockquote quoteText={quoteText} author="— Р. Мартин" />
        </ArticleSection>
        <AdvertisingBlocks />
        <ArticleSection sectionTitle="Заключение" className="article-section article-section--estimate-article-margin">
          <Paragraph paragraphText={paragraphText} />
        </ArticleSection>
        <EstimateArticleForm />
      </ArticleBody>
    </main>
  );
}
