export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{6,}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9_.\-]+\@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,3}$/;
export const MOBILE_REGEX = /^[0-9]{10}$/;
export const PINCODE_REGEX = /^[0-9]{6}$/;
export const IFSC_REGEX = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
export const PAN_REGEX = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
export const GST_REGEX =
  /^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}Z[0-9A-Za-z]{1}$/;
export const AADHAR_REGEX = /^[0-9]{12}$/;
