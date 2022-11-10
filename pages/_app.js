import { ThemeProvider } from '../contexts/theme';
import '../styles/globals.css';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Navbar.css';
import '../styles/About.css';
import '../styles/Contact.css';
import '../styles/Footer.css';
import '../styles/Skills.css';
import '../styles/ProjectContainer.css';
import '../styles/Projects.css';
import '../styles/ScrollToTop.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
