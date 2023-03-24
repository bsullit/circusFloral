export const getError = (error) => {
  return error.response && error.response.message
    ? error.response.message
    : error.message;
};
