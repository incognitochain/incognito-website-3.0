import 'antd/dist/antd.css';
import './reset.scss';

import Footer from '@components/Footer';
import Header from '@components/Header';
import withApp from '@src/app/App.enhance';
import { MainRoute } from '@src/modules';
import { ThemedGlobalStyle, ThemeProvider } from '@src/theme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <Router>
        <Header />
        <MainRoute />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default withApp(React.memo(App));
