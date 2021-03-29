import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Calendar Component] Increment');
export const getCalendar = createAction(
  '[Calendar Component] GetCalendar',
  props<{ listDays }>()
);
export const reset = createAction('[Calendar Component] Reset');
