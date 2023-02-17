import React from 'react';
import ReactDOM from 'react-dom';
/*redux*/import { Provider } from 'react-redux';/*redux*/
/*recoil*/
// import { RecoilRoot } from 'recoil';
/*recoil*/

import axios from 'axios';

/*redux*/import { PersistGate } from 'redux-persist/integration/react'/*redux*/

import './index.scss';

import App from './App';

import * as config from './configs';

import reportWebVitals from './reportWebVitals';

/*redux*/import store, { persistor } from './redux/configureStore';/*redux*/

/*redux*/
config.setupAxios(axios, store);
/*redux*/
/*recoil*/
// config.setupAxios(axios);
/*recoil*/

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
