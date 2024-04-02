import { makeStyles } from "@mui/styles";
import { Flip, toast } from "react-toastify";

export const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.08)",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.08)",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.08)",
    },
    "& .MuiOutlinedInput-input": {
      color: "lightgrey",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "lightgrey",
    },
    "& .MuiInputLabel-outlined": {
      color: "lightgrey",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "lightgrey",
    },
  },
});

export const successToast = (title) => {
  toast.success(title, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    theme: "dark",
    transition: Flip,
  });
};

export const errorToast = (title) => {
  toast.warn(title, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    theme: "dark",
    transition: Flip,
  });
};
