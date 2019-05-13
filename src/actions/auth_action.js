import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_REPEAT_CHANGED
} from './types';

export const emailChanged = text => {
  return { type: EMAIL_CHANGED, payload: text };
};

export const passwordChanged = text => {
  return { type: PASSWORD_CHANGED, payload: text };
};

export const passwordRepeatChanged = text => {
  return { type: PASSWORD_REPEAT_CHANGED, payload: text };
};
