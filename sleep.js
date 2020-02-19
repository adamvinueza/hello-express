// sleep performs asynchronous sleeping.
module.exports = async ms => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
