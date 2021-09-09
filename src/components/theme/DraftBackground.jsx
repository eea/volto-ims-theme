import React from 'react';
import { connect } from 'react-redux';
import './draft.css';
import { BodyClass } from '@plone/volto/helpers';

const DraftBackground = ({ review_state }) => {
  const draftClass = `wf-state-${review_state}`;
  return <BodyClass className={draftClass} />;
};

export default connect((state) => ({
  review_state: state.content.data?.review_state,
}))(DraftBackground);
