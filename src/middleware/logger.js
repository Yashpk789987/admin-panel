export default (store) => (next) => (action) => {
  const returnedValue = next(action);
  if (
    process.env.REACT_APP_STORE_LOGS &&
    process.env.REACT_APP_STORE_LOGS === "enabled"
  ) {
    console.group(action.type);
    console.log("The action:::", action);
    console.log("The new state:::", store.getState());
    console.groupEnd();
  }
  return returnedValue;
};
