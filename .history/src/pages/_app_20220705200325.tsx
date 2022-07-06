import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default MyApp;
