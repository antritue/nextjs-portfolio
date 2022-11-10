import { ThemeProvider } from '../contexts/theme';
import '../styles/globals.css';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Navbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
