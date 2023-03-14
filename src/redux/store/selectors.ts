import { RootState } from './index';

export const selectUsers = (state: RootState) => state.users;
export const selectAuth = (state: RootState) => state.auth;
