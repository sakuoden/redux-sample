import { createAction } from "@reduxjs/toolkit";

const FEATURE= 'number';
export const up = createAction<number>(`${FEATURE}/up`);
export const down = createAction<number>(`${FEATURE}/down`);
