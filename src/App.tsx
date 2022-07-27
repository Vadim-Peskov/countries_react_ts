import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/useReduxHooks';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import variables from './styles/variables';
import mediaQueries from './styles/mediaQueries';
import animations from './styles/animations';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Page404 from './pages/Page404';
import Header from './components/common/Header';
import Container from './components/common/Container';

const App: FC = () => {
  const theme = useAppSelector(state => state.countries.theme);
  const styles = {...theme, ...variables, ...animations, ...mediaQueries};

  return (
    <Router>
      <ThemeProvider theme={styles}>
        <Container>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:country' element={<CountryPage/>}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  )
}
export default App;