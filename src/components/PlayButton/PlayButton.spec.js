import React from 'react';
import { shallow } from 'enzyme';
import PlayButton from './PlayButton';

describe('Tests for the PlayButton component', () => {
  it('Tests if the button is initially disabled when nothing is added into the nickname field', () => {
    const wrapper = shallow(<PlayButton />);
    const button = wrapper.find('#play-blackjack-button');
    expect(button.props().disabled).toBe(true);
  });

  it('Tests if the button is disabled when < 5 characters are added into the nickname field', () => {
    const wrapper = shallow(<PlayButton />);
    const nicknameField = wrapper.find('#nickname-text-field');
    nicknameField.simulate('change', { target: { value: 'test' } });
    wrapper.update();
    const button = wrapper.find('#play-blackjack-button');
    expect(button.props().disabled).toBe(true);
  });

  it('Tests if the button is enabled when > 5 characters are added into the nickname field', () => {
    const wrapper = shallow(<PlayButton />);
    const nicknameField = wrapper.find('#nickname-text-field');
    nicknameField.simulate('change', {
      target: { value: 'shouldPassTest' },
    });
    wrapper.update();
    const button = wrapper.find('#play-blackjack-button');
    expect(button.props().disabled).toBe(false);
  });
});
