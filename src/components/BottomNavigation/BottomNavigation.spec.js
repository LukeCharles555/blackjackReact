import React from 'react';
import { shallow } from 'enzyme';
import BottomNavigation from './BottomNavigation';

describe('Tests for the bottom navigation bar component', () => {
  it('Tests if the app loads up on the correct home page', () => {
    global.window = { location: { pathname: null } };
    const wrapper = shallow(<BottomNavigation />);
    wrapper.find('#home-button').simulate('click');
    expect(global.window.location.pathname).toEqual('/');
  });
});
