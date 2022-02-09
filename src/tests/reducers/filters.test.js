import filtersReducers from '../../reducers/filters';
import moment from 'moment';

 test('should setup default filter values', ()  => {
     const state = filtersReducers(undefined, { type: '@@INIT'});
     expect(state).toEqual({
         text: '',
         sortBy: 'date',
         startDate: moment().startOf('month'),
         endDate: moment().endOf('month')
     })
 });

 test('should set sortBy to amount', ()  => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()  => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()  => {
    const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text: 'luchos'});
    expect(state.text).toBe('luchos');
});

test('should set startDate filter', ()  => {
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', ()  => {
    const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});