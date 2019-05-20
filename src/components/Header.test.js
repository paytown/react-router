import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header', () => {
  it('render header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
