export const required = value => (value ? undefined : "Required");
export const notEmpty = value => (value !== "..." ? undefined : "Required");
export const notNumber = value =>
  isFinite(value) ? undefined : "Not a number";
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
