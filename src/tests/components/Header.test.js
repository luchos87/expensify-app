import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header corectly', ()  => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click', ()  => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});