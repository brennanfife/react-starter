import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Layout from '../Layout';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = ({ children, history, location }) => (
  <Layout.Header>
    <Logo />
    <Navbar activePathname={location.pathname} history={history}>
      {children}
    </Navbar>
  </Layout.Header>
);

Header.propTypes = {
  children: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);