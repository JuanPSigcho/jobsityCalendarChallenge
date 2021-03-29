import { state } from '@angular/animations';
import { createReducer, on, props } from '@ngrx/store';
import { getCalendar } from './calendar.action';

export const initialState = [];

export const calendarReducer = createReducer(
  initialState,
  on(getCalendar, (state, { listDays }) => {
    console.log('getCalendarState', state, 'new state', listDays);
    return [listDays];
  })
);
