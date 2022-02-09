import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

 test('should set default state', ()  => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
 });

 test('should remove expense by id', ()  => {
     const action = {
         type: 'REMOVE_EXPENSE',
         id: expenses[1].id
     };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
 });

 test('should not remove expense if id not found', ()  => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});

test('should add expense', ()  => {
    const expense = {
        id:uuid(),
        description: 'luchos',
        note: '666',
        amount: 0,
        createAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses.concat(expense));
});

test('should edit expense', ()  => {
    const expense = {
        description: 'luchos',
        note: '666',
        amount: 0,
        createAt: 0,
        id: 2
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: expense
    };
   const state = expensesReducer(expenses, action);
   expect(state[1]).toEqual(expense);
});

test('should NOT edit expense if id not found', ()  => {
    const expense = {
        description: 'luchos',
        note: '666',
        amount: 0,
        createAt: 0,
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: expense
    };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});