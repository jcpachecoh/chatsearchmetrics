import * as React from 'react';
import './css/main.css';
import { Provider } from 'react-redux';
import { MainLayout } from './components/MainLayout';
import store from './store-index';

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
          <div className="App">
              <MainLayout />
          </div>
        </Provider>
    );
  }
}

export default App;
