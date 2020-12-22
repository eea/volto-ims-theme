/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EUflag from '../../../../../theme/site/assets/images/europe-flag.svg';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header">
            <div className="logo-nav-wrapper">
              <div className="logo">
                <Logo />
              </div>
              <Navigation pathname={this.props.pathname} />
            </div>
            <div className="tools-wrapper">
              <div className="tools-change-language">
                <Icon name="globe" size="big" />
                <span>EN</span>
              </div>
              <div className="tools-search-wrapper">
                {!this.props.token && (
                  <div className="tools">
                    <Anontools />
                  </div>
                )}
                <div className="search">
                  <SearchWidget pathname={this.props.pathname} />
                </div>
              </div>
              <Image
                src={EUflag}
                alt="The EEA is an agency of the European Union"
                title="The EEA is an agency of the European Union"
                height={64}
                className="eu-flag"
              />
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
