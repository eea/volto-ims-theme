import React from 'react';
import { connect } from 'react-redux';
import './draft.css';

const DraftBackground = ({ content }) => {
  React.useEffect(() => {
    const pageDocument = document.getElementById('page-document');
    if (pageDocument) {
      pageDocument.className += ` wf-state-${content.review_state}`;
    }
  }, [content.review_state]);

  return null;
};

export default connect((state) => ({
  content: state.content.data,
}))(DraftBackground);
