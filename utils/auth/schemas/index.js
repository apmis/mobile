import * as yup from "yup";

const nigerianPhoneRegExp = /^([0]{1})[0-9]{10}$/;

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required!"),
});
export const createUserSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is a required field"),
  lastname: yup.string().required("Lastname is a required field"),
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required!"),
  phoneNumber: yup
    .string()
    .matches(nigerianPhoneRegExp, "Enter a valid phone number (0900000000000).")
    .required("Enter phone number"),
  password: yup.string().min(4).required("Password is required!"),
  confirmPassword: yup
    .string()
    .min(4)
    .required("Confirm password is required!")
    .oneOf([yup.ref("password"), null], "Passwords must match!"),
});
export const createPasswordSchema = yup.object().shape({
  password: yup.string().required("Password is required!"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required!")
    .oneOf([yup.ref("password"), null], "Passwords must match!"),
});

export const createUserProfile = yup.object().shape({
  firstname: yup.string().required("Firstname is a required field"),
  lastname: yup.string().required("Lastname is a required field"),
  middlename: yup.string().required("Middlename is a required field"),
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required!"),
  phone: yup
    .string()
    .matches(nigerianPhoneRegExp, "Enter a valid phone number (0900000000000).")
    .required("Enter phone number"),
  phone2: yup
    .string()
    .matches(
      nigerianPhoneRegExp,
      "Enter a valid phone number (0900000000000)."
    ),

  // dob: yup.string().required("Enter your Date of birth"),
  // religion: yup.string().required("Religion is a required field"),
  profession: yup.string().required("Profession is a required field"),
  // maritalstatus: yup.string().required("Marital status is a required field"),
  // country: yup.string().required("Country is a required field"),
  address: yup.string().required("Residential Address is a required field"),
  // state: yup.string().required("State is a required field"),
  // lga: yup.string().required("Local government is a required field"),
  town: yup.string(), // .required("Town is a required field"),
  city: yup.string().required("City is a required field"),
  neighbourhood: yup.string(), //.required("Neighbourhood is a required field"),
  streetAddress: yup.string(), //.required("Street address is a required field"),
});
