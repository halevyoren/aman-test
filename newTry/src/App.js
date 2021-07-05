import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={HomePage} />
      </Router>
    </Provider>
  );
}

export default App;
