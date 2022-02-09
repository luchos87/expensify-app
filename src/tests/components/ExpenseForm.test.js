import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from "moment";

test('should render ExpenseForm corectly', ()  => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data ', ()  => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', ()  => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should set description pn input change', ()  => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {target: { value }});
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should set note on input change', ()  => {
    const value = 'new NOTE'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {target: { value }});
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should set amount if is valid', ()  => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: { value }});
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should not set amount if is invalid', ()  => {
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: { value }});
    expect(wrapper.state('amount')).not.toBe(value);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should call onSubmit prop for valid form sbmission', ()  => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createAt: expenses[0].createAt,
    }); 
}); 

test('should set new date on date change', ()  => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
    expect(wrapper).toMatchSnapshot(); 
}); 

test('should set calendar focus on date change', ()  => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
    expect(wrapper).toMatchSnapshot(); 
}); 