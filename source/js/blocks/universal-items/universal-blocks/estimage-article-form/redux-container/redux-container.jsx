import { connect } from 'react-redux';
import chooseBookAction from '../../../../../redux-files/action/creator/choose-book-action';

import EstimateArticleForm from '../estimate-article-form';

function mapStateToProps(state) {
  return {
    bookName: state.bookName,
  };
}

const mapDispatchToProps = {
  setBook: chooseBookAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimateArticleForm);
