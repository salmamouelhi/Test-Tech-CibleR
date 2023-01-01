// ModalContainer.test.js
import { mount, shallow } from 'enzyme';
import React from 'react';
import Landing from "../components/Landing";
import PhonePopup from '../components/popUpLogin';

it('renders Landing page', () => {
  const setScreen = () => undefined
  const wrapper = shallow(<Landing setScreen={setScreen} />);
  expect(wrapper.find('button')).toExist();
});

it('with a empty accesstoken, the button send to login', () => {
  let nextScreen = null;
  const setScreen = jest.fn().mockImplementation((e) => nextScreen = e);
  const wrapper = shallow(<Landing setScreen={setScreen} />);
  wrapper.find('button').simulate('click');
  expect(setScreen).toBeCalled();
  expect(nextScreen).toEqual('login');
});

it('with a empty accesstoken, the button send to login 2', () => {
  let nextScreen = null;
  const setScreen = jest.fn().mockImplementation((e) => nextScreen = e);
  const wrapper = shallow(<Landing setScreen={setScreen} />);
  window.CiblerContext = {accessToken: 'test'};
  wrapper.find('button').simulate('click');
  expect(setScreen).toBeCalled();
  expect(nextScreen).toEqual('gameplay');
});

it('displays an error message when the phone number is empty', () => {
  const wrapper = shallow(<PhonePopup />);
  wrapper.find('#phoneId').simulate('change', { target: { value: '' } });
  wrapper.find('form').simulate('submit');
  expect(wrapper.find('.error').text()).toEqual('Please enter a valid phone number');
});
