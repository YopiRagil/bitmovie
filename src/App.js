import './App.css';
import MainRoutes from './routes/MainRoutes';
import { Provider } from 'react-redux';
import store from './redux';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Provider store={store}>
          <MainRoutes />
        </Provider>
      </Fragment>
    </div>
  );
}

export default App;
