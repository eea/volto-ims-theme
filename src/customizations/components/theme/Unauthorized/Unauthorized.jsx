/**
 * @module components/theme/Unauthorized/Unauthorized
 */

import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { getBaseUrl } from '@plone/volto/helpers';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = () => {
  let location = useLocation();
  return (
    <Redirect
      to={`${getBaseUrl(location.pathname)}/login?return_url=${
        location.pathname
      }`}
    />
  );
};

export default Unauthorized;
