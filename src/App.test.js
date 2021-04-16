import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { AiFillBell } from 'react-icons/ai';
import { render, screen } from '@testing-library/react';

import { IconButton } from 'components';
import App from './App';
import { carouselEndpointData } from 'config/Helpers/strings';
const root = document.createElement('div');
ReactDOM.render(<App />, root);
test('renders from the strings file', () => {
  expect(root.querySelector('h3').textContent).toBe(
    carouselEndpointData[0].title
  );
});
describe('<IconButton/>', () => {
  it('renders icon when passed as children', () => {
    const wrapper = shallow(
      <IconButton>
        <AiFillBell />
      </IconButton>
    );
    expect(wrapper.contains(<AiFillBell />))
  });
});
