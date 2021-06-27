import { GO_BACK } from '../types/goBack';

export const goBack = (history) => {
  return {
    type: GO_BACK,
    payload: history,
  };
};
