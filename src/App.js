import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import './App.css';
import HomeContainer from './components/Home/HomeContainer';
import PeopleContainer from './components/People/PeopleContainer';
import FilmsContainer from './components/Films/FilmsContainer';
import StarshipsContainer from './components/Starships/StarshipsContainer';
import VehiclesContainer from './components/Vehicles/VehiclesContainer';
import SpeciesContainer from './components/Species/SpeciesContainer';
import PlanetsContainer from './components/Planets/PlanetsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/'
            render = {() => <HomeContainer />} />
          <Route path = '/people/'
            render = {() => <PeopleContainer />} />
          <Route path = '/planets/'
            render = {() => <PlanetsContainer />} />
          <Route path = '/films/'
            render = {() => <FilmsContainer />} />
          <Route path = '/starships/'
            render = {() => <StarshipsContainer />} />
          <Route path = '/vehicles/'
            render = {() => <VehiclesContainer />} />
          <Route path = '/species/'
            render = {() => <SpeciesContainer />} />
        </Switch>
      </div>
    );
  }
}

const AppContainer = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
export default AppContainer;
