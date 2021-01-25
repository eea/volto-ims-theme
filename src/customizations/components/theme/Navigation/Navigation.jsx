/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import { getNavigation } from '@plone/volto/actions';
import { Anontools, SearchWidget } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { Accordion, Icon, Image, List, Menu, Popup } from 'semantic-ui-react';
import { settings } from '~/config';
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
const languagesList = [
  { name: 'Albanian', code: 'sq' },
  { name: 'Български', code: 'bg' },
  { name: 'Bosnian', code: 'bs' },
  { name: 'čeština', code: 'cs' },
  { name: 'Hrvatski', code: 'hr' },
  { name: 'dansk', code: 'da' },
  { name: 'Nederlands', code: 'nl' },
  { name: 'ελληνικά', code: 'el' },
  { name: 'English', code: 'en' },
  { name: 'eesti', code: 'et' },
  { name: 'Suomi', code: 'fi' },
  { name: 'Français', code: 'fr' },
  { name: 'Deutsch', code: 'de' },
  { name: 'magyar', code: 'hu' },
  { name: 'Íslenska', code: 'is' },
  { name: 'italiano', code: 'it' },
  { name: 'Latviešu', code: 'lv' },
  { name: 'lietuvių', code: 'lt' },
  { name: 'Macedonian', code: 'mk' },
  { name: 'Malti', code: 'mt' },
  { name: 'Norsk', code: 'no' },
  { name: 'polski', code: 'pl' },
  { name: 'Português', code: 'pt' },
  { name: 'Română', code: 'ro' },
  { name: 'slovenčina', code: 'sk' },
  { name: 'Slovenščina', code: 'sl' },
  { name: 'Español', code: 'es' },
  { name: 'Svenska', code: 'sv' },
  { name: 'Türkçe', code: 'tr' },
];

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
      activeIndex: -1,
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

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

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
    const { activeIndex } = this.state;

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
                onClick={this.closeMobileMenu}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="tools-wrapper">
            {/* <LanguagesWidget></LanguagesWidget> */}
            <Popup
              on="click"
              className="large screen only custom-search-pop"
              trigger={
                <div className="tools-change-language">
                  <Icon name="globe" size="big" />
                  <span>EN</span>
                </div>
              }
              content={
                <List bulleted className="languages-list">
                  {languagesList.map((language, index) => (
                    <List.Item key={index}>
                      <List.Content>
                        <List.Description>
                          <a
                            href={`https://www.eea.europa.eu/${language.code}`}
                          >
                            {`${language.name} (${language.code})`}
                          </a>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              }
              position="top left"
            />

            <div className="mobile tablet computer only fill-width">
              <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                  className="languages-title-list"
                >
                  <Icon name="dropdown" />
                  EEA homepage in your language
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <List bulleted className="languages-list">
                    {languagesList.map((language, index) => (
                      <List.Item key={index}>
                        <List.Content>
                          <List.Description>
                            <a
                              href={`https://www.eea.europa.eu/${language.code}`}
                            >
                              {`${language.name} (${language.code})`}
                            </a>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </Accordion.Content>
              </Accordion>
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
