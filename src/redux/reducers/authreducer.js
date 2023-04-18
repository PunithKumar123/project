const initialstate = [];
export const authreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Register":
      return (state = action.payload);
    default:
      return state;
  }
};

export const updateReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        [action.payload.page]: action.payload.formData,
      };
    default:
      return state;
  }
};
