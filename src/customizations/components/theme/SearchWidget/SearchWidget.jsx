/**
 * Search widget component.
 * @module components/theme/SearchWidget/SearchWidget
 */

import { getProxiedExternalContent } from '@eeacms/volto-corsproxy/actions';
import { createContent } from '@plone/volto/actions';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  Button,
  Form,
  Icon,
  Input,
  List,
  Menu,
  Popup
} from 'semantic-ui-react';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search',
    defaultMessage: 'Search',
  },
});

/**
 * SearchWidget component class.
 * @class SearchWidget
 * @extends Component
 */
class SearchWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onGoToSearchPage = this.onGoToSearchPage.bind(this);
    this.state = {
      text: '',
      section: false,
      suggestedWords: [],
    };
  }

  /**
   * On change text
   * @method onChangeText
   * @param {object} event Event object.
   * @param {string} value Text value.
   * @returns {undefined}
   */
  onChangeText(event, { value }) {
    this.setState({
      text: value,
    });
    this.searchSuggestions(value);
  }

  /**
   * On change section
   * @method onChangeSection
   * @param {object} event Event object.
   * @param {bool} checked Section checked.
   * @returns {undefined}
   */
  onChangeSection(event, { checked }) {
    this.setState({
      section: checked,
    });
  }

  /**
   * On go to the
   * @method onGoToSearchPage
   */
  onGoToSearchPage() {
    window.location = `http://search.apps.eea.europa.eu?q=${this.state.text}`;
  }

  /**
   * will search for suggestions based on partial match
   * @param {string} data
   */
  searchSuggestions = async (data) => {
    const searchTernUrl = `https://www.eea.europa.eu/eea-custom-search.tags?q=${data}`;
    const result = await this.props.getProxiedExternalContent(searchTernUrl);
    const resultFinal = Array.isArray(result) ? result : JSON.parse(result);

    if (Array.isArray(resultFinal)) {
      this.setState({ suggestedWords: resultFinal });
    } else {
      this.setState({ suggestedWords: [] });
    }
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <>
        <Popup
          position="bottom center"
          style={{ width: '446px', maxWidth: '500px' }}
          className="lol large screen only custom-search-pop"
          content={
            <div>
              <Input
                type="text"
                onChange={this.onChangeText}
                placeholder="Search..."
                action
                fluid
                size="mini"
                value={this.state.text}
              >
                <input />
                <Button
                  className="search-custom-eea"
                  onClick={this.onGoToSearchPage}
                  icon="search"
                ></Button>
              </Input>

              <div className="eea-search-links clearfix">
                <a
                  href="http://search.apps.eea.europa.eu"
                  className="pull-left"
                >
                  <span>Advanced search</span>
                </a>
                <a
                  className="pull-right"
                  href="https://www.eea.europa.eu/help/glossary"
                >
                  A-Z Glossary
                </a>
              </div>
              <List divided relaxed>
                {this.state.suggestedWords.map((word, index) => (
                  <List.Item key={index}>
                    <List.Content>
                      <List.Description as="a">
                        <a href={`http://search.apps.eea.europa.eu?q=${word}`}>
                          {word}
                        </a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          }
          on="click"
          popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
          trigger={
            <div className="large screen only">
              <Form>
                <Form.Field className="searchbox ">
                  <Input
                    aria-label={this.props.intl.formatMessage(messages.search)}
                    transparent
                    disabled
                    autoComplete="off"
                    placeholder={this.props.intl.formatMessage(
                      messages.searchSite,
                    )}
                    title={this.props.intl.formatMessage(messages.search)}
                  />
                  <button
                    aria-label={this.props.intl.formatMessage(messages.search)}
                  >
                    <Icon name="search" size="large" />
                  </button>
                </Form.Field>
              </Form>
            </div>
          }
        />

        <div className="mobile tablet computer only">
          <Form>
            <Form.Field className="searchbox">
              <Input
                aria-label={this.props.intl.formatMessage(messages.search)}
                name="SearchableText"
                transparent
                autoComplete="off"
                placeholder={this.props.intl.formatMessage(messages.searchSite)}
                title={this.props.intl.formatMessage(messages.search)}
                onChange={this.onChangeText}
                value={this.state.text}
              />

              <button
                aria-label={this.props.intl.formatMessage(messages.search)}
              >
                <Icon name="search" size="large" />
              </button>
            </Form.Field>
            {this.state.suggestedWords.length > 0 && (
              <Menu vertical fluid>
                {this.state.suggestedWords.map((word, index) => (
                  <Menu.Item
                    key={`menu-${index}`}
                    href={`http://search.apps.eea.europa.eu?q=${word}`}
                  >
                    {word}
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Form>
        </div>
      </>
    );
  }
}

export default compose(
  withRouter,
  injectIntl,
  connect(
    (state, ownProps) => ({
      request: state.content.subrequests[ownProps.block] || {},
      content: state.content.subrequests[ownProps.block]?.data,
      subrequests: state.content.subrequests,
      thestate: state,
    }),
    { createContent, getProxiedExternalContent },
  ),
)(SearchWidget);
