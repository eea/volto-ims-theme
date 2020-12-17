/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
import { Segment, Header, Grid, Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
class Footer extends Component {
  render() {
    return (
      <Segment className="footer-wrapper">
        <div className="first-footer">
          <Segment text-align="center" className="portal-footer">
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  <a href="https://www.eionet.europa.eu/">Eionet</a>
                </Header>
                <p>
                  European Environment Information and Observation Network
                  (Eionet)
                </p>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  The EEA also contributes to
                </Header>
                <div className="two-tables">
                  <Table className="left-table">
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://biodiversity.europa.eu/">BISE</a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://biodiversity.europa.eu/">
                            Biodiversity Information System for Europe
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          <a href="https://climate-adapt.eea.europa.eu/">
                            Climate-ADAPT
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://climate-adapt.eea.europa.eu/">
                            Climate Adaptation Platform
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://insitu.copernicus.eu/">
                            Copernicus In Situ
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://insitu.copernicus.eu/">
                            Copernicus in situ component
                          </a>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://land.copernicus.eu/">
                            Copernicus Land
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-description">
                          <a href="https://land.copernicus.eu/">
                            Copernicus land monitoring
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  <Table className="right-table">
                    <Table.Body>
                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://prtr.eea.europa.eu/">
                            European Pollutant Release and Transfer Register
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://prtr.eea.europa.eu/">E-PRTR</a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://forest.eea.europa.eu/">
                            Forest Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://forest.eea.europa.eu/">FISE</a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
                            Information Platform for Chemical Monitoring
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://ipchem.jrc.ec.europa.eu/RDSIdiscovery/ipchem/index.html">
                            IPCHEM
                          </a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://water.europa.eu/marine">
                            Marine Water Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://water.europa.eu/marine">
                            WISE-Marine
                          </a>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row className="right-row">
                        <Table.Cell className="table-link-description">
                          {' '}
                          <a href="https://water.europa.eu/freshwater">
                            Fresh Water Information System for Europe
                          </a>
                        </Table.Cell>
                        <Table.Cell className="table-link-title">
                          {' '}
                          <a href="https://water.europa.eu/freshwater">
                            WISE-FreshWater
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  Follow us
                </Header>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <a
                        className="link-plain media"
                        title="Follow us on Twitter"
                        href="https://twitter.com/euenvironment"
                      >
                        <span className="eea-icon eea-icon-twitter-square eea-icon-4x" />
                      </a>
                      <a
                        className="link-plain media"
                        title="Follow us on Facebook"
                        href="https://www.facebook.com/European.Environment.Agency"
                      >
                        <span className="eea-icon eea-icon-facebook-square eea-icon-4x" />
                      </a>
                      <a
                        className="link-plain media"
                        title="Follow us on LinkedIn"
                        href="https://www.linkedin.com/company/european-environment-agency"
                      >
                        <span className="eea-icon  eea-icon-linkedin-square eea-icon-4x" />
                      </a>
                      <a
                        className="link-plain media"
                        title="Follow us on YouTube"
                        href="https://www.youtube.com/user/EEAvideos"
                      >
                        <span className="eea-icon eea-icon-youtube-square eea-icon-4x" />
                      </a>
                      <a
                        className="link-plain media"
                        title="Subscribe to RSS Feed"
                        href="/subscription/news-feeds"
                      >
                        <span className="eea-icon eea-icon-rss-square eea-icon-4x" />
                      </a>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="media">
                        <a
                          className="link-plain media-link align-center"
                          title="Subscribe by email"
                          href="/subscription/targeted-subscription"
                        >
                          <span className="eea-icon eea-icon-4x eea-icon-newspaper-o" />
                          <div className="media-body">
                            <span>
                              Sign up to receive our news notifications
                            </span>
                            <br />
                            <span>and our quarterly e-newsletter</span>
                          </div>
                        </a>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
            <div className="colophon-section">
              <div className="section-centered">
                <Header as="h2" className="section-header">
                  <a href="/contact-us">Contact us</a>
                </Header>
                <Grid columns={3}>
                  <Grid.Row className="media-contactus">
                    <Grid.Column>
                      <div className="mx-2">
                        <Icon name="map marker alternate" size="big" />
                        <span>
                          Kongens Nytorv 6 <br /> 1050 Copenhagen K
                        </span>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="mx-2">
                        <Icon name="phone" size="big" />
                        <span>
                          Phone number:
                          <br />
                          <a href="tel:+4533367100">(+45) 33 36 71 00</a>
                        </span>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="mx-2">
                        <a href="https://www.eea.europa.eu/contact-us">
                          <Icon name="comment" size="big" />
                        </a>
                        <span>
                          <a
                            href="https://www.eea.europa.eu/contact-us"
                            className="block"
                          >
                            Ask your question
                          </a>
                          <br />
                          <a href="https://www.eea.europa.eu/media/">
                            Media enquiries
                          </a>
                        </span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          </Segment>
        </div>

        <div className="second-footer">
          <Segment textAlign="center" className="portal-colophon">
            <div className="colophon-section eu-section">
              <a href="https://europa.eu/european-union/about-eu_en">
                <span
                  className="icon-siteaction-europe-flag"
                  alt="EU flag"
                  title="European Union Flag"
                />
                <span className="europe-agency-text">
                  <em> The EEA is an agency of the European Union</em>
                </span>
              </a>
            </div>

            <div className="colophon-section eea-software-info">
              <p className="colophon-links">
                <span className="eea-icon eea-icon-tasks" />
                Engineered by:&nbsp;
                <a href="https://www.eea.europa.eu/help/contact-info">
                  EEA Web Team
                </a>
              </p>

              <p className="colophon-links">
                Software updated on
                <em> 23 November 2020 18:51 </em>
                from version <em>20.10.13</em>
              </p>
              <p className="colophon-links">
                Software version:&nbsp;
                <a href="https://github.com/eea/eea.docker.kgs/releases">
                  EEA Plone KGS 20.11.21
                </a>
              </p>

              <p className="colophon-links">
                <a
                  href="https://www.eea.europa.eu/code"
                  title="Code for developers"
                >
                  Code for developers
                </a>
              </p>

              <p className="colophon-links">
                <a href="https://status.eea.europa.eu" title="Systems Status">
                  Systems Status
                </a>
              </p>

              <p className="colophon-links">
                <a href="https://www.eea.europa.eu/legal/">Legal notice</a>
              </p>

              <p className="colophon-links">
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by/2.5/dk/deed.en_GB"
                  title="Creative Commons Attribution License"
                >
                  <span className="eea-icon eea-icon-creative-commons" />
                  <span>Creative commons license</span>
                </a>
              </p>

              <p className="colophon-links">
                <a
                  href="https://www.eea.europa.eu/login_form"
                  title="Log in to CMS"
                >
                  <strong>CMS login</strong>
                </a>
              </p>
            </div>
          </Segment>
        </div>
      </Segment>
    );
  }
}

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default Footer;
