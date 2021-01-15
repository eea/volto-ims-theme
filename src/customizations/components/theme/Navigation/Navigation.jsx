/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { Menu, Icon, Image } from 'semantic-ui-react';
import cx from 'classnames';
import { getBaseUrl } from '@plone/volto/helpers';
import { settings } from '~/config';
import { getNavigation } from '@plone/volto/actions';
import { Anontools, SearchWidget } from '@plone/volto/components';

import EUflag from '../../../../../theme/site/assets/images/europe-flag.svg';

const messages = defineMessages({
  closeMobileMenu: {
    id: 'Close menu',
    defaultMessage: 'Close menu',
  },
  openMobileMenu: {
    id: 'Open menu',
    defaultMessage: 'Open menu',
  },
});

/**
 * Navigation container class.
 * @class Navigation
 * @extends Component
 */
class Navigation extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getNavigation: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
    lang: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Navigation
   */
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  UNSAFE_componentWillMount() {
    this.props.getNavigation(
      getBaseUrl(this.props.pathname),
      settings.navDepth,
    );
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.props.getNavigation(
        getBaseUrl(nextProps.pathname),
        settings.navDepth,
      );
    }
  }

  /**
   * Toggle mobile menu's open state
   * @method toggleMobileMenu
   * @returns {undefined}
   */
  toggleMobileMenu() {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  /**
   * Close mobile menu
   * @method closeMobileMenu
   * @returns {undefined}
   */
  closeMobileMenu() {
    if (!this.state.isMobileMenuOpen) {
      return;
    }
    this.setState({ isMobileMenuOpen: false });
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { lang } = this.props;

    return (
      <nav className="navigation">
        <div className="hamburger-wrapper mobile tablet computer only">
          <button
            className={cx('hamburger hamburger--boring', {
              'is-active': this.state.isMobileMenuOpen,
            })}
            aria-label={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            title={
              this.state.isMobileMenuOpen
                ? this.props.intl.formatMessage(messages.closeMobileMenu, {
                    type: this.props.type,
                  })
                : this.props.intl.formatMessage(messages.openMobileMenu, {
                    type: this.props.type,
                  })
            }
            type="button"
            onClick={this.toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <Menu
          stackable
          pointing
          secondary
          className={
            this.state.isMobileMenuOpen
              ? 'open'
              : 'large screen widescreen only'
          }
          onClick={this.closeMobileMenu}
        >
          <div className="navigation-links">
            {this.props.items.map((item) => (
              <NavLink
                to={item.url === '' ? '/' : item.url}
                key={item.url}
                className="item"
                activeClassName="active"
                exact={
                  settings.isMultilingual
                    ? item.url === `/${lang}`
                    : item.url === ''
                }
              >
                {item.title}
              </NavLink>
            ))}
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
            <div>
              <a
                href="https://europa.eu/european-union/about-eu_en"
                title="The EEA is an agency of the European Union"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={EUflag}
                  alt="The EEA is an agency of the European Union"
                  title="The EEA is an agency of the European Union"
                  height={64}
                  className="eu-flag"
                />
              </a>
            </div>
          </div>
        </Menu>
      </nav>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    (state) => ({
      items:
        state.navigation.items?.filter(
          (item) =>
            !(
              item?.url?.includes('http://') || item?.url?.includes('https://')
            ),
        ) || [],
      lang: state.intl.locale,
    }),
    { getNavigation },
  ),
)(Navigation);
