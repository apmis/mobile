import * as yup from "yup";

const nigerianPhoneRegExp = /^([0]{1})[0-9]{10}$/;

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required!"),
});
export const createUserSchema = yup.object().shape({
  fullName: yup.string().required("Fullname is a required field"),
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
