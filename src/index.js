// import './index.css'
import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingScreen from './elements/LoadingScreen/LoadingScreen';

const AppLoader = () => {
    const App = lazy(() => import("./App"));
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <App/>
        </Suspense>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <AppLoader/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
