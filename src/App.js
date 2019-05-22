import React from 'react';
import './App.css';
import Counter from '../src/components/Counter';
import store from '../src/store/index';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
