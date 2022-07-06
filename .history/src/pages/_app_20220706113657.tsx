import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
