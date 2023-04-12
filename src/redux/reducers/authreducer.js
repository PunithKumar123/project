const initialstate = [];
export const authreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Register":
      return (state = action.payload);
    default:
      return state;
  }
};
