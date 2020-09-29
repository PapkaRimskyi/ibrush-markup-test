import React from 'react';

import ArticleBody from './article-body/article-body';
import BookExamples from '../../universal-items/universal-blocks/book-examples/book-examples';
import ArticleSection from '../../universal-items/universal-blocks/article-section/article-section';
import Blockquote from '../../universal-items/universal-blocks/blockquote/blockquote';
import AdvertisingBlocks from '../../universal-items/universal-blocks/advertising-block/advertising-block';
import Paragraph from '../../universal-items/universal-blocks/paragraph/paragraph';
import EstimateArticleForm from '../../universal-items/universal-blocks/estimage-article-form/container';

export default function Main() {
  return (
    <main className="main">
      <ArticleBody>
        <BookExamples />
        <ArticleSection sectionTitle="Серверный JavaScript" className="article-section">
          <Blockquote />
        </ArticleSection>
        <AdvertisingBlocks />
        <ArticleSection sectionTitle="Заключение" className="article-section article-section--estimate-article-margin">
          <Paragraph />
        </ArticleSection>
        <EstimateArticleForm />
      </ArticleBody>
    </main>
  );
}
