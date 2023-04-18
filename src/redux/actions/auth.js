export const Register = ({
  profileImage,
  fname,
  email,
  phone,
  city,
  state,
  country,
}) => {
  return async (dispatch) => {
    try {
      const RegisterEnt = {
        profileImage,
        fname,
        email,
        phone,
        city,
        state,
        country,
      };
      dispatch({ type: "Register", payload: RegisterEnt });
    } catch (error) {
      console.log(error);
    }
  };
};

export const update = (formData) => ({
  type: "UPDATE_FORM_DATA",
  payload: formData,
});
