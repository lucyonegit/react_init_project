import type from "./actionType";

export const test = (data) => {
  return {
    type: type.SUCCEED,
    data
  };
};
