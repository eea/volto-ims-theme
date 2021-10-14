/**
 * Anontools component.
 * @module components/theme/Anontools/Anontools
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import config from '@plone/volto/registry';

/**
 * Anontools container class.
 * @class Anontools
 * @extends Component
 */
class Anontools extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    content: PropTypes.shape({
      '@id': PropTypes.string,
    }),
    handleClick: PropTypes.func,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
    content: {
      '@id': null,
    },
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      !this.props.token && (
        <Menu pointing secondary floated="right">
          <Menu.Item className="sign-in">
            <Link
              onClick={this.props.handleClick}
              aria-label="login"
              to={`/ims/login${
                this.props.content
                  ? `?return_url=${this.props.content['@id'].replace(
                      config.settings.apiPath,
                      '',
                    )}`
                  : ''
              }`}
            >
              <div className="text-white mobile tablet computer only">
                Login to CMS
              </div>
              <Icon title="Log in to CMS" name="sign in" size="large" />
            </Link>
          </Menu.Item>
        </Menu>
      )
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
  content: state.content.data,
}))(Anontools);
