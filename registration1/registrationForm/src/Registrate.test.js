import React from 'react';
import ReactDOM from 'react-dom';
import Registrate from './Registrate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registrate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
