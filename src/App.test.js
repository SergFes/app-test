import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const sum = (a,b)=>a+b;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('function sum', () => {
    expect(sum(2,3)).toEqual(5)
});
