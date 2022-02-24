import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'
import React from 'react';

import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import { Provider } from 'react-redux';

import './firebase/firebase';

//import './playground/promises';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill',  amount:4500,  createAt:1000 }));
// store.dispatch(addExpense({ description: 'Gas bill',  createAt:2000 }));
// store.dispatch(addExpense({ description: 'Rent',  amount:3500, createAt:500 }));

// store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>loading....</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

//next(15) 160