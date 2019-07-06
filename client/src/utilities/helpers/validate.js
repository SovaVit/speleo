export const required = value => (value ? undefined : "Required");
export const notEmpty = value => (value !== "..." ? undefined : "Required");
export const notNumber = value =>
  isFinite(value) ? undefined : "Not a number";
export const isDate = value => {
  let pattern = /^\d\d\.\d\d\.\d{4}$/; 
 return pattern.test (value) ? undefined: "Date format must be dd.mm.yyyy"
}
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
