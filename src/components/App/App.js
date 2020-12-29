import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import SearchResults from '../SearchResults/SearchResults';
import SearchResultsContainer from '../SearchResults/SearchresultsContainer';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter,  Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path="/list/:id" component={List} />
          <Route exact path="/Search/..." component={SearchResults} />
          <Route exact path="/search/:searchString" component={SearchResultsContainer} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;
