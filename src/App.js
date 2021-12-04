import { ThemeProvider } from 'styled-components';
import { GlobalTheme, Theme } from './themes'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/organismes/Nav';
import { navData } from './data/navData';
import Home from './components/views/Home'
import About from './components/views/About'
import Articles from './components/views/Articles'
import Calcs from './components/views/Calcs'
import Contacts from './components/views/Contacts'
import Footer from './components/organismes/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Nav navData={navData} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route path="/calcs" exact element={<Calcs />} />
        <Route path="/contacts" exact element={<Contacts />} />
      </Routes>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
