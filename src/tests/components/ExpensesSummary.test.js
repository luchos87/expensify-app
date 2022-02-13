import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('render ExpensesSummary with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot(); 
});

test('render ExpensesSummary with multiples expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={231235} />);
    expect(wrapper).toMatchSnapshot(); 
});