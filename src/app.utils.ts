const PASSWORD =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const PASSWORD_MESSAGE =
  'Password should have 1 uppercase, lowercase along with a number and special character.';

export const REGEX = {
  PASSWORD,
  PASSWORD_MESSAGE
};
