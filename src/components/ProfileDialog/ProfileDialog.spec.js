import React from 'react';
import { shallow } from 'enzyme';
import ProfileDialog from './ProfileDialog';

const mockUsers = {
  users: [
    {
      firstName: 'John',
      lastName: 'Test',
      email: 'john@test.com',
    },
    {
      firstName: 'Bob',
      lastName: 'Builder',
      email: 'bob@builder.com',
    },
  ],
};
describe('Tests for the Profile dialog component', () => {
  it('Tests that the right user is added into the profile', () => {
    const wrapper = shallow(
      <ProfileDialog
        data={mockUsers.users}
        open={jest.fn()}
        handleClose={jest.fn()}
      />,
    );
    expect(wrapper.find('#name').text()).toEqual('Name: John Test');
  });

  it('Tests that all the correct user data is added into the profile', () => {
    const wrapper = shallow(
      <ProfileDialog
        data={mockUsers.users}
        open={jest.fn()}
        handleClose={jest.fn()}
      />,
    );
    expect(wrapper.find('#name').text()).toEqual('Name: John Test');
    expect(wrapper.find('#email').text()).toEqual(
      'Email: john@test.com',
    );
    expect(wrapper.find('#profile-avatar').text()).toEqual('JT');
  });
});
