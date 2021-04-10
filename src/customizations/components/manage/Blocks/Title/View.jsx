/**
 * View title block.
 * @module components/manage/Blocks/Title/View
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * View title block class.
 * @class View
 * @extends Component
 */
const View = ({ metadata, properties }) => (
  <h1 className="documentFirstHeading">
    {metadata?.title || properties?.title}
  </h1>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  metadata: PropTypes.objectOf(PropTypes.any),
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
