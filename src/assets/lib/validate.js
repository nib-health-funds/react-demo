
/**
 * Validate the form
 * @param   {object} values
 * @returns {object}
 */
export default function(values) { //TODO: use a validation package
  const errors = {};

  if (values.title === '') {
    errors.title = 'Please choose your title.';
  }

  if (values.name === '') {
    errors.name = 'Please enter your name so we can personalise your experience.';
  }

  if (values.phone === '') {
    errors.phone = 'Please enter your phone number so we can call you.';
  }

  if (values.email === '') {
    errors.email = 'Please enter your email address so we can contact you.';
  }

  if (values.gender === '') {
    errors.gender = 'Please choose your gender.';
  }

  return errors;
}
